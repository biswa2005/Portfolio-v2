import type { SVGProps } from "react";

const GitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 180 180">
    <circle cx="90" cy="90" r="90" fill="#F05033" />

    {/* Git branch structure */}
    <circle cx="65" cy="75" r="8" fill="white" />
    <circle cx="115" cy="60" r="8" fill="white" />
    <circle cx="115" cy="110" r="8" fill="white" />

    <line x1="65" y1="75" x2="115" y2="60" stroke="white" strokeWidth="5" />
    <line x1="65" y1="75" x2="115" y2="110" stroke="white" strokeWidth="5" />
  </svg>
);

export { GitIcon };
