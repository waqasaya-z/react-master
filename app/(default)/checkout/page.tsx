import CheckoutPage from "@/components/pages/checkout/CheckoutPage";
import StripeProvider from "@/context/StripeProvider";
import React from "react";

const page = () => {
  return (
    <StripeProvider>
      <CheckoutPage />
    </StripeProvider>
  );
};

export default page;
