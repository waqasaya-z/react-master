import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  PaymentRequestButtonElement,
} from '@stripe/react-stripe-js';
import type { PaymentRequest } from '@stripe/stripe-js';
import React from 'react';

import Box from '@/components/common/Box';
import Label from '@/components/common/Typography/Label';

const StripeComponents = ({
  paymentRequest,
  canMakePayment,
}: {
  paymentRequest: PaymentRequest | null;
  canMakePayment: boolean;
}) => {
  return (
    <Box className="flex flex-col gap-4">
      <Box>
        <Label> Card Number </Label>
        <CardNumberElement className="border border-black p-2 rounded-sm" />
      </Box>
      <Box className="flex ">
        <Box className="w-1/2 mr-2">
          <Label> Card Expiry </Label>
          <CardExpiryElement className="border border-black p-2 rounded-sm" />
        </Box>
        <Box className="w-1/2">
          <Label> Security Code (CVC) </Label>
          <CardCvcElement className="border border-black p-2 rounded-sm" />
        </Box>
      </Box>
      {paymentRequest && canMakePayment && (
        <PaymentRequestButtonElement
          options={{ paymentRequest }}
          className="w-full h-[35px] rounded bg-gray-100"
        />
      )}
    </Box>
  );
};

export default StripeComponents;
