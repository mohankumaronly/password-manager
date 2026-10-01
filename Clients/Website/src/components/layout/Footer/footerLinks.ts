import { DEVELOPER_URL } from "../Header/navItems";

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterColumnData = {
  title: string;
  links: FooterLink[];
};

export const productLinks: FooterLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Why Us", href: "#why-us" },
  { label: "Pricing", href: "#" },
];

export const resourceLinks: FooterLink[] = [
  { label: "FAQ", href: "#faq" },
  { label: "Changelog", href: "#" },
  { label: "Roadmap", href: "#" },
  { label: "Subscribe", href: "#overview" },
];

export const developerLinks: FooterLink[] = [
  { label: "Portfolio", href: DEVELOPER_URL, external: true },
  { label: "GitHub", href: "https://github.com/", external: true },
  { label: "Contact", href: DEVELOPER_URL, external: true },
];

export const legalLinks: FooterLink[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
];