import { FC } from "react";
import substanceLeft from "@/public/assets/icons/block7/substance-left.png";
import substanceRight from "@/public/assets/icons/block7/substance-right.png";
import liquidaRight from "@/public/assets/icons/block7/mujer-liquida-left.png";
import liquidaLeft from "@/public/assets/icons/block7/mujer-liquida-right.png";
import baseImage from "@/public/assets/icons/block7/base-image.png";
import group from "@/public/assets/icons/block7/group.png";

import Image from "next/image";

import styles from "./styles.module.scss";

const Block7: FC = () => {
  return (
    <div className={styles.containerBlock7}>
      <Image
        src={substanceLeft}
        alt="substanceLeft"
        className={styles.substanceLeft}
      />{" "}
      <Image
        src={substanceRight}
        alt="substanceRight"
        className={styles.substanceRight}
      />
      <Image
        src={liquidaRight}
        alt="liquidaRight"
        className={styles.liquidaRight}
      />
      <Image
        src={liquidaLeft}
        alt="liquidaLeft"
        className={styles.liquidaLeft}
      />
      <Image src={group} alt="group" className={styles.group} />
      <div className={styles.tex1}>
        For many years now, <span>Djosu</span> has been considered one of{" "}
        <span>the best</span> in{" "}
        <span>the information technology industry.</span>
      </div>
      <div className={styles.tex2}>
        Join us and become part of a successful company where your contribution
        will be appreciated!
      </div>
      <Image src={baseImage} alt="baseImage" className={styles.baseImage} />
    </div>
  );
};

export default Block7;
