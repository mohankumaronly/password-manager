import {
  FiLock,
  FiKey,
  FiShield,
  FiSmartphone,
  FiShare2,
  FiBarChart2,
  FiAlertTriangle,
  FiUsers,
  FiWifiOff,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export type Feature = {
  icon: IconType;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: FiLock,
    title: "Secure Vault",
    description:
      "Store every password, key, and credential in one AES-256 encrypted vault that only you can unlock.",
  },
  {
    icon: FiKey,
    title: "Password Generator",
    description:
      "Create strong, unique passwords in one click — never reuse the same password across accounts again.",
  },
  {
    icon: FiShield,
    title: "Two-Factor Auth",
    description:
      "Add an extra layer of protection to your most sensitive accounts with TOTP and hardware key support.",
  },
  {
    icon: FiSmartphone,
    title: "Cross-Platform Sync",
    description:
      "Access your vault anywhere — desktop, mobile, and browser extension, all kept in perfect sync.",
  },
  {
    icon: FiShare2,
    title: "Secure Sharing",
    description:
      "Share passwords with teammates and family without ever sending them in plain text or over email.",
  },
  {
    icon: FiBarChart2,
    title: "Audit Logs",
    description:
      "Track exactly who accessed what and when, with a detailed timeline of every vault activity.",
  },
  {
    icon: FiAlertTriangle,
    title: "Breach Alerts",
    description:
      "Get notified the moment a saved password appears in a known data breach, and rotate it instantly.",
  },
  {
    icon: FiUsers,
    title: "Team Vaults",
    description:
      "Give teams shared access to credentials with role-based permissions and approval workflows.",
  },
  {
    icon: FiWifiOff,
    title: "Offline Access",
    description:
      "Unlock your vault and retrieve credentials even without an internet connection — always available.",
  },
];