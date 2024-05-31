import { FC } from "react";
import baseImage from "@/public/assets/icons/block8/base-image.png";
import box from "@/public/assets/icons/block8/box.png";
import spiral from "@/public/assets/icons/block8/spiral.png";
import arrow from "@/public/assets/icons/block8/arrow.png";
import substance from "@/public/assets/icons/block8/substance.png";
import liquida from "@/public/assets/icons/block8/mujer-liquida.png";

import Image from "next/image";

import styles from "./styles.module.scss";

const Block8: FC = () => {
  return (
    <div className={styles.containerBlock8}>
      <div className={styles.text}>
        <span>Together we can change the world</span> for the better, be part of{" "}
        <span>Djosu&apos;s success story!</span>
      </div>
      <Image src={baseImage} alt="baseImage" className={styles.baseImage} />
      <Image src={box} alt="box" className={styles.box} />
      <Image src={spiral} alt="spiral" className={styles.spiral} />
      <div className={styles.toQA}>
        <div className={styles.tx1}>Want to know more?</div>
        <div className={styles.tx2}>Check out the Q&A!</div>
        <Image src={arrow} alt="arrow" className={styles.arrow} />
      </div>
      <Image src={substance} alt="substance" className={styles.substance} />
      <Image src={liquida} alt="liquida" className={styles.liquida} />
    </div>
  );
};

export default Block8;
