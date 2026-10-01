import { FiExternalLink } from "react-icons/fi";
import type { FooterColumnData } from "./footerLinks";

type FooterColumnProps = {
  column: FooterColumnData;
};

const FooterColumn = ({ column }: FooterColumnProps) => {
  return (
    <div>
      {/* Column title */}
      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
        {column.title}
      </h3>

      {/* Links */}
      <ul className="space-y-3">
        {column.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-1.5
                         text-sm text-gray-400 hover:text-white
                         transition-colors duration-200"
            >
              <span>{link.label}</span>
              {link.external && (
                <FiExternalLink
                  className="w-3 h-3 opacity-50
                             transition-all duration-200
                             group-hover:opacity-100
                             group-hover:translate-x-0.5
                             group-hover:-translate-y-0.5"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;