import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 112 30" width={152} height={60} fill="none" {...props}>
      <g clipPath="url(#a)">
        <path
          d="M13.037 5.794v2.818c0 .47-.152.862-.458 1.175l-1.07 1.096.994 1.018c.305.313.458.704.458 1.174v3.21c0 1.096-.306 1.879-.84 2.427-.535.548-1.375.861-2.368.861H1.655V4.306l-.84-1.879h9.014c1.07 0 1.833.313 2.368.861.535.549.84 1.41.84 2.506ZM9.065 8.456v-1.88c0-.312-.306-.626-.611-.626H5.627v3.054h2.827c.382.078.611-.235.611-.548Zm0 6.968v-2.192c0-.314-.306-.627-.611-.627H5.627v3.445h2.827c.382 0 .611-.235.611-.626ZM19.607 2.427v17.146h-3.972V4.306l-.84-1.879h4.812ZM21.364 6.029V2.427h11.383V5.95h-3.743v13.623H25.03V6.03h-3.667ZM52.456 19.651h-4.048l-1.834-5.323h-1.833v5.323h-3.973V4.306l-.84-1.879h9.014c1.07 0 1.834.313 2.369.861.534.549.84 1.41.84 2.427v5.246c0 1.566-.535 2.505-1.68 3.053l1.986 5.637Zm-7.715-8.925h2.903c.382 0 .61-.235.61-.626V6.577c0-.392-.228-.627-.61-.627H44.74v4.776ZM58.644 2.427v17.146h-3.972V4.306l-.84-1.879h4.812ZM93.25 16.05h5.654l-1.91 3.523h-7.64V2.427h3.973V16.05h-.076ZM100.279 16.441v-2.27h3.973v1.409c0 .391.229.626.611.626h2.368c.382 0 .611-.235.611-.626V13.7c0-.39-.153-.625-.535-.704l-4.201-.94c-1.91-.469-2.827-1.643-2.827-3.6v-2.82c0-1.095.306-1.878.84-2.426.535-.548 1.375-.861 2.369-.861h4.889c1.069 0 1.833.313 2.368.86.535.549.84 1.41.84 2.428v2.035h-3.972V6.498c0-.391-.229-.626-.611-.626h-2.292c-.382 0-.611.235-.611.626v1.566c0 .391.153.626.534.705l4.202.94c1.91.469 2.827 1.643 2.827 3.6v3.132c0 1.096-.306 1.88-.841 2.427-.534.548-1.375.861-2.368.861h-5.042c-1.069 0-1.833-.313-2.368-.86-.458-.549-.764-1.41-.764-2.428Z"
          fill="#fff"
        />
        <path
          d="m75.07 0-2.522.783-6.646 15.032-.764-9.317h2.063l1.833-4.071h-8.862l.84 1.957 1.223 15.189H68.576l7.563-17.146L75.069 0Z"
          fill="#FB385B"
        />
        <path
          d="m72.624 22 2.521-.783 6.647-15.032.764 9.317h-2.063l-1.834 4.071h8.862l-.84-1.957-1.222-15.189H79.118l-7.563 17.146L72.625 22Z"
          fill="#1EBAFA"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(.814)" d="M0 0h111v22H0z" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
