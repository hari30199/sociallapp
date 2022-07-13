import React from "react"
import Svg, { Path, SvgProps } from "react-native-svg";
import colors from '@constants/Colors'

export default function Tabbuttonsvg ({...props}) {

  return (
    <Svg
      width={95}
      height={74}
      viewBox="0 8 75 61"
      {...props}
    >
      <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={colors.white}
      />
    </Svg>
  )
};
