import { FaKey } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import {
  productLinks,
  resourceLinks,
  developerLinks,
  legalLinks,
} from "./footerLinks";
import FooterColumn from "./FooterColumn";
import { BRAND_NAME, PRODUCT_NAME } from "../Header/navItems";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0f0f0f] text-gray-400">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column (wider on desktop) */}
          <div className="sm:col-span-2 lg:col-span-4">
            {/* Logo */}
            <a
              href="#overview"
              className="inline-flex items-center gap-2 text-white
                         hover:text-green-400 transition-colors"
            >
              <FaKey className="w-5 h-5 text-green-500" />
              <span className="text-lg font-bold tracking-tight">
                {PRODUCT_NAME}
              </span>
            </a>

            {/* Tagline */}
            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs">
              Building secure, honest password management for individuals and
              teams. Privacy-first, open, and always under your control.
            </p>

            {/* Brand credit */}
            <p className="mt-6 text-xs text-gray-500">
              Built by{" "}
              <span className="text-gray-300 font-medium">{BRAND_NAME}</span>
            </p>
          </div>

          {/* Product */}
          <div className="lg:col-span-2">
            <FooterColumn column={{ title: "Product", links: productLinks }} />
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <FooterColumn
              column={{ title: "Resources", links: resourceLinks }}
            />
          </div>

          {/* Developer */}
          <div className="lg:col-span-2">
            <FooterColumn
              column={{ title: "Developer", links: developerLinks }}
            />
          </div>

          {/* Spacer to balance grid on very wide screens */}
          <div className="hidden lg:block lg:col-span-2" aria-hidden="true" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {currentYear} {PRODUCT_NAME} · Built by{" "}
            <span className="text-gray-400">{BRAND_NAME}</span>
          </p>

          {/* Legal + language */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {/* Legal links */}
            <ul className="flex items-center gap-x-4 sm:gap-x-5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-500 hover:text-white
                               transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Divider dot */}
            <span
              aria-hidden="true"
              className="hidden sm:block w-px h-3 bg-gray-700"
            />

            {/* Language selector (placeholder) */}
            <button
              type="button"
              className="inline-flex items-center gap-1.5
                         text-xs text-gray-500 hover:text-white
                         transition-colors duration-200"
              aria-label="Change language"
            >
              <FiGlobe className="w-3.5 h-3.5" />
              <span>EN</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;