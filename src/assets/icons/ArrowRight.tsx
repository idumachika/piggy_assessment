import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowRight = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#fafafa"
    width={24}
    height={24}
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </Svg>
);

export default ArrowRight;
