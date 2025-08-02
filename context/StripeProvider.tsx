'use client'

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { PropsWithChildren } from "react";

const stripeLoad = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const StripeProvider = ({ children }: PropsWithChildren) => {
  return <Elements stripe={stripeLoad}> {children} </Elements>;
};

export default StripeProvider;
