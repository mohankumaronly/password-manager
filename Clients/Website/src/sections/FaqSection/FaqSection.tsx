import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { faqs } from "./faqData";
import FaqItem from "./FaqItem";
import { DEVELOPER_URL } from "../../components/layout/Header/navItems";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const FaqSection = () => {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="w-full bg-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about Password Manager. Can't find an
            answer? Reach out and we'll get back to you.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 border-t border-gray-200"
        >
          {faqs.map((item) => (
            <motion.div key={item.id} variants={listItemVariants}>
              <FaqItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            </motion.div>
          ))}
        </motion.ul>

        {/* Bottom contact link */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-base text-gray-600">
            Still have questions?
          </p>
          <a
            href={DEVELOPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3
                       text-green-600 hover:text-green-700
                       font-semibold text-base
                       transition-colors group"
          >
            <span>Get in touch</span>
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;