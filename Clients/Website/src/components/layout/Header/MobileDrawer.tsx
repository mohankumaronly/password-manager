import { useEffect } from "react";
import { FiX, FiDownload } from "react-icons/fi";
import { navItems, PRODUCT_NAME, DOWNLOAD_URL } from "./navItems";

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-72 max-w-[80%] bg-white z-50 md:hidden shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header inside drawer */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200">
          <span className="text-base font-semibold text-gray-900">
            {PRODUCT_NAME}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 -mr-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="px-2 py-4 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="px-3 py-3 text-base font-medium text-gray-800 rounded-md
                         hover:bg-gray-50 hover:text-green-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Download CTA */}
        <div className="px-4 pt-4 border-t border-gray-200">
          <a
            href={DOWNLOAD_URL}
            className="flex items-center justify-center gap-2 w-full
                       bg-red-600 hover:bg-red-700 text-white
                       text-sm font-medium px-4 py-3 rounded-md transition-colors"
          >
            <FiDownload className="w-4 h-4" />
            <span>Download</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default MobileDrawer;