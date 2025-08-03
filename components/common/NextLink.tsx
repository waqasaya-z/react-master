"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useState, useTransition } from "react";
import Spinner from "./Spinners/Spinner";

const NextLink = ({
  href,
  children,
  className,
}: PropsWithChildren<{
  href: string;
  className?: string;
}>) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showSpinner, setShowSpinner] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowSpinner(true);

    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <>
      <Link href={href} onClick={handleClick} className={className}>
        {children}
      </Link>
      {isPending && showSpinner && <Spinner />}
    </>
  );
};

export default NextLink;
