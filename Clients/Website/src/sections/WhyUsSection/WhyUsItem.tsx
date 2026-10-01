import { motion } from "framer-motion";
import type { WhyUsPrinciple } from "./whyUsData";

type WhyUsItemProps = {
  principle: WhyUsPrinciple;
  isLast: boolean;
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const WhyUsItem = ({ principle, isLast }: WhyUsItemProps) => {
  return (
    <motion.li
      variants={itemVariants}
      className="relative pl-16 sm:pl-20"
    >
      {/* Vertical connector line */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-6 sm:left-7 top-14 bottom-0 w-px
                     bg-linear-to-b from-green-500/40 to-transparent"
        />
      )}

      {/* Number circle */}
      <span
        className="absolute left-0 top-0
                   w-12 h-12 sm:w-14 sm:h-14
                   rounded-full
                   bg-green-500/10 border border-green-500/30
                   text-green-400 font-bold text-sm sm:text-base
                   flex items-center justify-center
                   backdrop-blur-sm"
      >
        {principle.number}
      </span>

      {/* Content */}
      <div className="pb-12 sm:pb-14">
        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
          {principle.title}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
          {principle.description}
        </p>
      </div>
    </motion.li>
  );
};

export default WhyUsItem;