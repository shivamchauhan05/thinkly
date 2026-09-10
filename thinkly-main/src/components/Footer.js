"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

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
    { label: "Finance", href: "/internship/finance" },
    { label: "Content Writing", href: "/internship/content-writing" },
    { label: "View All Domains →", href: "/internship" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#020b14] p-4 sm:p-6">
      <div
        className="
          mx-auto w-full max-w-[90%]
          overflow-hidden rounded-2xl
          border border-white/10
          bg-gradient-to-br from-[#26323d]/90 to-[#101923]/95
          shadow-[0_0_25px_rgba(0,255,200,0.08)]
        "
      >
        <div
          className="
            grid w-full
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.4fr_1fr_1fr_1fr]
          "
        >
          <div
            className="
              border-b border-white/10 p-6
              sm:border-r sm:border-b-0
              lg:p-8
            "
          >
            {/* Logo */}

            <Link href="/" className="flex w-fit items-center gap-2">
              <span
                className="
                  flex h-8 w-8 shrink-0
                  items-center justify-center
                  overflow-hidden rounded-full
                  border border-[#22C55E]/30
                  bg-[#1a2f50]
                "
              >
                <Image
                  src="/thinkly_logo.jpeg"
                  alt="Thinkly logo"
                  width={100}
                  height={50}
                  className="h-full w-full object-cover"
                />
              </span>

              <span className="text-2xl font-bold text-[#eeeeee]">
                Thinklyedu
              </span>
            </Link>

            {/* Description */}

            <p
              className="
                mt-4 max-w-[230px]
                text-sm leading-[1.4]
                text-[#aeb5bc]
              "
            >
              Connecting students across India with completely free, always real
              internship opportunities.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full
                  border border-[#5ce9c4]/30
                  bg-[#5ce9c4]/10
                  text-[#5ce9c4]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#18b98b]
                  hover:bg-[#18b98b]
                  hover:text-white
                  hover:shadow-[0_0_15px_rgba(24,185,139,0.6)]
                "
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full
                  border border-[#5ce9c4]/30
                  bg-[#5ce9c4]/10
                  text-[#5ce9c4]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#18b98b]
                  hover:bg-[#18b98b]
                  hover:text-white
                  hover:shadow-[0_0_15px_rgba(24,185,139,0.6)]
                "
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full
                  border border-[#5ce9c4]/30
                  bg-[#5ce9c4]/10
                  text-[#5ce9c4]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#18b98b]
                  hover:bg-[#18b98b]
                  hover:text-white
                  hover:shadow-[0_0_15px_rgba(24,185,139,0.6)]
                "
              >
                <FaTwitter size={14} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full
                  border border-[#5ce9c4]/30
                  bg-[#5ce9c4]/10
                  text-[#5ce9c4]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#18b98b]
                  hover:bg-[#18b98b]
                  hover:text-white
                  hover:shadow-[0_0_15px_rgba(24,185,139,0.6)]
                "
              >
                <FaYoutube size={14} />
              </a>
            </div>

            {/* Contact */}

            <div className="mt-6 flex flex-col text-sm text-[#d0d5d8]">
              <p className="mb-1 text-[#9fa7ad]">Phone</p>

              <a
                href="tel:+919818509083"
                className="
                  mb-2
                  text-[#d0d5d8]
                  transition-colors
                  hover:text-[#4ee5bd]
                "
              >
                +91 98185 09083
              </a>

              <a
                href="mailto:support@thinkyedu.co"
                className="
                  text-[#d0d5d8]
                  transition-colors
                  hover:text-[#4ee5bd]
                "
              >
                support@thinkyedu.co
              </a>
            </div>
          </div>

          <div
            className="
              border-b border-white/10
              p-6 sm:p-7
              lg:border-b-0
            "
          >
            <h3
              className="
                mb-5
                text-base
                font-medium
                tracking-wide
                text-[#999fa5]
              "
            >
              PLATFORM
            </h3>

            <div className="flex flex-col gap-3">
              {LINKS.Platform.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    group relative w-fit
                    text-sm text-[#d5d8db]
                    transition-colors duration-300
                    hover:text-[#4ee5bd]
                  "
                >
                  {item.label}

                  <span
                    className="
                      absolute -bottom-1 left-0
                      h-[2px] w-0
                      bg-[#20d9a3]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </div>
          </div>

          <div
            className="
              border-b border-white/10
              p-6 sm:p-7
              lg:border-b-0
            "
          >
            <h3
              className="
                mb-5
                text-base
                font-medium
                tracking-wide
                text-[#999fa5]
              "
            >
              COMPANY
            </h3>

            <div className="flex flex-col gap-3">
              {LINKS.Company.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    group relative w-fit
                    text-sm text-[#d5d8db]
                    transition-colors duration-300
                    hover:text-[#4ee5bd]
                  "
                >
                  {item.label}

                  <span
                    className="
                      absolute -bottom-1 left-0
                      h-[2px] w-0
                      bg-[#20d9a3]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-7">
            <h3
              className="
                mb-5
                text-base
                font-medium
                tracking-wide
                text-[#999fa5]
              "
            >
              DOMAINS
            </h3>

            <div className="flex flex-col gap-3">
              {LINKS.Domains.map((item) => {
                const isViewAll = item.label === "View All Domains →";

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      group relative w-fit
                      text-sm
                      transition-colors duration-300
                      ${
                        isViewAll
                          ? "mt-2 font-medium text-[#3de0ad]"
                          : "text-[#d5d8db] hover:text-[#4ee5bd]"
                      }
                    `}
                  >
                    {item.label}

                    {!isViewAll && (
                      <span
                        className="
                          absolute -bottom-1 left-0
                          h-[2px] w-0
                          bg-[#20d9a3]
                          transition-all duration-300
                          group-hover:w-full
                        "
                      />
                    )}

                    {isViewAll && (
                      <FaArrowRight
                        className="
                          ml-1 inline-block
                          transition-transform duration-300
                          group-hover:translate-x-1
                        "
                        size={12}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className=" border-t border-white/10 px-6 py-5 flex flex-col gap-3 text sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-[#8f989f]">
            © 2026 Thinklyedu. All rights reserved.
          </p>

          <div className=" flex flex-wrap gap-x-5  gap-y-2 text-xs">
            <Link
              href="/terms"
              className=" text-[#8f989f]  transition-colors duration-300  hover:text-[#4ee5bd]"
            >
              Terms of Service
            </Link>

            <Link
              href="/privacy"
              className="  text-[#8f989f]  transition-colors duration-300  hover:text-[#4ee5bd]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/cookies"
              className=" text-[#8f989f] transition-colors duration-300 hover:text-[#4ee5bd]
      "
            >
              Cookie Policy
            </Link>
          </div>

          <p className="text-xs text-[#8f989f]">Made with 💚 for students</p>
        </div>
      </div>
    </footer>
  );
}
