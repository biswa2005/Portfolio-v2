import type { SVGProps } from "react";

const PrismaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 180 180">
    <circle cx="90" cy="90" r="90" fill="#2D3748" />

    <path
      d="M60 50L110 40L140 120L95 150L60 50Z"
      fill="#5A67D8"
    />

    <path
      d="M60 50L95 150L40 110L60 50Z"
      fill="#A3BFFA"
    />
  </svg>
);

export { PrismaIcon };