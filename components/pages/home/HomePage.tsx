import Box from "@/components/common/Box";
import { auth } from "@/lib/auth";
import React from "react";

const HomePage = async () => {
  const session = await auth();
  console.log("Sesssion", session);

  if (!session) {
    return null;
  }

  return (
    <Box className="flex h-80">
      <Box tag="h1" className="font-extrabold text-6xl my-auto pl-5" > Welcome, {session.user?.name}! </Box>
    </Box>
  );
};

export default HomePage;
