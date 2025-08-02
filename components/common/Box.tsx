import React from "react";
import { BoxT } from "@/types/common.types";

const Box = ({ children, tag: Tag = "div", className }: BoxT) => {
  return <Tag className={className}>{children}</Tag>;
};

export default Box;

