import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  try {
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) return NextResponse.json({ error: 'User already exists' }, { status: 400 });

    const hashedPassport = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassport,
      },
    });

    return NextResponse.json(
      {
        message: 'User registered successfully',
        user: { id: user.id, email: user.email },
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
