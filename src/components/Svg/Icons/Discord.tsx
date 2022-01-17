import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={320} height={320} viewBox="0 0 240 240" {...props}>
      <path d="M36.3 23.4c-6.3 3-10.7 8.7-12.3 15.9-.8 3.7-1 28-.8 82.2.3 76.7.3 77 2.5 81 2.7 5.1 6.7 8.9 11.8 11.2 3.7 1.7 8.8 1.8 67.9 2.1 35.2.2 64.3-.1 64.7-.5.5-.5-.3-4.6-1.7-9.2-1.4-4.5-2.4-8.7-2.2-9.3.3-.9 5.9 4 25.3 22.1C202.6 229.4 215 240 216 240c.7 0 1-33.6.8-101.3l-.3-101.2-2.2-4.2c-2.7-5.1-8.2-9.6-13.2-11.2-2.7-.8-26.2-1.1-81.7-1.1H41.5l-5.2 2.4zM104 72.9c0 .5-1 1.3-2.2 1.6-3.2.9-21.9 9.8-21.5 10.2.2.1 3.1-.8 6.4-2.2 3.4-1.3 7.6-2.7 9.5-3 1.8-.3 5.7-1 8.7-1.5 13.8-2.5 36.2-.4 48.3 4.5 3.2 1.3 5.8 2.2 5.8 1.9 0-.6-14.9-7.8-19.2-9.3-2.4-.9-2.9-1.4-2-2.3 2.7-2.7 26 5.1 31.3 10.5 5 5 14.2 35.8 15.9 53.6 1.1 10.6 1 11.2-.9 13.7-5.8 7.4-19.8 14.3-28.8 14.4-3.7 0-4.5-.5-7.6-4.2-2-2.3-3.4-4.5-3.2-4.8.2-.3 2.6-1.4 5.4-2.5 2.8-1.1 7-3.7 9.3-5.8l4.3-3.8-4.6 2.6c-20.8 11.5-50.9 12.1-72.1 1.4-3.2-1.6-5.8-2.5-5.8-2 0 1.2 10.7 8 13.8 8.7 2.9.8 2.8 1.4-1 6.3l-3.3 4.2-6.3-.5c-8.2-.5-19.4-5.9-24.7-11.8l-3.8-4.1.6-9.1c.7-11.9 2.9-22.3 7.8-37.1C70 84.8 71 83.3 80.7 78.4c4.4-2.2 10.1-4.5 12.4-5.1 5.7-1.4 10.9-1.5 10.9-.4z" />
      <path d="M95.2 115.3c-7.5 4.2-7.8 14.9-.6 20.6 8.7 6.8 20.3-5.5 15-15.8-2.9-5.5-9.3-7.6-14.4-4.8zM134.1 116.6c-4.3 3.6-5.7 9.3-3.5 14 1.8 3.8 6.6 7.4 9.7 7.4 3.1 0 7.6-2.9 9.2-6 .8-1.6 1.5-4.8 1.5-7.1 0-3.3-.6-4.7-3.4-7.5-4.3-4.3-9-4.6-13.5-.8z" />
    </Svg>
  );
};

export default Icon;