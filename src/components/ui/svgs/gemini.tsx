import type { SVGProps } from "react";

const GeminiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 180 180">
    <circle cx="90" cy="90" r="90" fill="#0F172A" />

    <defs>
      <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="50%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#22D3EE" />
      </linearGradient>
    </defs>

    {/* Gemini Spark */}
    <path
      d="M90 35
         L105 75
         L145 90
         L105 105
         L90 145
         L75 105
         L35 90
         L75 75
         Z"
      fill="url(#gemini-gradient)"
    />
  </svg>
);

export { GeminiIcon };
