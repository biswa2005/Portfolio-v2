import type { SVGProps } from "react";

const MongoDBIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 180 180">
    {/* Background Circle */}
    <circle cx="90" cy="90" r="90" fill="#13AA52" />

    {/* MongoDB Leaf */}
    <path
      d="M90 30
         C85 45, 70 65, 70 95
         C70 120, 82 140, 90 150
         C98 140, 110 120, 110 95
         C110 65, 95 45, 90 30Z"
      fill="white"
    />

    {/* Leaf center line */}
    <path
      d="M90 40
         C90 70, 85 100, 90 145"
      stroke="#13AA52"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export { MongoDBIcon };
