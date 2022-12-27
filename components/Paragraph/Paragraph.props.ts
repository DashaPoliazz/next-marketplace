import { ReactNode } from "react";

export interface ParagraphProps {
  children: ReactNode;
  size: "s" | "m" | "l";
  className?: "string";
}
