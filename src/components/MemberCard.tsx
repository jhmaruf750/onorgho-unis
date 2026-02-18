"use client";

import React from "react";

type Member = {
  id: number;
  name_en?: string;
  name_bn?: string;
  phone?: string;
  email?: string;
  blood_group?: string;
  tshirt_size?: string;
  present_address?: string;
  permanent_address?: string;
  photo?: string;
};

export default function MemberCard({ member, highlightQuery, onClick }: { member: Member; highlightQuery?: string; onClick?: () => void }) {
  const localPath = (id?: number) => `/images/members/${id}.jpg`;

  function makeInitialsSVG(name: string) {
    const initials = name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((s) => s[0])
      .join("")
      .toUpperCase();
    const bg = ["#334155", "#1e293b", "#0f172a"][Math.abs(name.length) % 3];
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='100%' height='100%' fill='${bg}'/><text x='50%' y='50%' dy='0.35em' text-anchor='middle' font-family='system-ui,Segoe UI,Roboto,Helvetica,Arial' font-size='72' fill='#fff'>${initials}</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    const img = e.currentTarget;
    // if we haven't tried the local id-based image yet, try it
    if (img.dataset.triedLocal !== "true" && (member as any).id) {
      img.dataset.triedLocal = "true";
      img.src = localPath((member as any).id);
      return;
    }
    // otherwise fall back to an inline initials SVG
    if (img.dataset.fallbackApplied === "true") return;
    img.src = makeInitialsSVG(displayName);
    img.dataset.fallbackApplied = "true";
  }

  const displayName = member.name_en?.trim() || member.name_bn?.trim() || "—";

  function highlight(text?: string, q?: string) {
    if (!text) return <>{'—'}</>;
    if (!q) return <>{text}</>;
    const sq = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(sq, "gi");
    const parts: (string | React.ReactNode)[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = re.exec(text)) !== null) {
      const start = match.index;
      const end = re.lastIndex;
      if (start > lastIndex) parts.push(text.slice(lastIndex, start));
      parts.push(
        <span key={start} className="bg-amber-200 dark:bg-amber-900/50 text-amber-900 dark:text-amber-200 rounded px-1 font-medium">
          {text.slice(start, end)}
        </span>
      );
      lastIndex = end;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return <>{parts}</>;
  }

  return (
    <article
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => { if (onClick && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); onClick(); } }}
      className="glass-card w-full cursor-pointer group"
    >
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 md:w-18 md:h-18 rounded-full overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex-shrink-0 ring-2 ring-white/20 dark:ring-white/10 transition-all duration-300 group-hover:ring-amber-400/50 dark:group-hover:ring-amber-500/50 group-hover:scale-105">
          <img
            src={member.photo || localPath((member as any).id) || makeInitialsSVG(displayName)}
            alt={displayName}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            decoding="async"
            onError={handleImageError}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 dark:text-white font-bold text-base md:text-lg leading-tight truncate mb-1">{highlight(displayName, highlightQuery)}</h3>
          <div className="mt-1.5 flex flex-col gap-1 text-xs md:text-sm">
            {member.phone && (
              <div className="text-gray-600 dark:text-gray-300 truncate flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {highlight(member.phone, highlightQuery)}
              </div>
            )}
            {member.email && (
              <div className="text-gray-500 dark:text-gray-400 truncate flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {highlight(member.email, highlightQuery)}
              </div>
            )}
          </div>
        </div>

        {member.blood_group && (
          <div className="flex-shrink-0">
            <div className="text-xs md:text-sm font-semibold text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-3 py-1.5 rounded-full border border-amber-200 dark:border-amber-800/50 shadow-sm">
              {member.blood_group}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
