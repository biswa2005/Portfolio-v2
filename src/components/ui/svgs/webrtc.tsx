import type { SVGProps } from "react";

const WebRTCIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 180 180">
    <circle cx="90" cy="90" r="90" fill="#0F172A" />

    <circle cx="60" cy="70" r="10" fill="#22C55E" />
    <circle cx="120" cy="70" r="10" fill="#22C55E" />
    <circle cx="90" cy="120" r="10" fill="#22C55E" />

    <line x1="60" y1="70" x2="120" y2="70" stroke="#22C55E" strokeWidth="5" />
    <line x1="60" y1="70" x2="90" y2="120" stroke="#22C55E" strokeWidth="5" />
    <line x1="120" y1="70" x2="90" y2="120" stroke="#22C55E" strokeWidth="5" />
  </svg>
);

export { WebRTCIcon };