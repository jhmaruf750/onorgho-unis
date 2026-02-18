"use client";

import { useEffect, useMemo, useState } from "react";
import MemberCard from "../../components/MemberCard";
import MemberModal from "../../components/MemberModal";
import CountUp from "../../components/CountUp";

type Member = {
  id: number;
  name_en?: string;
  name_bn?: string;
  phone?: string;
  email?: string;
  blood_group?: string;
  photo?: string;
  present_address?: string;
  permanent_address?: string;
  tshirt_size?: string;
};

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/members")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setMembers(Array.isArray(data) ? data : []);
      })
      .catch(() => setMembers([]))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, []);

  const bloodGroups = useMemo(() => {
    const set = new Set<string>();
    members.forEach((m) => { if (m.blood_group) set.add(m.blood_group); });
    return Array.from(set).sort();
  }, [members]);

  const stats = useMemo(() => {
    const total = members.length;
    const byGroup: Record<string, number> = {};
    const tshirt: Record<string, number> = {};
    const locations = new Set<string>();

    for (const m of members) {
      const g = (m.blood_group || "").toString().trim();
      if (g) byGroup[g] = (byGroup[g] || 0) + 1;

      const loc = (m.present_address || "").toString().trim();
      if (loc) locations.add(loc);
      const ts = (m.tshirt_size || "").toString().trim();
      if (ts) tshirt[ts] = (tshirt[ts] || 0) + 1;
    }

    // determine most common blood group
    let mostCommon = "—";
    let mostCount = 0;
    for (const [k, v] of Object.entries(byGroup)) {
      if (v > mostCount) {
        mostCount = v;
        mostCommon = k;
      }
    }

    return { total, byGroup, locationsCount: locations.size, mostCommon, mostCount, tshirt };
  }, [members]);

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q && !group) return members;
    const qi = q.toLowerCase();

    return members.filter((m) => {
      if (group && m.blood_group !== group) return false;
      if (!qi) return true;

      const fields = [
        String(m.name_en || ""),
        String(m.name_bn || ""),
        String(m.phone || ""),
        String(m.email || ""),
      ];

      return fields.some((f) => f.toLowerCase().includes(qi));
    });
  }, [members, query, group]);

  return (
    <main className="min-h-screen py-16 px-6 bg-gray-50 dark:bg-gradient-to-b dark:from-slate-900 dark:to-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-gray-900 dark:text-white mb-3">Members Directory</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">Total members: <span className="font-semibold text-gray-900 dark:text-white">{members.length}</span></p>
        </header>

        {/* Search & Filter (centered under heading) */}
        <section className="mb-8">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-3 justify-center px-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, phone or email"
              className="w-full sm:flex-1 max-w-xl rounded-full bg-white dark:bg-slate-800/60 border border-gray-300 dark:border-white/10 px-6 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:focus:ring-indigo-500/30 transition-all duration-300 shadow-sm dark:shadow-none"
            />

            <select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="w-full sm:w-56 rounded-full bg-white dark:bg-slate-800/60 border border-gray-300 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:focus:ring-indigo-500/30 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <option value="">All blood groups</option>
              {bloodGroups.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
        </section>

        <section className="mb-8">
          {/* Batch statistics */}
          <div className="w-full mb-6">
              <div className="stats-glow rounded-2xl p-6 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                  <div className="stat-card">
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium">Total Members</div>
                    <div className="stat-number mt-2 text-amber-600 dark:text-amber-400">
                      <CountUp to={stats.total} />
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium">Most Common Blood Group</div>
                    <div className="stat-number mt-2 text-amber-600 dark:text-amber-400">{stats.mostCommon}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stats.mostCount} members</div>
                  </div>

                  <div className="stat-card">
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium">Unique Present Locations</div>
                    <div className="stat-number mt-2 text-amber-600 dark:text-amber-400">
                      <CountUp to={stats.locationsCount} />
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium mb-3">T‑shirt Size Distribution</div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {Object.keys(stats.tshirt || {}).length === 0 && (
                        <div className="text-gray-500 dark:text-gray-400 text-sm">No data</div>
                      )}
                      {Object.entries(stats.tshirt || {}).sort().map(([sz, cnt]) => (
                        <div key={sz} className="px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm border border-amber-200 dark:border-amber-800/50 shadow-sm">
                          <span className="font-semibold">{sz}</span>
                          <span className="text-amber-600 dark:text-amber-400 text-xs ml-2">{cnt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>

        <section>
          {loading ? (
            <div className="text-center py-12">
              <div className="text-gray-600 dark:text-gray-300 text-lg">Loading members…</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((m, i) => (
                <div key={m.id} className="w-full card-entrance" style={{ animationDelay: `${i * 40}ms` }}>
                  <MemberCard member={m} highlightQuery={query} onClick={() => setSelected(m.id)} />
                </div>
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="mt-12 text-center">
              <div className="text-gray-500 dark:text-gray-400 text-lg">No members found.</div>
            </div>
          )}
        </section>
        {selected && (() => {
          const member = members.find((x) => x.id === selected);
          if (!member) return null;
          return <MemberModal member={member} onClose={() => setSelected(null)} />;
        })()}
      </div>
    </main>
  );
}
