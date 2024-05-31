import { FC } from "react";
import heart from "@/public/assets/icons/Block2/heart.svg";
import figure1 from "@/public/assets/icons/Block2/figure1.png";
import figure2 from "@/public/assets/icons/Block2/figure2.png";
import figure3 from "@/public/assets/icons/Block2/figure3.png";
import figure4 from "@/public/assets/icons/Block2/figure4.png";
import liquidaTop from "@/public/assets/icons/Block2/mujer-liquida-top.png";
import liquidaLeft from "@/public/assets/icons/Block2/mujer-liquida-left.png";
import Image from "next/image";

import styles from "./styles.module.scss";

const Block2: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text1}>
        <div className={styles.sp1}>
          If you are looking for a new challenge ,
        </div>
        <div>And would like to join a friendly and creative team</div>
      </div>
      <div className={styles.text2}>
        <span>Djosu</span> is your ideal place to find employment.
      </div>

      <Image src={heart} alt="Heart" className={styles.heart} />
      <Image src={liquidaTop} alt="liquidaTop" className={styles.liquidaTop} />
      <Image
        src={liquidaLeft}
        alt="liquidaLeft"
        className={styles.liquidaLeft}
      />

      <div className={styles.competitive}>
        <Image src={figure1} alt="figure1" className={styles.figure} />
        <div className={styles.signature}>Competitive wages</div>
      </div>
      <div className={styles.flexible}>
        <Image src={figure2} alt="figure2" className={styles.figure} />
        <div className={styles.signature}>Flexible working hours</div>
      </div>
      <div className={styles.professionalTeam}>
        <Image src={figure3} alt="figure3" className={styles.figure} />
        <div className={styles.signature}>Professional team</div>
      </div>
      <div className={styles.ProfessionalGrowth}>
        <Image src={figure4} alt="figure4" className={styles.figure} />
        <div className={styles.signature}>
          Professional growth
          <br />
          and development
        </div>
      </div>
    </div>
  );
};

export default Block2;
