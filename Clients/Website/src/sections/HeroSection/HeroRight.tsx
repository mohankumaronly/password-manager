import SubscribeForm from "./SubscribeForm";

const HeroRight = () => {
  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <div className="bg-white rounded-lg shadow-[0_0_30px_rgba(0,128,128,0.15)] p-6 sm:p-8">
        <h2 className="text-center text-lg sm:text-xl font-bold text-gray-900">
          Get version updates
        </h2>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default HeroRight;