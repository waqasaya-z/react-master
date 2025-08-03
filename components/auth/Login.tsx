import React, { useState } from "react";
import Box from "../common/Box";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import GoogleIcon from "@/icons/GoogleIcon";
import GithubIcon from "@/icons/GithubIcon";
import { signIn } from "next-auth/react";
import { signInSchema } from "@/validation/auth";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = signInSchema.safeParse(formData);

    if (!result.success) {
      const formatted = result.error.format();
      setErrors({
        email: formatted.email?._errors?.[0],
        password: formatted.password?._errors?.[0],
      });
    } else {
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className="flex flex-col gap-2">
        <Box>
          <Input
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            className={` ${errors.email ? "border border-red-600" : ""} `}
          />
        </Box>
        <Box>
          <Input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            className={` ${errors.password ? "border border-red-600" : ""} `}
          />
        </Box>
        <Box>
          <Button className="min-w-full cursor-pointer" type="submit">
            Login
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
