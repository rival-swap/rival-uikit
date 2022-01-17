import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 81 65" {...props}>
      <image width={81} height={65} href="/images/custom/rival-token.png" />
    </Svg>
  );
};

export default Icon;
