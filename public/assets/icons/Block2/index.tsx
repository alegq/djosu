import { FC } from "react";
import heart from "@/assets/icons/Block2/heart.svg";
import figure1 from "@/assets/icons/Block2/figure1.png";
import figure2 from "@/assets/icons/Block2/figure2.png";
import figure3 from "@/assets/icons/Block2/figure3.png";
import figure4 from "@/assets/icons/Block2/figure4.png";
import liquidaTop from "@/assets/icons/Block2/mujer-liquida-top.png";
import liquidaLeft from "@/assets/icons/Block2/mujer-liquida-left.png.png";

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

      <img src={heart} alt="Heart" className={styles.heart} />
      <img src={liquidaTop} alt="liquidaTop" className={styles.liquidaTop} />

      <div className={styles.competitive}>
        <img src={figure1} alt="figure1" className={styles.figure} />
        <div>Competitive wages</div>
      </div>
      <div className={styles.flexible}>
        <img src={figure2} alt="figure2" className={styles.figure} />
        <div>Flexible working hours</div>
      </div>
      <div className={styles.professionalTeam}>
        <img src={figure3} alt="figure3" className={styles.figure} />
        <div>Professional team</div>
      </div>
      <div className={styles.ProfessionalGrowth}>
        <img src={figure4} alt="figure4" className={styles.figure} />
        <div className={}>Professional growth and development</div>
      </div>
    </div>
  );
};

export default Block2;
