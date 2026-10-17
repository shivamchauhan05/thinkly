import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Website Development Services in India | Thinklyedu",
  description:
    "Professional website development services — business websites, landing pages, e-commerce stores and web apps. Fast, SEO-friendly, mobile-responsive and affordable. Get a free quote from Thinklyedu.",
  keywords: [
    "website development services",
    "website design company India",
    "business website development",
    "landing page design",
    "ecommerce website development",
    "responsive web design",
    "Next.js development",
    "React website development",
  ],
  alternates: { canonical: "https://thinklyedu.com/services/website" },
  openGraph: {
    title: "Website Development Services | Thinklyedu",
    description:
      "Fast, SEO-friendly, mobile-responsive websites built to convert visitors into customers.",
    url: "https://thinklyedu.com/services/website",
    type: "website",
  },
};

export default function WebsiteServicePage() {
  return <ServiceDetail slug="website" />;
}
