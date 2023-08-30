import { SVGProps } from "react";

function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="5"
      fill="none"
      viewBox="0 0 8 5"
      {...props}
    >
      <path d="M.94 0L4 3.053 7.06 0 8 .94l-4 4-4-4L.94 0z"></path>
    </svg>
  );
}

export default ArrowDown;
