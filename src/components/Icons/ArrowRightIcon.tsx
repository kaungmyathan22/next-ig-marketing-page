import { SVGProps } from "react";

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g clipPath="url(#clip0_3_737)">
        <g>
          <path
            // fill="#42424A"
            fillRule="evenodd"
            d="M14.75 8a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0zM16 8A8 8 0 11-.001 8 8 8 0 0116 8zM7.47 5.53l1.72 1.72H4v1.5h5.19l-1.72 1.72 1.06 1.06 3-3a.75.75 0 000-1.06l-3-3-1.06 1.06z"
            clipRule="evenodd"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3_737">
          <path fill="#fff" d="M0 0H16V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowRightIcon;
