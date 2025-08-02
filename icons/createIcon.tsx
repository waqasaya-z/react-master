import { SvgIconT } from "@/types/common.types";
import { cloneElement, type JSX } from "react";

export function createIcon(SvgIcon: JSX.Element) {
  return ({
    w = 16,
    h = 16,
    size,
    fill = "currentColor",
    stroke = undefined,
    style = {},
    className = "",
    onClick,
    id,
  }: SvgIconT) => {
    return cloneElement(SvgIcon, {
      width: size ?? w,
      height: size ?? h,
      fill,
      stroke,
      style,
      className,
      onClick,
      id,
    });
  };
}
