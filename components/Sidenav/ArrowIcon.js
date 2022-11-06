import { React } from '@nextui-org/react';

export const ArrowIcon = ({
  fill = '#1c1b1e',
  size = 20,
  height = 30,
  width = 30,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      width={size || width || 24}
      height={size || height || 24}
       {...props}
    >
      <g data-name="Circle kanan">
        <path
          d="M12 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8z"
          fill={fill}
        />
        <path
          d="M11 16a1 1 0 0 1-.707-1.707L12.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 11 16z"
          fill={fill}
        />
      </g>
    </svg>
  );
};


{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g data-name="Circle kanan">
    <path
      d="M12 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8z"
      style="fill:#1c1b1e"
    />
    <path
      d="M11 16a1 1 0 0 1-.707-1.707L12.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 11 16z"
      style="fill:#1c1b1e"
    />
  </g>
</svg>; */}