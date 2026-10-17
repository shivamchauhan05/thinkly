import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Digital Marketing Services — SEO, Ads & Social Media | Thinklyedu",
  description:
    "Digital marketing services that grow your business — SEO, Google & Meta ads, social media management and content marketing. Get measurable results with Thinklyedu.",
  keywords: [
    "digital marketing services",
    "SEO services India",
    "google ads management",
    "social media marketing",
    "content marketing agency",
    "performance marketing",
    "brand growth services",
  ],
  alternates: { canonical: "https://thinklyedu.com/services/digital-marketing" },
  openGraph: {
    title: "Digital Marketing Services | Thinklyedu",
    description:
      "SEO, paid ads, social media and content marketing that deliver measurable growth.",
    url: "https://thinklyedu.com/services/digital-marketing",
    type: "website",
  },
};

export default function DigitalMarketingServicePage() {
  return <ServiceDetail slug="digital-marketing" />;
}
