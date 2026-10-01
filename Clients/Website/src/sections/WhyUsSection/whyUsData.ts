export type WhyUsPrinciple = {
  number: string;
  title: string;
  description: string;
};

export const principles: WhyUsPrinciple[] = [
  {
    number: "01",
    title: "Privacy by default",
    description:
      "Your vault is encrypted with zero-knowledge architecture — meaning even we can't read your data. No tracking, no telemetry, no selling your information. Ever.",
  },
  {
    number: "02",
    title: "Open & transparent",
    description:
      "The core is open source and externally audited. Our roadmap is public, our changelog is honest, and our cryptography follows industry standards — never rolling our own.",
  },
  {
    number: "03",
    title: "Yours to control",
    description:
      "Self-host on your own infrastructure, export your data anytime, and never get locked in. Your passwords belong to you — not to us, and not to any subscription.",
  },
  {
    number: "04",
    title: "Actively built",
    description:
      "Password Manager ships updates every month, driven by real user feedback. Every feature request is tracked publicly, so you always know what's coming next.",
  },
];