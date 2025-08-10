import React from 'react';
import Box from '../common/Box';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Register = () => {
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleRegister}>
      <Box className="flex flex-col gap-2">
        <Box>
          <Input
            name="firstName"
            placeholder="Enter your first name."
            type="text"
            // onChange={handleChange}
            // className={` ${errors.email ? "border border-red-600" : ""} `}
          />
        </Box>
        <Box>
          <Input
            name="firstName"
            placeholder="Enter your last name."
            type="text"
            // onChange={handleChange}
            // className={` ${errors.password ? "border border-red-600" : ""} `}
          />
        </Box>
        <Box>
          <Input
            name="email"
            placeholder="Enter yout email address."
            type="email"
            // onChange={handleChange}
            // className={` ${errors.password ? "border border-red-600" : ""} `}
          />
        </Box>
        <Box>
          <Input
            name="password"
            placeholder="Enter your password"
            type="password"
            // onChange={handleChange}
            // className={` ${errors.password ? "border border-red-600" : ""} `}
          />
        </Box>
        <Box>
          <Input
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
            // onChange={handleChange}
            // className={` ${errors.password ? "border border-red-600" : ""} `}
          />
        </Box>
        <Box>
          <Button className="min-w-full cursor-pointer" type="submit">
            Register
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Register;
