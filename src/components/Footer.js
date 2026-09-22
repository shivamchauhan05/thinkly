"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Phone, Mail, Heart, ArrowRight, ArrowUp } from "lucide-react";

const LINKS = {
  Platform: [
    { label: "Home", href: "/" },
    { label: "Internship", href: "/internship" },
    { label: "Certificate", href: "/certificate" },
    { label: "Project", href: "/project" },
    { label: "Verification Portal", href: "/verification" },
  ],

  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],

  Domains: [
    { label: "Marketing", href: "/internship/marketing" },
    { label: "UI/UX Design", href: "/internship/design" },
    { label: "Tech & Coding", href: "/internship/technology" },
    { label: "Photography & Video", href: "/internship/photography-video" },
    { label: "Content Writing", href: "/internship/content-writing" },
    { label: "View All Domains →", href: "/internship" },
  ],
};

const SOCIALS = [
  { Icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

function ColumnHeading({ children }) {
  return (
    <h3
      className="mb-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#7d8790]"
      style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
    >
      <span className="text-[#22C55E]/60">//</span> {children}
    </h3>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative w-fit text-sm text-[#94A3B8] transition-colors duration-300 hover:text-[#4ADE80]"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#22C55E] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* glowing circuit-line divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(34,197,94,0.35) 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#22C55E]/30 bg-[#0d1b30]">
                <Image
                  src="/thinkly_logo.jpeg"
                  alt="Thinkly logo"
                  width={100}
                  height={50}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="text-xl font-bold text-[#F1F5F9]">
                Thinkly<span className="text-[#22C55E]">edu</span>
              </span>
            </Link>

            <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-[#94A3B8]">
              Connecting students across India with completely free, always
              real internship opportunities.
            </p>

            <div className="mt-5 flex flex-col gap-2.5 text-sm">
              <a
                href="tel:+919818509083"
                className="flex items-center gap-2 text-[#94A3B8] transition-colors hover:text-[#4ADE80]"
              >
                <Phone size={14} className="shrink-0 text-[#22C55E]/70" />
                +91 98185 09083
              </a>
              <a
                href="mailto:support@thinkyedu.co"
                className="flex items-center gap-2 text-[#94A3B8] transition-colors hover:text-[#4ADE80]"
              >
                <Mail size={14} className="shrink-0 text-[#22C55E]/70" />
                support@thinkyedu.co
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-[#94A3B8] transition-all duration-300 hover:-translate-y-1 hover:border-[#22C55E] hover:bg-[#22C55E] hover:text-[#08150C] hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <ColumnHeading>platform</ColumnHeading>
            <div className="flex flex-col gap-3">
              {LINKS.Platform.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <ColumnHeading>company</ColumnHeading>
            <div className="flex flex-col gap-3">
              {LINKS.Company.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Domains */}
          <div>
            <ColumnHeading>domains</ColumnHeading>
            <div className="flex flex-col gap-3">
              {LINKS.Domains.slice(0, -1).map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
              <Link
                href="/internship"
                className="group mt-1 flex w-fit items-center gap-1 text-sm font-semibold text-[#22C55E] transition-colors hover:text-[#4ADE80]"
              >
                View all domains
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/[0.08] pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-[#7d8790]">
            © 2026 Thinklyedu. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
            <Link
              href="/terms"
              className="text-[#7d8790] transition-colors duration-300 hover:text-[#4ADE80]"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-[#7d8790] transition-colors duration-300 hover:text-[#4ADE80]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-[#7d8790] transition-colors duration-300 hover:text-[#4ADE80]"
            >
              Cookie Policy
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1.5 text-xs text-[#7d8790]">
              Made with{" "}
              <Heart size={12} className="text-[#22C55E]" fill="#22C55E" />{" "}
              for students
            </p>
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-[#94A3B8] transition-all duration-300 hover:border-[#22C55E] hover:text-[#4ADE80]"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
