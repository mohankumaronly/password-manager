import { motion } from "framer-motion";
import { principles } from "./whyUsData";
import WhyUsItem from "./WhyUsItem";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const WhyUsSection = () => {
  return (
    <section
      id="why-us"
      className="w-full bg-[#00140E] py-20 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Sticky heading */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Why Password Manager?
            </h2>

            {/* Accent underline */}
            <span
              aria-hidden="true"
              className="block mt-5 w-16 h-1 rounded-full
                         bg-linear-to-r from-green-400 to-emerald-500"
            />

            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              We built Password Manager because existing tools either locked
              you in, sold your data, or made security too complicated. Here's
              what we promise instead.
            </p>
          </motion.div>

          {/* Right: Numbered timeline */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7"
          >
            {principles.map((principle, index) => (
              <WhyUsItem
                key={principle.number}
                principle={principle}
                isLast={index === principles.length - 1}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;