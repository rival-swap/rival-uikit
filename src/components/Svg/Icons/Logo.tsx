import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 81 74" {...props}>
      <image width={81} height={74} href="/images/custom/logo-mobile.png" />
    </Svg>
  );
};

export default Icon;
