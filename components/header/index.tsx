import { FC } from "react";

import figure1 from "@/public/assets/icons/header/figure1.png";
import figure2 from "@/public/assets/icons/header/figure2.png";
import figure3 from "@/public/assets/icons/header/figure3.png";
import figureBackground from "@/public/assets/icons/header/figure-background.png";
import flowers from "@/public/assets/icons/header/flowers.svg";

import styles from "./styles.module.scss";
import Image from "next/image";

const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}>
        <Image src={figure1} alt="figure1" />
      </div>

      <div className={styles.overlay2}>
        <Image src={figure2} alt="figure2" />
      </div>

      <div className={styles.overlay3}>
        <Image src={figure3} alt="figure3" />
      </div>

      <div className={styles.overlayBackground}>
        <Image src={figureBackground} alt="figureBackground" />
      </div>

      <Image src={flowers} alt="flowers" className={styles.flowers} />

      <div className={styles.menu}>
        <button> Feedback</button>
        <button>About</button>
        <button>Vacancies</button>
        <button>Benefits</button>
      </div>

      <div className={styles.title}>
        <div className={styles.sp1}>start</div>
        <div className={styles.sp2}>career</div>
        <div className={styles.sp3}>now</div>
      </div>
    </div>
  );
};
export default Header;
