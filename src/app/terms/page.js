import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms & Conditions | Thinklyedu",
  description:
    "Thinklyedu Internship & Program Policy and Client Project Services terms — eligibility, fees, matching, code of conduct, payments, IP, delivery and cancellation for interns, host companies and business clients.",
  alternates: { canonical: "https://thinklyedu.com/terms" },
  openGraph: {
    title: "Terms & Conditions | Thinklyedu",
    description:
      "Rules, expectations, code of conduct, payment terms and evaluation criteria for the Thinklyedu internship program.",
    url: "https://thinklyedu.com/terms",
    siteName: "Thinklyedu",
    type: "website",
  },
};

const SECTIONS = [
  {
    part: "Part A — Internship Program Policy",
    title: "Program Overview & Purpose",
    paragraphs: [
      "Thinklyedu is committed to connecting students with real-world, project-based internship opportunities across various technical and non-technical domains. This Policy outlines the rules, expectations, code of conduct, payment terms, and evaluation criteria required to ensure a professional and valuable experience for both students (\u201cInterns\u201d) and partner organizations (\u201cHost Companies\u201d).",
    ],
  },
  {
    title: "Eligibility, Fees & Payment Terms",
    list: [
      {
        label: "Eligibility:",
        text: "Thinklyedu programs are open to current college/university students, recent graduates, and self-taught learners seeking real-world project experience.",
      },
      {
        label: "Certificate Processing Fees:",
        text: "While applying for and participating in the internship program is open to candidates, obtaining a Verified Certificate of Completion and formal credentialing requires a Certificate Processing Fee.",
      },
      {
        label: "Payment Schedule:",
        text: "First Installment (50%) is payable at the half-term mark (midway point) of the internship period. The Second Installment (50%) is payable upon completion of the full internship tenure, prior to the final release and verification of the certificate and recommendation letter.",
      },
      {
        label: "Non-Refundability:",
        text: "Certificate processing fees paid at any stage are non-refundable once processed, as they cover administrative, verification, and evaluation costs.",
      },
      {
        label: "Accuracy of Information:",
        text: "Applicants must provide truthful and accurate information regarding their identity, contact details, academic background, and skills during registration. Providing fraudulent details will lead to immediate disqualification.",
      },
    ],
  },
  {
    title: "Matching, Onboarding & Offer Letter",
    list: [
      {
        label: "Matching Timeline:",
        text: "Thinklyedu aims to review profiles and match candidates with suitable Host Companies within 72 hours of application submission.",
      },
      {
        label: "Acceptance of Match:",
        text: "Once matched, interns must confirm their participation and connect with their assigned Host Mentor within 48 hours of receiving their placement email.",
      },
      {
        label: "Offer Letter Issuance:",
        text: "An official Internship Offer Letter will be generated and provided to the student immediately as soon as they complete their onboarding and officially join the program.",
      },
      {
        label: "Orientation:",
        text: "Interns must complete the initial onboarding check-in with their assigned mentor to align on project scopes, tools, deliverables, and communication channels (e.g., Slack, WhatsApp, Email, or Microsoft Teams).",
      },
    ],
  },
  {
    title: "Code of Conduct & Professional Standards",
    paragraphs: [
      "Interns represent both themselves and Thinklyedu during their placement. High standards of professionalism are strictly enforced.",
    ],
    list: [
      {
        label: "Communication & Responsiveness:",
        text: "Interns are expected to maintain prompt communication with their Host Mentor and reply to project updates within 24 business hours.",
      },
      {
        label: "Punctuality:",
        text: "Interns must attend all scheduled 1-on-1 mentor meetings and team check-ins on time.",
      },
      {
        label: "Anti-Ghosting Policy:",
        text: "Dropping out without notice or failing to communicate with mentors for 3 consecutive business days without prior approved leave will result in immediate termination from the program and blacklisting from future Thinklyedu opportunities.",
      },
      {
        label: "Academic & Work Integrity:",
        text: "Plagiarism, submitting work generated entirely by unauthorized AI tools (where restricted by the host company), or submitting work done by third parties is grounds for immediate dismissal without certificate issuance.",
      },
      {
        label: "Respectful Behavior:",
        text: "Zero tolerance for discrimination, harassment, abusive language, or non-professional behavior toward mentors, fellow interns, or host company employees.",
      },
    ],
  },
  {
    title: "Attendance, Workload & Leaves",
    list: [
      {
        label: "Weekly Commitment:",
        text: "Standard internships require a commitment of 10 to 15 hours per week for part-time remote roles or as mutually agreed with the Host Company.",
      },
      {
        label: "Planned Leaves:",
        text: "Interns requiring leave (e.g., for college exams, personal emergencies) must notify both their Host Mentor and Thinklyedu support (supportthinkly.co@gmail.com) at least 48 hours in advance.",
      },
      {
        label: "Program Duration:",
        text: "Standard internship tenures range from 4 weeks to 12 weeks, depending on the domain and project scope.",
      },
    ],
  },
  {
    title: "Confidentiality & Intellectual Property (IP)",
    list: [
      {
        label: "Confidentiality:",
        text: "Interns may gain access to proprietary data, internal company strategy, customer lists, or codebases. Interns agree never to disclose, duplicate, or share host company confidential information with third parties.",
      },
      {
        label: "IP Ownership:",
        text: "All work, code, designs, campaigns, scripts, data, and deliverables produced by the intern during the program belong exclusively to the Host Company, unless explicitly agreed otherwise in writing.",
      },
      {
        label: "Portfolio Rights:",
        text: "Interns may list their project role on LinkedIn, resumes, and personal portfolios, provided they do not share sensitive company data or violate any signed nondisclosure agreements (NDAs).",
      },
    ],
  },
  {
    title: "Performance Evaluation & Certificate Issuance",
    paragraphs: [
      "To receive a Verified Thinklyedu Certificate of Completion and a recommendation letter:",
    ],
    list: [
      {
        label: "Completion of Deliverables:",
        text: "The intern must complete and submit all core milestones defined in the project scope.",
      },
      {
        label: "Mentor Approval:",
        text: "The Host Mentor must provide a satisfactory performance review confirming active participation and effort.",
      },
      {
        label: "Fee Clearance:",
        text: "Full payment of the Certificate Processing Fee must be settled according to the payment schedule in Section 2 (50% at mid-term and 50% at end-term).",
      },
      {
        label: "Minimum Attendance:",
        text: "The intern must attend at least 85% of scheduled weekly check-ins and mentor meetings.",
      },
    ],
    note: "Note: Payment of the fee alone does not automatically grant a certificate if project milestones or minimum performance standard requirements are not fulfilled.",
  },
  {
    title: "Early Termination & Disqualification",
    paragraphs: [
      "Thinklyedu and the Host Company reserve the right to terminate an internship prematurely under the following circumstances:",
    ],
    list: [
      "Material breach of this Policy or confidentiality agreement.",
      "Failure to meet minimum project deliverables after a warning.",
      "Unexcused absences exceeding 3 consecutive business days.",
      "Misconduct or unprofessional behavior.",
    ],
    note: "Interns terminated for cause will not be eligible for a certificate, letter of recommendation, or fee refund.",
  },
  {
    title: "Support & Grievances",
    paragraphs: [
      "If an intern faces challenges with their Host Mentor, project clarity, work hours, or improper behavior from a host company representative, they should immediately report the matter to Thinklyedu.",
    ],
    list: [
      {
        label: "Email:",
        text: "supportthinkly.co@gmail.com",
      },
      {
        label: "Phone:",
        text: "+91 98185 09083",
      },
    ],
    note: "Thinklyedu support will review all grievances within 24\u201348 hours and mediate appropriate resolutions.",
  },
  {
    part: "Part B — Client Project Services",
    title: "Client Project Services — Overview",
    paragraphs: [
      "In addition to internships, Thinklyedu provides professional project services for businesses and individuals, including website development, mobile app development, AI automation, EdTech solutions and digital marketing. This Policy applies to all client engagements unless a separate written agreement or Statement of Work (SOW) is signed, in which case the signed document prevails.",
    ],
  },
  {
    title: "Quotes, Estimates & Proposals",
    list: [
      {
        label: "Quotes & Estimates:",
        text: "Quotes provided through our website, email or calls are estimates based on the information you share. Final pricing, deliverables and timelines are confirmed only in a written proposal or Statement of Work.",
      },
      {
        label: "Validity:",
        text: "Quotes are typically valid for 14 days from the date of issue unless stated otherwise.",
      },
      {
        label: "Scope Definition:",
        text: "The proposal/SOW defines the deliverables, timeline, number of included revisions and payment milestones for the project.",
      },
    ],
  },
  {
    title: "Project Payments & Milestones",
    list: [
      {
        label: "Advance Payment:",
        text: "Projects typically begin with an advance/mobilisation payment (commonly 40\u201350% of the project value) before work starts.",
      },
      {
        label: "Milestone Payments:",
        text: "The remaining balance is billed at agreed milestones or on delivery, as defined in the proposal.",
      },
      {
        label: "Taxes:",
        text: "All fees are exclusive of applicable taxes (such as GST) unless stated otherwise.",
      },
      {
        label: "Delayed Payments:",
        text: "Payments not received by their due date may pause the project until cleared, and delivery timelines will be adjusted accordingly.",
      },
    ],
  },
  {
    title: "Revisions, Scope & Change Requests",
    list: [
      {
        label: "Included Revisions:",
        text: "Each project includes a reasonable number of revisions as specified in the proposal.",
      },
      {
        label: "Additional Work:",
        text: "New features or changes outside the agreed scope are treated as change requests. These may incur additional cost and time, and will be quoted separately and approved in writing before work proceeds.",
      },
    ],
  },
  {
    title: "Client Responsibilities & Content",
    list: [
      "Clients agree to provide the required content, logins, brand assets (logos, images, text, credentials) and timely feedback. Delays in providing inputs may extend the delivery timeline.",
      "Clients confirm that they own or have the necessary rights and permissions for all content, images and materials they provide to us, and that such material does not infringe any third-party rights.",
    ],
  },
  {
    title: "Client Work — Intellectual Property & Ownership",
    list: [
      {
        label: "Ownership on Full Payment:",
        text: "Upon receipt of full and final payment, ownership of the final approved deliverables created specifically for the client transfers to the client. Thinklyedu retains ownership of all pre-existing tools, frameworks, libraries, templates, components and know-how used to build the work.",
      },
      {
        label: "Third-Party Components:",
        text: "Some components (such as open-source libraries, third-party plugins, APIs, fonts or stock assets) are governed by their own licences and may require separate fees or subscriptions after handover.",
      },
      {
        label: "Portfolio Rights:",
        text: "We may showcase the completed work in our portfolio, case studies and marketing, unless the client requests otherwise in writing.",
      },
    ],
  },
  {
    title: "Confidentiality & Data Protection (Client Projects)",
    list: [
      {
        label: "Confidentiality:",
        text: "We treat client business information, strategy, credentials and data as confidential and share it only with team members working on the project. We are happy to sign a mutual NDA on request.",
      },
      {
        label: "Client's User Data:",
        text: "Where a project involves personal data of the client's users, the client remains responsible for lawful collection and obtaining required consents, while Thinklyedu implements reasonable safeguards as mutually agreed.",
      },
    ],
    note: "Please refer to our Privacy Policy for how we handle personal information.",
  },
  {
    title: "Timelines, Delays & Force Majeure",
    paragraphs: [
      "Project timelines are estimates and depend on timely client inputs, feedback and approvals. Neither party will be liable for delays caused by events beyond reasonable control, including internet or hosting outages, natural events, third-party service failures or other force majeure events.",
    ],
  },
  {
    title: "Cancellation, Pause & Refunds",
    list: [
      {
        label: "Cancellation by Client:",
        text: "If a client cancels an ongoing project, payments for work already completed and time spent are non-refundable, and any completed milestones remain payable.",
      },
      {
        label: "Pausing a Project:",
        text: "Projects may be paused by mutual agreement; prolonged pauses may require a re-assessment of price and timeline.",
      },
      {
        label: "Non-Refundability:",
        text: "Advance and milestone payments are non-refundable once work has commenced, except where required by applicable law.",
      },
    ],
  },
  {
    title: "Post-Delivery Support & Warranty",
    list: [
      {
        label: "Bug Fixes:",
        text: "We will fix defects in the delivered work for a reasonable support period as specified in the proposal.",
      },
      {
        label: "Ongoing Maintenance:",
        text: "Unless included in the proposal, ongoing maintenance, updates, hosting and third-party service costs are not included after delivery.",
      },
      {
        label: "Not Covered:",
        text: "Issues caused by client modifications, third-party changes or misuse of the delivered work are outside the support window.",
      },
    ],
  },
  {
    title: "Client Support & Grievances",
    paragraphs: [
      "For project questions, billing or support, reach out to the Thinklyedu team and we aim to respond within 24\u201348 business hours.",
    ],
    list: [
      {
        label: "Email:",
        text: "supportthinkly.co@gmail.com",
      },
      {
        label: "Phone:",
        text: "+91 98185 09083",
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      badge="terms_and_conditions"
      title="Terms &"
      titleAccent="Conditions"
      intro="Terms for the Thinklyedu Internship & Program Policy and our Client Project Services — covering rules, payments, evaluation and project delivery for students, host companies and business clients."
      meta={[
        { label: "Effective Date", value: "September 9, 2026" },
        {
          label: "Applies To",
          value:
            "Interns, Host Company Mentors, Program Participants and Client Project Customers (Businesses & Individuals).",
        },
      ]}
      sections={SECTIONS}
      crossLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/cookies", label: "Cookie Policy" },
      ]}
    />
  );
}
