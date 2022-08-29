import styles from "./hero.module.css";

import type { HeroInformation } from "@/types/hero-information";

export const Hero = ({ title, description }: HeroInformation) => (
  <div className={styles.hero}>
    <div className={styles["info-block"]}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={styles["buttons-contanier"]}>
        <button className={styles["app-store-button"]} />
        <button className={styles["watch-action-button"]}>
          <span>Watch in action</span>
        </button>
      </div>
    </div>
    <div className={styles["pictures-block"]}>
      <img className={styles["man-rest-img"]} src="https://tappsk.com/img/mrtappsk.png" alt="todo" />
      <img className={styles["mockup-phone"]} src="https://tappsk.com/img/mockup.png" alt="phone" />
    </div>
  </div>
);
