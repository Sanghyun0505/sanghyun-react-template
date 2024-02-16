import { CSSProperties } from "react";
import styled from "styled-components";
import { css } from "styled-components";

/** component flex */
export type Align = "center" | "flex-start" | "flex-end";

export type ComponentFlexProps = {
  gap?: number;
  columnGap?: number;
  rowGap?: number;

  wrap?: boolean;
  justifyContent?: Align | "space-between";
  alignItems?: Align;

  fill?: string;
  padding?: [number] | [number, number];
  backgroundColor?: string;
};

export const BaseFlex = styled.div<ComponentFlexProps>`
  display: flex;

  gap: ${({ gap }) => gap || 0}px;
  row-gap: ${({ rowGap }) => rowGap || 0}px;
  column-gap: ${({ columnGap }) => columnGap || 0}px;

  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};

  width: ${({ fill }) => fill || "auto"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  padding: ${({ padding }) =>
    padding?.length === 1
      ? `${padding[0]}px`
      : padding && `${padding[0]}px ${padding[1]}px`};
`;

export const Column: typeof BaseFlex = styled(BaseFlex)`
  flex-direction: column;
`;

export const Row: typeof BaseFlex = styled(BaseFlex)`
  flex-direction: row;
`;

/** css flex */
export type CssFlexProps = {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  columnGap?: CSSProperties["columnGap"];
  rowGap?: CSSProperties["rowGap"];
  gap?: CSSProperties["gap"];
};

export const CssFlex = ({
  flexDirection,
  justifyContent,
  alignItems,
  columnGap,
  rowGap,
  gap,
}: CssFlexProps) => {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    column-gap: ${columnGap};
    row-gap: ${rowGap};
    gap: ${gap};
  `;
};
