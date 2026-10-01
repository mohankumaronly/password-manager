import { useEffect, useState } from "react";
import AppBar from "./AppBar";
import ProductBar from "./ProductBar";

const SCROLL_THRESHOLD = 40; // px scrolled before ProductBar sticks

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    // Set initial state on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* AppBar scrolls away normally */}
      <AppBar />

      {/* ProductBar becomes sticky once scrolled past threshold */}
      <div
        className={
          isScrolled
            ? "fixed top-0 left-0 right-0 z-40"
            : "relative"
        }
      >
        <ProductBar isScrolled={isScrolled} />
      </div>

      {/* Spacer to prevent content jump when ProductBar becomes fixed */}
      {isScrolled && <div className="h-16" aria-hidden="true" />}
    </header>
  );
};

export default Header;