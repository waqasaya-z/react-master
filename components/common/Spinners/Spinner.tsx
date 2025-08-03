import Lottie from "lottie-react";
import React from "react";
import catSpinner from "@/public/animations/catSpinner.json";
import Box from "../Box";

const Spinner = () => {
  return (
    <Box className="fixed inset-0 flex items-center justify-center z-50">

      <Lottie className="w-20 h-20" animationData={catSpinner} loop={true} />
    </Box>
  );
};

export default Spinner;
