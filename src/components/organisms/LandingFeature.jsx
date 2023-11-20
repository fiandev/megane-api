import FeatureList from "../molecules/FeatureList";

export default function LandingFeature() {
  return (
    <div className="flex flex-col gap-2 lg:h-[60vh] items-start justify-center text-start">
      <div>
        <h1 className="text-2xl text-dark dark:text-light font-extrabold uppercase">
          features
        </h1>
        <h2 className="text-lg text-subdark dark:text-sublight font-semibold capitalize">
          The following features are available in our service
        </h2>
      </div>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-4 place-content-center">
        {Array(4)
          .fill(1)
          .map((v) => {
            return <FeatureList />;
          })}
      </div>
    </div>
  );
}
