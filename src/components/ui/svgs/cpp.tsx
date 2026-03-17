import type { SVGProps } from "react";

const cpp = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 180 180" fill="none">
    <circle cx="90" cy="90" r="90" fill="#00599C" />

    {/* Hexagon Shape */}
    <path d="M90 30L135 55V105L90 130L45 105V55L90 30Z" fill="#004482" />

    {/* Letter C */}
    <path
      d="M100 65
         C90 55, 70 55, 60 75
         C50 95, 70 115, 100 105"
      stroke="white"
      strokeWidth="10"
      fill="none"
      strokeLinecap="round"
    />

    {/* Plus 1 */}
    <line
      x1="105"
      y1="75"
      x2="105"
      y2="95"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <line
      x1="95"
      y1="85"
      x2="115"
      y2="85"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
    />

    {/* Plus 2 */}
    <line
      x1="125"
      y1="75"
      x2="125"
      y2="95"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <line
      x1="115"
      y1="85"
      x2="135"
      y2="85"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

export { cpp };
