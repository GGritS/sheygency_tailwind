import { Intro } from "./intro";
import { MarketingStrategies } from "./marketingStrategies";
import { WhyMarketing } from "./whyMarketing";

export const Home = () => {
  return (
    <div className="px-32 sm:px-2">
      <Intro />
      <MarketingStrategies />
      <WhyMarketing />
    </div>
  );
};
