import React, { PropsWithChildren } from "react";
import Navbar from "../common/Navbar";
import { Toaster } from "sonner";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-900 text-white h-screen">{children}</div>
      <Toaster position="top-right" />
    </>
  );
};

export default HomeLayout;
