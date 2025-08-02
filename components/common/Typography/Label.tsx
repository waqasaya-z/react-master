import React, { PropsWithChildren } from "react";
import Box from "../Box";

const Label = ({ children }: PropsWithChildren) => {
  return <Box tag="h4" className="text-sm font-bold py-1.5">{children}</Box>;
};

export default Label;
