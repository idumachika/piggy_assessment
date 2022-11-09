import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const Minus = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#111113"
    width={16}
    height={16}
    {...props}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </Svg>
);

export default Minus;
