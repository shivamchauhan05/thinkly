import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Cookie Policy | Thinklyedu",
  description:
    "How Thinklyedu uses cookies and similar technologies, and how you can control them in your browser.",
  alternates: { canonical: "https://thinklyedu.com/cookies" },
  openGraph: {
    title: "Cookie Policy | Thinklyedu",
    description:
      "How Thinklyedu uses cookies and similar technologies.",
    url: "https://thinklyedu.com/cookies",
    siteName: "Thinklyedu",
    type: "website",
  },
};

const SECTIONS = [
  {
    title: "What Are Cookies?",
    paragraphs: [
      "Cookies are small text files that are stored on your device when you visit a website. They help the website remember your actions and preferences over time, so you do not have to re-enter them whenever you return to the site or browse from one page to another.",
    ],
  },
  {
    title: "How We Use Cookies",
    paragraphs: [
      "Thinklyedu keeps its use of cookies minimal. We may use them for the following purposes:",
    ],
    list: [
      {
        label: "Essential & functionality cookies:",
        text: "to make the website work correctly, remember your preferences and improve your browsing experience.",
      },
      {
        label: "Performance & analytics:",
        text: "to understand, in aggregate, how visitors use our site so we can improve our content and services.",
      },
    ],
  },
  {
    title: "Cookies We Do Not Use",
    paragraphs: [
      "We do not use cookies to serve you third-party advertising, and we do not sell any data collected through cookies.",
    ],
  },
  {
    title: "Third-Party Content",
    paragraphs: [
      "Some pages or features may link to or embed content from third-party platforms (such as WhatsApp, social media or media embeds). These third parties may set their own cookies, which are governed by their respective privacy and cookie policies and are outside our control.",
    ],
  },
  {
    title: "Managing Your Cookie Preferences",
    paragraphs: [
      "Most web browsers allow you to control cookies through their settings. You can usually block or delete cookies, or set your browser to notify you when a cookie is being set. Please note that disabling certain cookies may affect the functionality of parts of our website. Refer to your browser's help documentation for instructions.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Cookie Policy from time to time. Any changes will be posted on this page with a revised effective date.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      badge="cookie_policy"
      title="Cookie"
      titleAccent="Policy"
      intro="How Thinklyedu uses cookies and similar technologies, and how you can control them."
      meta={[
        { label: "Effective Date", value: "September 9, 2026" },
        { label: "Applies To", value: "All visitors to thinklyedu.com." },
      ]}
      sections={SECTIONS}
      crossLinks={[
        { href: "/terms", label: "Terms & Conditions" },
        { href: "/privacy", label: "Privacy Policy" },
      ]}
    />
  );
}
