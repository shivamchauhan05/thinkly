import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "EdTech Solutions & LMS Development | Thinklyedu",
  description:
    "EdTech development services — custom LMS platforms, online course portals, live classes and student analytics. Build an engaging learning platform with Thinklyedu.",
  keywords: [
    "edtech solutions",
    "LMS development",
    "online course platform development",
    "e-learning website development",
    "school management software",
    "student portal development",
    "education app development",
  ],
  alternates: { canonical: "https://thinklyedu.com/services/edtech" },
  openGraph: {
    title: "EdTech Solutions & LMS Development | Thinklyedu",
    description:
      "Custom LMS platforms, online course portals and live class solutions for modern learners.",
    url: "https://thinklyedu.com/services/edtech",
    type: "website",
  },
};

export default function EdTechServicePage() {
  return <ServiceDetail slug="edtech" />;
}
