import { FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import type { FaqItem as FaqItemType } from "./faqData";

type FaqItemProps = {
  item: FaqItemType;
  isOpen: boolean;
  onToggle: () => void;
};

const FaqItem = ({ item, isOpen, onToggle }: FaqItemProps) => {
  const panelId = `faq-panel-${item.id}`;
  const buttonId = `faq-button-${item.id}`;

  return (
    <li className="border-b border-gray-200">
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full flex items-start gap-4 sm:gap-5
                   py-5 sm:py-6 text-left
                   group cursor-pointer
                   transition-colors"
      >
        {/* Number */}
        <span
          className={`shrink-0 mt-0.5 text-sm font-bold tracking-wider
                      transition-colors ${
                        isOpen ? "text-green-600" : "text-gray-400"
                      } group-hover:text-green-600`}
        >
          {item.id}.
        </span>

        {/* Question */}
        <span
          className={`flex-1 text-base sm:text-lg font-semibold leading-snug
                      transition-colors ${
                        isOpen
                          ? "text-gray-900"
                          : "text-gray-800 group-hover:text-gray-900"
                      }`}
        >
          {item.question}
        </span>

        {/* Plus / minus icon */}
        <span
          className={`shrink-0 mt-0.5 w-7 h-7 rounded-full
                      flex items-center justify-center
                      transition-all duration-300 ${
                        isOpen
                          ? "bg-green-600 text-white rotate-45"
                          : "bg-gray-100 text-gray-600 group-hover:bg-green-50 group-hover:text-green-600"
                      }`}
        >
          <FiPlus className="w-4 h-4" />
        </span>
      </button>

      {/* Answer panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-9 sm:pl-10 pr-12">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default FaqItem;