import React, { PropsWithChildren } from "react";
import Navbar from "../common/Navbar";
import { Toaster } from "sonner";
import { AuthProvider } from "@/providers/SessionProvider";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <AuthProvider>
        <div className="bg-neutral-900 text-white h-screen">{children}</div>
      </AuthProvider>
      <Toaster position="top-right" />
    </>
  );
};

export default HomeLayout;
