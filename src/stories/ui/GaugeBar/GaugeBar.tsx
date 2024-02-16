import React from "react";
import { Row } from "../../layout";
import styled, { CSSObject } from "styled-components";

export type GaugeBarProps = {
  gauge: number;
  customStyle?: {
    wrapStyle?: CSSObject;
    gaugeStyle?: CSSObject;
    textStyle?: CSSObject;
  };
};

export const GaugeBar = ({ gauge, customStyle }: GaugeBarProps) => {
  return (
    <Row alignItems="center" columnGap={10}>
      <GaugeWrap customStyle={customStyle?.wrapStyle!}>
        <Gauge gauge={gauge} customStyle={customStyle?.gaugeStyle!} />
      </GaugeWrap>
      <GaugeText customStyle={customStyle?.textStyle!}>{gauge}%</GaugeText>
    </Row>
  );
};

const GaugeWrap = styled.div<{ customStyle: CSSObject }>`
  width: 100%;
  height: 20px;

  background-color: #ddd;
  border-radius: 20px;

  position: relative;
  overflow: hidden;
  ${({ customStyle }) => customStyle}
`;

const Gauge = styled.div<{ gauge: number; customStyle: CSSObject }>`
  width: ${({ gauge }) => gauge}%;
  height: 100%;
  background-color: #242343;

  position: absolute;
  top: 0;
  left: 0;

  transition: width 0.8s ease;
  ${({ customStyle }) => customStyle}
`;

export const GaugeText = styled.p<{ customStyle: CSSObject }>`
  font-size: 18px;
  color: #979ba0;
  ${({ customStyle }) => customStyle}
`;
