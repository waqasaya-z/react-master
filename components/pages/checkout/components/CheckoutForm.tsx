"use client";

import Box from "@/components/common/Box";
import { Button } from "@/components/ui/button";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import CustomCard from "@/components/common/CustomCard";
import StripeComponents from "./StripeComponents";
import { PaymentRequest } from "@stripe/stripe-js";
import StripeIcon from "@/icons/StripeIcon";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null
  );
  const [canMakePayment, setCanMakePayment] = useState(false);

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Total",
        amount: 2000, 
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
        setCanMakePayment(true);
      }
    });

    setPaymentRequest(pr);
  }, [stripe]);

  useEffect(() => {
    if (!paymentRequest || !stripe) return;

    paymentRequest.on("paymentmethod", async (event) => {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 2000, currency: "usd" }),
      });

      const { clientSecret } = await res.json();

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: event.paymentMethod.id,
        }
      );

      if (error) {
        event.complete("fail");
        alert(error.message);
      } else {
        event.complete("success");
        if (paymentIntent.status === "succeeded") {
          alert("✅ Payment successful with Apple/Google Pay!");
        }
      }
    });
  }, [paymentRequest, stripe]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: 2000,
        currency: "usd",
      }),
    });

    const data = await res.json();
    const clientSecret = data.clientSecret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement)!,
      },
    });

    if (result.error) {
      toast.error(result.error.message ?? "Payment failed");
    } else if (result.paymentIntent?.status === "succeeded") {
      toast.success("Payment successful");

      elements.getElement(CardNumberElement)?.clear();
      elements.getElement(CardExpiryElement)?.clear();
      elements.getElement(CardCvcElement)?.clear();
    }

    setLoading(false);
  };

  return (
    <Box className="w-4/4 md:w-2/4 md:mt-20 items-center justify-center p-8 m-auto">
      <form onSubmit={handleSubmit}>
        <CustomCard
          className="flex flex-col justify-between gap-12 hover:shadow-black hover:shadow-lg transition-shadow duration-300 border-2 border-black"
          title={
            <Box
              tag="h1"
              className="text-xl font-extrabold tracking-tight text-balance"
            >
              Checkout
            </Box>
          }
          description={
               <Box
              tag="p"
              className="font-medium tracking-tight text-balance"
            >
              Please choose a payment method.
            </Box>
          }
          action={<StripeIcon size={48} />}
          content={
            <StripeComponents
              paymentRequest={paymentRequest}
              canMakePayment={canMakePayment}
            />
          }
          footer={
            <Button type="submit" className="cursor-pointer w-full ">
              {loading ? "Processing…" : "Pay $20"}
            </Button>
          }
        />
      </form>
    </Box>
  );
};

export default CheckoutForm;
