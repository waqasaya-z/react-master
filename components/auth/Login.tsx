import React from "react";
import Box from "../common/Box";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import GoogleIcon from "@/icons/GoogleIcon";
import GithubIcon from "@/icons/GithubIcon";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <form>
      <Box className="flex flex-col gap-2">
        <Box>
          <Input placeholder="Email" />
        </Box>
        <Box>
          <Input placeholder="Password" />
        </Box>
        <Box>
          <Button className="min-w-full cursor-pointer" type="submit">
            {" "}
            Login{" "}
          </Button>
        </Box>
        <Box className="relative my-4">
          <Separator />
          <Box
            tag="span"
            className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-2 text-sm text-muted-foreground"
          >
            OR
          </Box>
        </Box>
        <Box>
          <Button
            className="min-w-full cursor-pointer"
            type="button"
            onClick={() => signIn("google")}
          >
            <GoogleIcon /> Google
          </Button>
        </Box>
        <Box>
          <Button
            className="min-w-full cursor-pointer"
            type="button"
            onClick={() => signIn("github")}
          >
            <GithubIcon /> Github
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Login;
