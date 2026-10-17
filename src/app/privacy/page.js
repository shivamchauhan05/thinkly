import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | Thinklyedu",
  description:
    "How Thinklyedu collects, uses, shares, protects and retains personal information — for internship applications, student data and business client projects (websites, apps, AI automation and digital marketing).",
  alternates: { canonical: "https://thinklyedu.com/privacy" },
  openGraph: {
    title: "Privacy Policy | Thinklyedu",
    description:
      "How Thinklyedu collects, uses and protects personal information for internships and client projects.",
    url: "https://thinklyedu.com/privacy",
    siteName: "Thinklyedu",
    type: "website",
  },
};

const SECTIONS = [
  {
    part: "Part A — Internship & Student Data",
    title: "Information We Collect (Students & Interns)",
    paragraphs: [
      "We collect information that you voluntarily provide to us through our website forms, email, phone or WhatsApp when you apply for or participate in an internship. This may include:",
    ],
    list: [
      {
        label: "Identity & contact details:",
        text: "full name, email address, phone/WhatsApp number.",
      },
      {
        label: "Application details:",
        text: "college/university, current year of study, preferred domain, prior experience, motivation and other information you submit with an internship application.",
      },
      {
        label: "Documents:",
        text: "the resume/CV files (PDF, DOC, DOCX) you upload with your application.",
      },
      {
        label: "Communications:",
        text: "messages and correspondence you send us over email, WhatsApp, phone or forms.",
      },
    ],
  },
  {
    title: "How We Use Student Data",
    list: [
      "To review applications, evaluate eligibility and match candidates with suitable Host Companies.",
      "To communicate with you, schedule onboarding and share internship updates.",
      "To process applications and respond to your enquiries.",
      "To issue offer letters, certificates and recommendation letters (subject to our Terms & Conditions).",
      "To maintain internal records, prevent fraud and comply with legal obligations.",
    ],
  },
  {
    title: "Consent & Legal Basis",
    paragraphs: [
      "We process your personal information based on your consent (given when you submit a form) and to take steps toward a contract with you (an internship engagement). You may withdraw your consent at any time by contacting us; however, some processing may still be required to comply with legal obligations or to complete services already requested.",
    ],
  },
  {
    title: "How We Share Information",
    paragraphs: [
      "We do not sell your personal information. We may share relevant details in the following limited circumstances:",
    ],
    list: [
      {
        label: "Host Companies & mentors:",
        text: "when you are matched with a Host Company, relevant application and profile details are shared strictly for the purpose of the internship program.",
      },
      {
        label: "Service providers:",
        text: "we use trusted third-party providers (such as email delivery services) that process data only on our instructions and under confidentiality obligations.",
      },
      {
        label: "Legal requirements:",
        text: "we may disclose information if required to do so by law or to protect our rights, users or the public.",
      },
    ],
  },
  {
    title: "Confidentiality of Host Company Data",
    paragraphs: [
      "As described in Section 6 of our Terms & Conditions, interns may gain access to confidential or proprietary information belonging to a Host Company. Interns agree never to disclose, duplicate or share such information with third parties. This obligation protects both the Host Company and the intern.",
    ],
  },
  {
    title: "Resume & Document Handling",
    paragraphs: [
      "Resumes and documents you upload are used solely to assess your application and are shared only with the mentors or Host Companies relevant to your placement decision. We retain them only for as long as necessary to process your application and maintain reasonable program records.",
    ],
  },

  {
    part: "Part B — Client Project Data",
    title: "Client Project Information We Collect",
    paragraphs: [
      "When you engage Thinklyedu for a project — such as a website, mobile app, AI automation, EdTech solution or digital marketing campaign — we collect the information needed to quote and deliver that project. This may include:",
    ],
    list: [
      {
        label: "Business & contact details:",
        text: "your name, email, phone/WhatsApp number, company or brand name, website, and billing or invoicing details.",
      },
      {
        label: "Project details:",
        text: "the service requested, project goals, scope, features, budget range, timeline, references and any requirements you share through our quote form, email, calls or chats.",
      },
      {
        label: "Content & brand assets:",
        text: "logos, images, videos, text, documents and other materials you provide for use in the project.",
      },
      {
        label: "Access & credentials:",
        text: "hosting, domain, CMS/admin panel, analytics, API keys, database or third-party account access that may be required for us to build, deploy or integrate the work.",
      },
      {
        label: "Communication records:",
        text: "emails, chat messages, meeting notes, feedback and approvals related to your project.",
      },
    ],
  },
  {
    title: "How We Use Client Project Data",
    list: [
      "To prepare and send quotes, proposals and Statements of Work (SOW).",
      "To plan, design, develop, test and deliver the agreed project.",
      "To communicate with you, share progress updates and collect feedback or approvals.",
      "To deploy, configure hosting/domains and provide agreed support and maintenance.",
      "To maintain project records, issue invoices and comply with accounting and legal obligations.",
    ],
  },
  {
    title: "Project Credentials & Access",
    paragraphs: [
      "When you share access credentials (hosting, admin panels, APIs, databases or third-party accounts), we use them only to deliver the agreed work. Access is limited to the team members working on your project, credentials are stored securely, and we delete or hand back access when the engagement ends — unless a longer period is separately agreed for ongoing support.",
    ],
  },
  {
    title: "Client's End-User Data (Data Processing)",
    paragraphs: [
      "If a project involves collecting data from your end users — for example, a website, mobile app, learning platform or CRM — you are the data controller and Thinklyedu acts as a data processor. We process that data only to build, operate and maintain the system for you, and we do not use it for our own purposes.",
      "You remain responsible for lawfully collecting that data, obtaining the required consents and publishing your own privacy policy. We can put an appropriate data-processing arrangement in place on request.",
    ],
  },
  {
    title: "Third-Party Services & Tools Used in Projects",
    paragraphs: [
      "To deliver projects, we may use trusted third-party services such as cloud hosting, domain registrars, payment gateways, email/SMS providers, analytics tools and open-source libraries. These providers process data under their own terms and privacy policies. Where required, we select providers with reasonable security practices and use them only as needed for your project.",
    ],
  },
  {
    title: "Confidentiality, NDA & Client Content",
    list: [
      {
        label: "Confidentiality:",
        text: "we treat your business information, project materials and credentials as confidential and share them only with team members working on your project.",
      },
      {
        label: "NDA on request:",
        text: "we are happy to sign a mutual non-disclosure agreement (NDA) before a project begins.",
      },
      {
        label: "Your content:",
        text: "you confirm that you own or have the necessary rights and permissions for all content and assets you provide, and that they do not infringe any third-party rights.",
      },
    ],
  },
  {
    title: "Project Data Retention",
    paragraphs: [
      "We retain client project data — including briefs, assets, credentials and communication records — for the duration of the engagement, any agreed support or warranty period, and as long as needed for billing, legal and record-keeping purposes. On request, and once there are no outstanding obligations, we can delete or return project data and credentials.",
    ],
  },
  {
    title: "Support, Warranty & Communication Records",
    paragraphs: [
      "We keep records of project communications, feedback and approvals to provide support, resolve issues and maintain a clear history of decisions. These records are retained in line with our retention practices described above, and access is limited to relevant team members.",
    ],
  },

  {
    part: "Part C — General & Your Rights",
    title: "How We Share Information",
    paragraphs: [
      "We do not sell your personal information. Besides the sharing described in Parts A and B above (Host Companies for internships, and third-party service/tool providers for projects), we may disclose information if required by law or to protect our rights, users or the public.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We use reasonable technical and organisational measures to protect your information against unauthorised access, alteration or loss. Access to personal and project data is limited to team members who need it. Please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Cookies & Similar Technologies",
    paragraphs: [
      "Our website may use minimal cookies or similar technologies to function properly and to remember your preferences. We do not use your information for third-party advertising. You can control or disable cookies through your browser settings. See our Cookie Policy for more details.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "Our programs and services are intended for college/university students, recent graduates, working professionals and businesses. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so we can remove it.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      "Subject to applicable law, you may request access to, correction of, or deletion of your personal information, and you may withdraw consent at any time. Business clients may also request return or deletion of project data and credentials once there are no outstanding obligations. To exercise these rights, contact us at supportthinkly.co@gmail.com. We will review and respond to reasonable requests within a reasonable timeframe.",
    ],
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "Our website may contain links to external websites or platforms (for example, WhatsApp or social media). We are not responsible for the privacy practices of those third parties, and we encourage you to review their respective policies.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. Continued use of our services after changes are posted constitutes acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="privacy_policy"
      title="Privacy"
      titleAccent="Policy"
      intro="How Thinklyedu collects, uses, shares and protects your personal information — for internship applications and for business client projects alike."
      meta={[
        { label: "Effective Date", value: "September 9, 2026" },
        {
          label: "Applies To",
          value:
            "All visitors, applicants, interns, Host Company mentors, program participants and business clients.",
        },
      ]}
      sections={SECTIONS}
      crossLinks={[
        { href: "/terms", label: "Terms & Conditions" },
        { href: "/cookies", label: "Cookie Policy" },
      ]}
    />
  );
}
