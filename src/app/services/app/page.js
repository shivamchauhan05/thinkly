import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Mobile App Development Services (Android & iOS) | Thinklyedu",
  description:
    "Custom Android and iOS app development services. We design and build fast, scalable mobile apps with secure payments, push notifications and cloud backends. Get a free quote from Thinklyedu.",
  keywords: [
    "mobile app development",
    "android app development",
    "ios app development",
    "react native development",
    "flutter app development",
    "custom app development India",
    "mobile app design company",
  ],
  alternates: { canonical: "https://thinklyedu.com/services/app" },
  openGraph: {
    title: "Mobile App Development Services | Thinklyedu",
    description:
      "Custom Android & iOS apps that are fast, scalable and built for real business growth.",
    url: "https://thinklyedu.com/services/app",
    type: "website",
  },
};

export default function AppServicePage() {
  return <ServiceDetail slug="app" />;
}
