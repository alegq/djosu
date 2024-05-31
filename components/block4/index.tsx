import { FC } from "react";
import boxGreen from "@/public/assets/icons/block4/box-green.png";
import disk from "@/public/assets/icons/block4/disk-green.png";
import pyramid from "@/public/assets/icons/block4/pyramid-green.png";
import subtract from "@/public/assets/icons/block4/subtract.svg";
import star from "@/public/assets/icons/block4/star.svg";

import Image from "next/image";

import styles from "./styles.module.scss";

const Block4: FC = () => {
  return (
    <div className={styles.containerBlock4}>
      <div className={styles.text}>
        <div className={styles.tx1}>
          Djosu continues to develop and expand its services to help even more
          people{" "}
        </div>
        <div>find their dream IT jobs.</div>
      </div>
      <div className={styles.become}>Become part of our team now! </div>
      <Image src={boxGreen} alt="boxGreen" className={styles.boxGreen} />
      <Image src={star} alt="star" className={styles.star} />
      <div className={styles.oval}>
        <div className={styles.name}>Designers</div>
        <div className={styles.count}>+ 400</div>
      </div>
      <div className={styles.rectangle}>
        <div className={styles.name}>Developers</div>
        <div className={styles.count}>+ 300</div>
      </div>
      <div className={styles.disk}>
        <Image src={disk} alt="disk" className={styles.image} />
        <div className={styles.name}>QA Tester</div>
        <div className={styles.count}>+204</div>
      </div>
      <div className={styles.pyramid}>
        <Image src={pyramid} alt="pyramid" className={styles.image} />
        <div className={styles.name}>Social Media Strategist</div>
        <div className={styles.count}>+134</div>
      </div>
      <div className={styles.subtract}>
        <Image src={subtract} alt="subtract" className={styles.image} />
        <div className={styles.name}>SEO specialists</div>
        <div className={styles.count}>+350</div>
      </div>
    </div>
  );
};

export default Block4;
