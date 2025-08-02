'use client'
import Lottie from 'lottie-react'
import React from 'react'
import animationData from '@/public/animations/Hello.json'
import Box from '@/components/common/Box'

const CheckoutImage = () => {
  return (
    <Box className="w-full max-w-sm hidden md:block">
      <Lottie animationData={animationData} loop={false} />
    </Box>
  )
}

export default CheckoutImage