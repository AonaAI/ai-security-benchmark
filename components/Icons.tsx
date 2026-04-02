import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

const defaults: IconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Icon({ children, className, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg {...defaults} className={className} {...props}>
      {children}
    </svg>
  );
}

/** Abstract person silhouette — shadow AI / employees */
export function UserIcon({ className, ...props }: IconProps) {
  return (
    <Icon className={className} {...props}>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
      {/* subtle "shadow" offset person */}
      <circle cx="15" cy="6.5" r="2" opacity="0.3" />
      <path d="M10 21a4.5 4.5 0 0 1 9 0" opacity="0.3" />
    </Icon>
  );
}

/** Document/shield hybrid — acceptable use policy */
export function PolicyIcon({ className, ...props }: IconProps) {
  return (
    <Icon className={className} {...props}>
      {/* document body */}
      <path d="M7 3h7l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <polyline points="14 3 14 7 18 7" />
      {/* shield emblem on doc */}
      <path d="M12 11v0c-2 0-3 .8-3 .8v3.4c0 2 3 3.3 3 3.3s3-1.3 3-3.3v-3.4S14 11 12 11z" strokeWidth="1.2" />
    </Icon>
  );
}

/** Warning triangle with data-breach circuit lines */
export function IncidentIcon({ className, ...props }: IconProps) {
  return (
    <Icon className={className} {...props}>
      <path d="M12 2L2 20h20L12 2z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <circle cx="12" cy="16" r="0.5" fill="currentColor" stroke="none" />
      {/* data circuit accents */}
      <line x1="6" y1="17" x2="3" y2="17" strokeWidth="1" opacity="0.4" />
      <line x1="18" y1="17" x2="21" y2="17" strokeWidth="1" opacity="0.4" />
      <circle cx="2.5" cy="17" r="0.8" fill="currentColor" stroke="none" opacity="0.4" />
      <circle cx="21.5" cy="17" r="0.8" fill="currentColor" stroke="none" opacity="0.4" />
    </Icon>
  );
}

/** Eye with radar/scan lines — visibility into AI usage */
export function VisibilityIcon({ className, ...props }: IconProps) {
  return (
    <Icon className={className} {...props}>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
      {/* scan/radar arcs */}
      <path d="M12 5V2" strokeWidth="1" opacity="0.4" />
      <path d="M17.5 7l2-2" strokeWidth="1" opacity="0.3" />
      <path d="M6.5 7l-2-2" strokeWidth="1" opacity="0.3" />
    </Icon>
  );
}

/** Magnifying glass with AI network nodes — discover shadow AI */
export function DiscoverIcon({ className, ...props }: IconProps) {
  return (
    <Icon className={className} {...props}>
      <circle cx="10" cy="10" r="6" />
      <line x1="14.5" y1="14.5" x2="21" y2="21" strokeWidth="2" />
      {/* AI network nodes inside lens */}
      <circle cx="8" cy="9" r="1" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="10" cy="12" r="1" fill="currentColor" stroke="none" opacity="0.6" />
      <line x1="8" y1="9" x2="12" y2="8" strokeWidth="0.8" opacity="0.4" />
      <line x1="8" y1="9" x2="10" y2="12" strokeWidth="0.8" opacity="0.4" />
      <line x1="12" y1="8" x2="10" y2="12" strokeWidth="0.8" opacity="0.4" />
    </Icon>
  );
}

/** Checklist with shield accent — implement policies/guidelines */
export function GuidelinesIcon({ className, ...props }: IconProps) {
  return (
    <Icon className={className} {...props}>
      {/* clipboard */}
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 3V1h6v2" />
      {/* check marks */}
      <polyline points="8 10 9.5 11.5 12 9" strokeWidth="1.3" />
      <line x1="14" y1="10" x2="18" y2="10" strokeWidth="1" opacity="0.5" />
      <polyline points="8 14 9.5 15.5 12 13" strokeWidth="1.3" />
      <line x1="14" y1="14" x2="18" y2="14" strokeWidth="1" opacity="0.5" />
      <circle cx="10" cy="18" r="0.5" fill="currentColor" stroke="none" opacity="0.3" />
      <line x1="14" y1="18" x2="18" y2="18" strokeWidth="1" opacity="0.3" />
    </Icon>
  );
}

/** Person with knowledge/brain radiating — train workforce */
export function TrainingIcon({ className, ...props }: IconProps) {
  return (
    <Icon className={className} {...props}>
      <circle cx="10" cy="8" r="3.5" />
      <path d="M4 21a6 6 0 0 1 12 0" />
      {/* knowledge/brain radiance */}
      <path d="M17 4c1.5 0 2.5.8 2.5 2s-1 1.8-1 2.5c0 .7 1 1.5 1 2.5s-1 2-2.5 2" strokeWidth="1.2" />
      <line x1="20" y1="5" x2="22" y2="4" strokeWidth="1" opacity="0.4" />
      <line x1="21" y1="8" x2="23" y2="8" strokeWidth="1" opacity="0.4" />
      <line x1="20" y1="11" x2="22" y2="12" strokeWidth="1" opacity="0.4" />
    </Icon>
  );
}

/** Data flow stream with shield — monitor data flows */
export function MonitorIcon({ className, ...props }: IconProps) {
  return (
    <Icon className={className} {...props}>
      {/* flow lines */}
      <path d="M3 6h4l2 3h6l2-3h4" strokeWidth="1.3" />
      <path d="M3 18h4l2-3h6l2 3h4" strokeWidth="1.3" opacity="0.4" />
      {/* central shield */}
      <path d="M12 9v0c-2.5 0-3.5 1-3.5 1v3.5c0 2.2 3.5 3.5 3.5 3.5s3.5-1.3 3.5-3.5V10s-1-1-3.5-1z" />
    </Icon>
  );
}

/** Scales/gavel — prepare for regulation / compliance */
export function ComplianceIcon({ className, ...props }: IconProps) {
  return (
    <Icon className={className} {...props}>
      {/* balance beam */}
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="4" y1="7" x2="20" y2="7" />
      {/* scale pans */}
      <path d="M4 7l-1 6h6L8 7" />
      <path d="M16 7l-1 6h6l-1-6" />
      {/* base */}
      <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" />
      {/* fulcrum */}
      <polygon points="12,3 10,5 14,5" fill="currentColor" stroke="none" opacity="0.5" />
    </Icon>
  );
}

/** Handshake/bridge — align security with business */
export function AlignIcon({ className, ...props }: IconProps) {
  return (
    <Icon className={className} {...props}>
      {/* handshake */}
      <path d="M2 14l4-4 3 1 3-3 3 3 1-1 4 4" strokeWidth="1.3" />
      {/* hands */}
      <path d="M6 10L2 14h3l2.5-2" strokeWidth="1.2" />
      <path d="M18 10l4 4h-3l-2.5-2" strokeWidth="1.2" />
      {/* bridge arc */}
      <path d="M5 18c0-3 3.1-5.5 7-5.5s7 2.5 7 5.5" strokeWidth="1" opacity="0.35" />
      {/* pillars */}
      <line x1="5" y1="18" x2="5" y2="21" strokeWidth="1.2" opacity="0.35" />
      <line x1="19" y1="18" x2="19" y2="21" strokeWidth="1.2" opacity="0.35" />
    </Icon>
  );
}

/** Chevron-right accent for list items */
export function ChevronAccent({ className, ...props }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <polyline points="6 3 11 8 6 13" />
    </svg>
  );
}
