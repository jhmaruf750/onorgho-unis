"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0b1d38] via-[#0f223f] to-[#0a1628] pt-20 pb-8 px-6 text-slate-300">

      {/* Soft Glow Effects */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Top Branding */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-serif font-bold tracking-wide text-white">
            ONORGHO UNIS
          </h2>

          <p className="mt-2 text-amber-400 text-sm tracking-wider">
            Batch of 2019
          </p>

          <p className="mt-1 text-slate-400 text-xs tracking-wide">
            Shibganj Government Model High School
          </p>

          <div className="mt-6 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>
        </motion.div>

        {/* Middle Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/members" className="footer-link">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="footer-link">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:onorghounis@gmail.com"
                  className="footer-link"
                >
                  onorghounis@gmail.com
                </a>
              </li>
              <li className="text-slate-400">
                Shibganj, Chapainawabganj
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">
              Social
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com/onorghounis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="mailto:onorghounis@gmail.com"
                  className="footer-link"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-3">

          <span>
            © 2026 Onorgho Unis — All Rights Reserved
          </span>

          <span>
            Crafted & Developed by{" "}
            <span className="text-amber-400 font-semibold tracking-wide">
              JH MaRuF
            </span>
          </span>

        </div>

      </div>
    </footer>
  );
}
