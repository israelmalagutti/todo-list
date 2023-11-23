import React from "react";
import { Svg, Path } from "react-native-svg";

type TrashIconProps = {
  width?: number;
  height?: number;

  fill?: string;
};

function TrashIcon({ fill, height, width }: TrashIconProps) {
  return (
    <Svg
      width={width || 13}
      height={height || 14}
      fill="none"
      viewBox="0 0 13 14"
    >
      <Path
        fill={fill || "#E25858"}
        d="M8.702 4.985h-1.33v5.522h1.33V4.985zM5.962 4.985h-1.33v5.522h1.33V4.985z"
      ></Path>
      <Path
        fill={fill || "#E25858"}
        d="M12.978 2.167a.644.644 0 00-.46-.605.62.62 0 00-.184-.045H8.787a2.144 2.144 0 00-4.1 0H1.138a.641.641 0 00-.172.027H.952a.641.641 0 00.09 1.246l.711 9.743A1.512 1.512 0 003.183 14h7.104a1.512 1.512 0 001.433-1.467l.708-9.734a.638.638 0 00.55-.632zm-6.241-.952a.937.937 0 01.689.302H6.047a.932.932 0 01.69-.302zm3.55 11.575H3.183c-.081 0-.208-.133-.223-.344L2.258 2.81h8.957l-.701 9.635c-.016.211-.143.344-.227.344z"
      ></Path>
    </Svg>
  );
}

export default TrashIcon;
