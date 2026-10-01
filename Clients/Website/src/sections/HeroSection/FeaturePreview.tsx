import {
  FiLock,
  FiKey,
  FiSmartphone,
  FiShield,
} from "react-icons/fi";
import type { IconType } from "react-icons";

type Feature = {
  icon: IconType;
  title: string;
  subtitle: string;
};

const features: Feature[] = [
  {
    icon: FiLock,
    title: "Secure Vault",
    subtitle: "AES-256 encrypted storage",
  },
  {
    icon: FiKey,
    title: "Password Generator",
    subtitle: "Strong, unique passwords",
  },
  {
    icon: FiSmartphone,
    title: "Cross-Platform",
    subtitle: "Desktop & mobile sync",
  },
  {
    icon: FiShield,
    title: "Two-Factor Auth",
    subtitle: "Extra layer of security",
  },
];

const FeaturePreview = () => {
  return (
    <div className="mt-16 lg:mt-20">
      {/* Heading */}
      <h3 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">
        What you'll get in v1.0
      </h3>
      <p className="mt-3 text-center text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
        Password Manager is actively being built. Here's a preview of the
        features shipping in the first release.
      </p>

      {/* Grid — 4 cards in one row on desktop */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group flex items-start gap-4 p-5
                         bg-white/70 backdrop-blur-sm
                         border border-white/60 rounded-lg
                         hover:bg-white hover:shadow-md
                         transition-all duration-200"
            >
              {/* Icon circle */}
              <div
                className="shrink-0 w-11 h-11 rounded-full
                           bg-green-100 text-green-700
                           flex items-center justify-center
                           group-hover:bg-green-600 group-hover:text-white
                           transition-colors duration-200"
              >
                <Icon className="w-5 h-5" />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h4 className="text-base font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturePreview;