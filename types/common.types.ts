import { CSSProperties, JSX, MouseEventHandler, PropsWithChildren, ReactNode } from "react";

export type BoxT = PropsWithChildren<{
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
}>;

export type CustomCardT = {
  title: string | ReactNode
  content: string | ReactNode
  description?: string | ReactNode
  action?: string | ReactNode
  footer?: string | ReactNode
  className?: string;
}

export type SvgIconT = {
  w?: number;
  h?: number;
  size?: number;
  fill?: string;
  stroke?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
  id?: string;
};