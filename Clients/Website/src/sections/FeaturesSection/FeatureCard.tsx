import type { Feature } from "./featuresData";

type FeatureCardProps = {
  feature: Feature;
};

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <div
      className="group relative flex flex-col gap-4 p-6 sm:p-7
                 bg-white border border-gray-200 rounded-xl
                 hover:border-green-200 hover:shadow-lg hover:-translate-y-1
                 transition-all duration-300"
    >
      {/* Icon circle */}
      <div
        className="w-12 h-12 rounded-full
                   bg-green-50 text-green-600
                   flex items-center justify-center
                   group-hover:bg-green-600 group-hover:text-white
                   transition-colors duration-300"
      >
        <Icon className="w-5 h-5" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 leading-tight">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;