import { FC } from "react";

import instagram from "@/public/assets/icons/block9/instagram.png";
import linkedIn from "@/public/assets/icons/block9/linkedIn.png";
import twitter from "@/public/assets/icons/block9/twitter.png";
import facebook from "@/public/assets/icons/block9/facebook.png";
import plant from "@/public/assets/icons/block9/strelitzia-plant.png";
import golden from "@/public/assets/icons/block9/golden.png";
import spiral from "@/public/assets/icons/block9/spiral.png";
import cone from "@/public/assets/icons/block9/cone.png";
import rock from "@/public/assets/icons/block9/rock.png";

import Image from "next/image";

import styles from "./styles.module.scss";
import baseImage from "@/public/assets/icons/block7/base-image.png";

const Block9: FC = () => {
  return (
    <div className={styles.containerBlock9}>
      <div className={styles.containerButtons}>
        <div className={styles.button}>
          <Image src={facebook} alt="Facebook" className={styles.icon} />
          <div className={styles.name}>Facebook</div>
        </div>
        <div className={styles.button}>
          <Image src={linkedIn} alt="LinkedIn" className={styles.icon} />
          <div className={styles.name}>LinkedIn</div>
        </div>
        <div className={styles.button}>
          <Image src={twitter} alt="Twitter" className={styles.icon} />
          <div className={styles.name}>Twitter</div>
        </div>
        <div className={styles.button}>
          <Image src={instagram} alt="Instagram" className={styles.icon} />
          <div className={styles.name}>Instagram</div>
        </div>
      </div>
      <div className={styles.text}>Find us on social media! </div>
      <Image src={plant} alt="plant" className={styles.plant} />
      <Image src={golden} alt="golden" className={styles.golden} />
      <Image src={spiral} alt="spiral" className={styles.spiral} />
      <Image src={cone} alt="cone" className={styles.cone} />
      {/*<Image src={rock} alt="rock" className={styles.rock} />*/}
    </div>
  );
};

export default Block9;
