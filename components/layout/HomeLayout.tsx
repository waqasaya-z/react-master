import React, { PropsWithChildren } from "react";
import Navbar from "../common/Navbar";
import { Toaster } from "sonner";
import { AuthProvider } from "@/providers/SessionProvider";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <div className="bg-neutral-900 text-white">{children}</div>
        <Toaster position="top-right" />
      </AuthProvider>
    </>
  );
};

export default HomeLayout;
