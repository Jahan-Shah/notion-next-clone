import Heading from "./_components/Heading";
import Heroes from "./_components/Heroes";

const MarketingPage = () => {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-y-8 px-6 pb-10 text-center md:justify-start">
        <Heading />
        <Heroes />
      </div>
    </div>
  );
};

export default MarketingPage;
