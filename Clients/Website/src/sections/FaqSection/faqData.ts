export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "01",
    question: "Is my data really private?",
    answer:
      "Yes. Password Manager uses zero-knowledge architecture with AES-256 encryption. Your master password never leaves your device, and we can't decrypt your vault even if we wanted to. No tracking, no telemetry, no analytics — ever.",
  },
  {
    id: "02",
    question: "Can I self-host Password Manager?",
    answer:
      "Absolutely. We offer a self-hosted option for individuals and teams who want full control over their infrastructure. Deploy on your own servers, keep your data in your network, and manage backups on your terms.",
  },
  {
    id: "03",
    question: "Is it free? What's the pricing?",
    answer:
      "The core password manager is free forever for individual use with unlimited passwords and devices. Team plans with shared vaults, admin controls, and priority support will be available at a fair monthly price — with no hidden fees and no forced upgrades.",
  },
  {
    id: "04",
    question: "Which platforms are supported?",
    answer:
      "Password Manager ships native apps for Windows, macOS, Linux, iOS, and Android. Browser extensions are available for Chrome, Firefox, Edge, and Safari. Your vault syncs seamlessly across all your devices.",
  },
  {
    id: "05",
    question: "Can I import from my old password manager?",
    answer:
      "Yes. We support one-click imports from all major password managers including Bitwarden, 1Password, LastPass, Dashlane, KeePass, and generic CSV files. Your existing data transfers cleanly with folders, tags, and notes intact.",
  },
  {
    id: "06",
    question: "What happens if I lose my master password?",
    answer:
      "Because of zero-knowledge encryption, we cannot recover your master password — and that's by design. However, we strongly recommend setting up an emergency recovery kit during onboarding, plus biometric unlock on mobile, so you're never truly locked out.",
  },
  {
    id: "07",
    question: "How do I report a security issue?",
    answer:
      "We take security seriously. If you've found a vulnerability, please report it privately through our responsible disclosure process. We acknowledge all valid reports within 48 hours and credit researchers publicly (with permission) once a fix ships.",
  },
  {
    id: "08",
    question: "When does v1.0 launch?",
    answer:
      "Password Manager is currently in active development. Subscribe to the version updates list from the top of this page and you'll be the first to know when v1.0 drops, along with early-access invitations and launch-day perks.",
  },
];