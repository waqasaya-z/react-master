import React from 'react';

import CheckoutPage from '@/components/pages/checkout/CheckoutPage';
import StripeProvider from '@/providers/StripeProvider';

const page = () => {
  return (
    <StripeProvider>
      <CheckoutPage />
    </StripeProvider>
  );
};

export default page;
