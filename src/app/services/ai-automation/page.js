import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "AI Automation Services for Business | Thinklyedu",
  description:
    "AI automation services — custom chatbots, workflow automation, AI assistants and data pipelines that save time and cut costs. Automate your business growth with Thinklyedu.",
  keywords: [
    "AI automation services",
    "AI chatbot development",
    "business process automation",
    "workflow automation",
    "AI assistant development",
    "machine learning solutions",
    "AI integration company",
  ],
  alternates: { canonical: "https://thinklyedu.com/services/ai-automation" },
  openGraph: {
    title: "AI Automation Services | Thinklyedu",
    description:
      "Custom AI chatbots, workflow automation and AI assistants that save time and cut costs.",
    url: "https://thinklyedu.com/services/ai-automation",
    type: "website",
  },
};

export default function AIAutomationServicePage() {
  return <ServiceDetail slug="ai-automation" />;
}
