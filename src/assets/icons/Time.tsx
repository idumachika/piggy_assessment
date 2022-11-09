import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const Time = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#111113"
    width={20}
    height={20}
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
  </Svg>
);

export default Time;
