import { FeatureItem } from "./feature-item";

import styles from "./feature-section.module.css";

import type { Feature } from "@/types/feature";

type FeatureSectionProps = {
  features?: Feature[];
};

export const FeatureSection = ({ features }: FeatureSectionProps) => (
  <section className={styles.section}>
    <h1>Big plus to your productivity</h1>
    <div className={styles["feature-items"]}>
      {features?.map(({ icon, title, description }) => (
        <FeatureItem icon={icon} title={title} description={description} />
      ))}
    </div>
  </section>
);
