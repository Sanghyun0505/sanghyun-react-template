import { ReactNode } from "react";

export type PropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};
