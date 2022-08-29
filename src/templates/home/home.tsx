import { Header } from "@/components/header";
import { FeatureSection } from "@/components/sections";
import { Hero } from "@/components/hero";

import { FEATURES } from "@/constants/features";
import { HERO_INFORMATION } from "@/constants/hero-information";

export const Home = () => (
  <>
    <Header />
    <Hero title={HERO_INFORMATION.title} description={HERO_INFORMATION.description} />
    <FeatureSection features={FEATURES} />
  </>
);
