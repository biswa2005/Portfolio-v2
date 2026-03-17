import type { SVGProps } from "react";

const WebSocketIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 180 180">
    <circle cx="90" cy="90" r="90" fill="#1E293B" />

    <circle cx="55" cy="90" r="12" fill="#38BDF8" />
    <circle cx="125" cy="90" r="12" fill="#38BDF8" />

    <path
      d="M67 90C80 60 100 60 113 90"
      stroke="#38BDF8"
      strokeWidth="6"
      fill="none"
    />

    <path
      d="M67 90C80 120 100 120 113 90"
      stroke="#38BDF8"
      strokeWidth="6"
      fill="none"
    />
  </svg>
);

export { WebSocketIcon };