export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Why Us", href: "#why-us" },
  { label: "Demo", href: "#demo" },
  { label: "FAQ", href: "#faq" },
];

export const DEVELOPER_URL = "https://mohankumardev.vercel.app";
export const BRAND_NAME = "RockrangerEngine";
export const PRODUCT_NAME = "Password Manager";
export const DOWNLOAD_URL = "#"; // TODO: replace with real download link later