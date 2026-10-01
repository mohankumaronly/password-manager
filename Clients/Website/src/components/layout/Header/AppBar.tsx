import { FiExternalLink } from "react-icons/fi";
import { BRAND_NAME, DEVELOPER_URL } from "./navItems";

const AppBar = () => {
  return (
    <div className="w-full bg-[#0f0f0f] text-white h-10">
      <div className="max-w-350 mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand name — text only */}
        <span className="text-sm sm:text-base font-semibold tracking-wide">
          {BRAND_NAME}
        </span>

        {/* Developer link */}
        <a
          href={DEVELOPER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
        >
          <span>Developer</span>
          <FiExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

export default AppBar;