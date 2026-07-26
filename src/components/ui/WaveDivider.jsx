const WaveDivider = ({ d, viewBoxHeight = 90, fill, className = "" }) => (
  <svg
    viewBox={`0 0 1440 ${viewBoxHeight}`}
    preserveAspectRatio="none"
    className={`block w-full ${className}`}
    style={{ height: viewBoxHeight }}
  >
    <path d={d} fill={fill} />
  </svg>
);

export default WaveDivider;
