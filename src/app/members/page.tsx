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

  // ✅ FIXED FETCH (Production Safe)
  useEffect(() => {
    fetch("/data/members.json")
      .then((r) => r.json())
      .then((data) => {
        setMembers(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Failed to load members:", err);
        setMembers([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const bloodGroups = useMemo(() => {
    const set = new Set<string>();
    members.forEach((m) => {
      if (m.blood_group) set.add(m.blood_group);
    });
    return Array.from(set).sort();
  }, [members]);

  const stats = useMemo(() => {
    const total = members.length;
    const byGroup: Record<string, number> = {};
    const tshirt: Record<string, number> = {};
    const locations = new Set<string>();

    for (const m of members) {
      const g = m.blood_group?.trim();
      if (g) byGroup[g] = (byGroup[g] || 0) + 1;

      const loc = m.present_address?.trim();
      if (loc) locations.add(loc);

      const ts = m.tshirt_size?.trim();
      if (ts) tshirt[ts] = (tshirt[ts] || 0) + 1;
    }

    let mostCommon = "—";
    let mostCount = 0;

    for (const [k, v] of Object.entries(byGroup)) {
      if (v > mostCount) {
        mostCommon = k;
        mostCount = v;
      }
    }

    return {
      total,
      byGroup,
      locationsCount: locations.size,
      mostCommon,
      mostCount,
      tshirt,
    };
  }, [members]);

  const filtered = useMemo(() => {
    const qi = query.toLowerCase().trim();

    return members.filter((m) => {
      if (group && m.blood_group !== group) return false;

      if (!qi) return true;

      return [
        m.name_en,
        m.name_bn,
        m.phone,
        m.email,
      ]
        .filter(Boolean)
        .some((f) => f!.toLowerCase().includes(qi));
    });
  }, [members, query, group]);

  return (
    <main className="min-h-screen py-16 px-6 bg-gray-50 dark:bg-gradient-to-b dark:from-slate-900 dark:to-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-gray-900 dark:text-white mb-3">
            Members Directory
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Total members:
            <span className="font-semibold text-gray-900 dark:text-white ml-2">
              {members.length}
            </span>
          </p>
        </header>

        {/* Search & Filter */}
        <section>
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, phone or email"
              className="flex-1 rounded-full bg-white dark:bg-slate-800/60 border border-gray-300 dark:border-white/10 px-6 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition"
            />

            <select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="sm:w-56 rounded-full bg-white dark:bg-slate-800/60 border border-gray-300 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition"
            >
              <option value="">All blood groups</option>
              {bloodGroups.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="rounded-2xl p-6 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Members</div>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mt-2">
                  <CountUp to={stats.total} />
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Most Common Blood Group</div>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mt-2">
                  {stats.mostCommon}
                </div>
                <div className="text-sm text-gray-400">{stats.mostCount} members</div>
              </div>

              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Unique Locations</div>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mt-2">
                  <CountUp to={stats.locationsCount} />
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">T-shirt Sizes</div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(stats.tshirt).map(([sz, cnt]) => (
                    <span
                      key={sz}
                      className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm"
                    >
                      {sz} ({cnt})
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Members Grid */}
        <section>
          {loading ? (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              Loading members…
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((m) => (
                <MemberCard
                  key={m.id}
                  member={m}
                  highlightQuery={query}
                  onClick={() => setSelected(m.id)}
                />
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-center mt-12 text-gray-500 dark:text-gray-400">
              No members found.
            </div>
          )}
        </section>

        {/* Modal */}
        {selected && (
          <MemberModal
            member={members.find((x) => x.id === selected)!}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </main>
  );
}
