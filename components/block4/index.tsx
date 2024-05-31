import { FC } from "react";
import baseImage from "@/public/assets/icons/block3/base-image.png";
import springGreenLeft from "@/public/assets/icons/block3/spring-green-right.png";
import springGreenRight from "@/public/assets/icons/block3/spring-green-left.png";
import lineTop from "@/public/assets/icons/block3/line-top.svg";
import lineBottom from "@/public/assets/icons/block3/line-bottom.svg";
import ellipse from "@/public/assets/icons/block3/ellipse.svg";
import vector from "@/public/assets/icons/block3/vector.svg";

import Image from "next/image";

import styles from "./styles.module.scss";

const Block3: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.tx1}>
          <span>The company </span>is committed to{" "}
          <span>helping you find ideal job</span>
        </div>
        <div className={styles.tx2}>
          And providing employers with <span>quality candidates.</span>
        </div>
      </div>
      <Image src={baseImage} alt="baseImage" className={styles.baseImage} />
      <Image
        src={springGreenRight}
        alt="springGreenRight"
        className={styles.springGreenRight}
      />
      <Image
        src={springGreenLeft}
        alt="springGreenLeft"
        className={styles.springGreenLeft}
      />
      <Image src={lineTop} alt="lineTop" className={styles.lineTop} />
      <Image src={lineBottom} alt="lineBottom" className={styles.lineBottom} />
      <Image src={lineBottom} alt="lineBottom" className={styles.lineBottom} />
      <Image src={vector} alt="vector" className={styles.vector} />
      <Image src={ellipse} alt="ellipse" className={styles.ellipse} />
    </div>
  );
};

export default Block3;
