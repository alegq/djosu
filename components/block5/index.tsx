import { FC } from "react";
import substanceRight from "@/public/assets/icons/block5/substance-right.png";
import substanceLeft from "@/public/assets/icons/block5/substance-left.png";
import group from "@/public/assets/icons/block5/Group 370126.png";
import starWhite from "@/public/assets/icons/block5/star-white.svg";
import starBlack from "@/public/assets/icons/block5/star-black.png";
import icon1 from "@/public/assets/icons/block5/icon1.svg";
import icon2 from "@/public/assets/icons/block5/icon2.svg";
import icon3 from "@/public/assets/icons/block5/icon3.svg";

import Image from "next/image";

import styles from "./styles.module.scss";

const Block5: FC = () => {
  return (
    <div className={styles.containerBlock5}>
      <Image src={group} alt="Group" className={styles.group} />
      <div className={styles.substanceRightConteiner}>
        <Image
          src={substanceRight}
          alt="substanceRight"
          className={styles.substanceRight}
        />
      </div>
      <div className={styles.substanceLeftConteiner}>
        <Image
          src={substanceLeft}
          alt="substanceLeft"
          className={styles.substanceLeft}
        />
      </div>
      <Image src={starWhite} alt="starWhite" className={styles.starWhite} />
      <Image src={starBlack} alt="starBlack" className={styles.starBlack} />
      <div className={styles.containerInfo}>
        <div className={styles.leftInfo}>
          <div>
            We offer <span>unique opportunities</span> for{" "}
            <span>IT professionals</span> who are looking for not only a job,
          </div>
          <div className={styles.tx2}>
            but also the chance to <span>realize their potential</span> and be
            part of something bigger.{" "}
          </div>
        </div>
        <div className={styles.rightInfo}>
          <div className={styles.containerIcon}>
            <Image src={icon1} alt="icon1" className={styles.icon} />
            <Image src={icon2} alt="icon2" className={styles.icon} />
            <Image src={icon3} alt="icon3" className={styles.icon} />
          </div>
          <div className={styles.tx1}>
            With us you will find not only{" "}
            <span>
              interesting <br />
              projects,
            </span>{" "}
          </div>
          <div className={styles.tx2}>
            {" "}
            but also{" "}
            <span>
              opportunities to learn and <br /> develop
            </span>{" "}
            , participate in international <br /> conferences and workshops.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block5;
