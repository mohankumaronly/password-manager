import { useState } from "react";
import { FaKey } from "react-icons/fa";
import { FiDownload, FiMenu } from "react-icons/fi";
import { navItems, PRODUCT_NAME, DOWNLOAD_URL } from "./navItems";
import MobileDrawer from "./MobileDrawer";

type ProductBarProps = {
  isScrolled: boolean;
};

const ProductBar = ({ isScrolled }: ProductBarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div
        className={`w-full bg-white h-16 transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "border-b border-gray-200"
        }`}
      >
        <div className="max-w-350 mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 shrink-0 text-gray-900 hover:text-green-600 transition-colors"
          >
            <FaKey className="w-5 h-5 text-green-600" />
            <span className="text-base sm:text-lg font-bold tracking-tight">
              {PRODUCT_NAME}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700
                           hover:text-green-600 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Download (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={DOWNLOAD_URL}
              className="hidden sm:inline-flex items-center gap-2
                         bg-red-600 hover:bg-red-700 text-white
                         text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download</span>
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={isDrawerOpen}
              className="md:hidden p-2 -mr-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default ProductBar;