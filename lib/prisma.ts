import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function checkConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Prisma connected successfully');
  } catch (error) {
    console.error('❌ Prisma connection failed:', error);
  }
}
checkConnection();

export default prisma;
