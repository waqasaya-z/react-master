import React from "react";
import CheckoutForm from "./components/CheckoutForm";
import Box from "@/components/common/Box";
import CheckoutImage from "./components/CheckoutImage";

const CheckoutPage = () => {
  return (
    <Box className="flex">
      <CheckoutImage />
      <CheckoutForm />
    </Box>
  );
};

export default CheckoutPage;
