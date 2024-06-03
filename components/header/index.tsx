"use client";
import { FC } from "react";

import figure1 from "@/public/assets/icons/header/figure1.png";
import figure2 from "@/public/assets/icons/header/figure2.png";
import figure3 from "@/public/assets/icons/header/figure3.png";
import figureBackground from "@/public/assets/icons/header/figure-background.png";
import figureBackgroundMobile from "@/public/assets/icons/header/figure-background-mobile.png";
import flowers from "@/public/assets/icons/header/flowers.svg";
import flowersMobile from "@/public/assets/icons/header/flower-mobile.svg";
import menu from "@/public/assets/icons/header/menu.svg";
import logo from "@/public/assets/icons/header/logo.png";

import styles from "./styles.module.scss";
import Image from "next/image";
import { useResizeWindow } from "@/hooks/useResizeWindow";

const Header: FC = () => {
  const { isMobile } = useResizeWindow();
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
        {isMobile ? (
          <Image src={figureBackgroundMobile} alt="figureBackgroundMobile" />
        ) : (
          <Image src={figureBackground} alt="figureBackground" />
        )}
      </div>

      {isMobile ? (
        <Image src={flowers} alt="flowers" className={styles.flowers} />
      ) : (
        <Image src={flowers} alt="flowers" className={styles.flowers} />
      )}

      <div className={styles.menu}>
        {isMobile ? (
          <>
            <button>
              <Image src={menu} alt="menu" className={styles.menuBurger} />
            </button>
            <Image src={logo} alt="logo" className={styles.logo} />
          </>
        ) : (
          <>
            <button> Feedback</button>
            <button>About</button>
            <button>Vacancies</button>
            <button>Benefits</button>
          </>
        )}
      </div>

      {isMobile && <div className={styles.welcome}>Welcome to Djosu.com</div>}

      <div className={styles.title}>
        <div className={styles.sp1}>start</div>
        <div className={styles.sp2}>career</div>
        <div className={styles.sp3}>now</div>
      </div>

      {isMobile && <div className={styles.menuMobile}></div>}
    </div>
  );
};
export default Header;
