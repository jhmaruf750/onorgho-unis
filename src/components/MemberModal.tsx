"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MDiv: any = motion.div;

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

export default function MemberModal({
  member,
  onClose,
}: {
  member: Member;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const fallback = "/images/logo.png";

  return (
    <AnimatePresence>
      <MDiv
        key="member-modal"
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <MDiv
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <MDiv
          className="relative max-w-3xl w-full mx-4 p-6"
          initial={{ y: 20, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 10, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.2, 0.9, 0.3, 1] }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onClick={(e: any) => e.stopPropagation()}
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">
              <div className="md:col-span-1">
                <div className="w-full h-56 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 ring-2 ring-gray-200 dark:ring-white/10">
                  <img
                    src={member.photo || fallback}
                    alt={member.name_en || member.name_bn || "member"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-2 text-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">{member.name_en || member.name_bn}</h2>
                {member.name_bn && member.name_en && (
                  <p className="text-gray-600 dark:text-gray-400 mt-1 text-base" lang="bn">{member.name_bn}</p>
                )}

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Phone</div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">{member.phone || '—'}</div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Email</div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100 truncate">{member.email || '—'}</div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Blood Group</div>
                    <div className="font-semibold text-amber-600 dark:text-amber-400">{member.blood_group || '—'}</div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">T-shirt Size</div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">{member.tshirt_size || '—'}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Present Address</div>
                  <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{member.present_address || '—'}</div>
                </div>

                <div className="mt-4">
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Permanent Address</div>
                  <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{member.permanent_address || '—'}</div>
                </div>
              </div>
            </div>
          </div>

          <button
            aria-label="Close member"
            className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-white/10 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-300 shadow-lg"
            onClick={onClose}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </MDiv>
      </MDiv>
    </AnimatePresence>
  );
}
