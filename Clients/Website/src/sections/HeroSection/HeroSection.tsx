import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import FeaturePreview from "./FeaturePreview";

const HeroSection = () => {
  return (
    <section
      id="overview"
      className="relative w-full overflow-hidden
                 bg-linear-to-br from-teal-200 via-emerald-100 to-white"
    >
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Top: Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <HeroLeft />
          <HeroRight />
        </div>

        {/* Bottom: Feature preview grid */}
        <FeaturePreview />
      </div>
    </section>
  );
};

export default HeroSection;