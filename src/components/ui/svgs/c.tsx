import type { SVGProps } from "react";

const CIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 180 180">
    <circle cx="90" cy="90" r="90" fill="#00599C" />

    <path
      d="M120 65
         C100 45, 65 50, 55 80
         C45 110, 70 135, 120 120"
      stroke="white"
      strokeWidth="14"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export { CIcon };