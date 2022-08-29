import { Header } from "@/components/header";
import { FeatureSection } from "@/components/sections";

import { FEATURES } from "@/constants/features";

export const Home = () => (
  <>
    <Header />
    <FeatureSection features={FEATURES} />
  </>
);
