import Shape from "../atoms/Shape";
import GetStartedButton from "../molecules/GetStartedButton";

export default function LandingProfile() {
  return (
    <div className="relative flex flex-col h-[80vh] lg:h-[90vh] items-center justify-center opacity-90 text-center">
      <Shape className="bg-gradient-to-r from-light via-secondary to-primary w-64 h-64 blur-sm absolute z-[-1] "></Shape>
      <h1 className="text-3xl font-inter text-primary font-extrabold uppercase">
        Megane API
      </h1>
      <h2 className="text-xl mb-4 font-poppins text-dark dark:text-light font-semibold capitalize">
        Megane API is a collection of APIs for various needs built in Python
      </h2>

      <div className="flex items-center gap-2">
        <GetStartedButton href="/docs" className="bg-primary font-semibold">
          Getting Started
        </GetStartedButton>
        {/*
        <GetStartedButton
          href="https://github.com/fiandev/megane-api"
          className="text-dark dark:text-light font-semibold"
        >
          see repository
        </GetStartedButton>
          */}
      </div>
    </div>
  );
}
