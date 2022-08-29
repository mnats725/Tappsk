import styles from "./feature-item.module.css";

import type { Feature } from "@/types/feature";

export const FeatureItem = ({ icon, title, description }: Feature) => (
  <div className={styles.item}>
    <div className={styles["image-wrapper"]}>
      <img alt="todo" src={icon} />
    </div>
    <div className={styles["text-block"]}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);
