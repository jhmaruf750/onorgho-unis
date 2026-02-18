import fs from "fs/promises";
import Link from "next/link";
import path from "path";
import { notFound } from "next/navigation";

function slugify(name) {
  if (!name) return "";
  return name
    .toString()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

async function loadMembers() {
  const membersPath = path.join(process.cwd(), "..", "members", "members.json");
  try {
    const raw = await fs.readFile(membersPath, "utf-8");
    return JSON.parse(raw || "[]");
  } catch (e) {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const members = await loadMembers();
  const slug = params.slug;
  const member = members.find((m) => slugify(m.name_en) === slug);
  if (!member) return { title: "Member | Onorgho Unis" };
  const name = member.name_en || member.name_bn || "Member";
  return { title: `${name} | Onorgho Unis` };
}

export default async function Page({ params }) {
  const members = await loadMembers();
  const slug = params.slug;
  const member = members.find((m) => slugify(m.name_en) === slug);
  if (!member) return notFound();

  const fallback = "/images/logo.png";

  return (
    <main className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-4xl bg-gradient-to-b from-[#0b2540] to-[#071428] rounded-3xl shadow-2xl p-8 text-gray-100">
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-xl ring-4 ring-black/40">
            <img
              src={member.photo || fallback}
              alt={member.name_en || member.name_bn || "member"}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-extrabold" style={{ color: "#D4AF37" }}>
            {member.name_en || member.name_bn}
          </h1>

          <p className="mt-2 text-sm text-gray-300">{member.name_bn ? member.name_bn : ""}</p>

          <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-sm">
            <div className="space-y-4">
              <div>
                <div className="text-xs text-gray-400">Phone</div>
                <div className="font-medium">{member.phone || "—"}</div>
              </div>

              <div>
                <div className="text-xs text-gray-400">Email</div>
                <div className="font-medium truncate">{member.email || "—"}</div>
              </div>

              <div>
                <div className="text-xs text-gray-400">Blood Group</div>
                <div className="font-medium">{member.blood_group || "—"}</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-gray-400">T-shirt Size</div>
                <div className="font-medium">{member.tshirt_size || "—"}</div>
              </div>

              <div>
                <div className="text-xs text-gray-400">Present Address</div>
                <div className="text-gray-200 text-sm">{member.present_address || "—"}</div>
              </div>

              <div>
                <div className="text-xs text-gray-400">Permanent Address</div>
                <div className="text-gray-200 text-sm">{member.permanent_address || "—"}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 w-full text-center">
            <Link
              href="/members"
              className="inline-block px-6 py-2 rounded-full bg-[#D4AF37] text-[#071428] font-semibold shadow-md hover:opacity-95"
            >
              Back to Directory
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
