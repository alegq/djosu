import { FC } from "react";

import headerBackground from "@/assets/icons/header.png";
import line from "@/assets/icons/header/line.svg";
import figure1 from "@/assets/icons/header/figure1.png";
import headerBackgroundMobile from "@/assets/icons/header/small-background.png";
import Menu from "@/components/header/components/menu";
import { useResizeWindow } from "@/hooks/useResizeWindow.ts";

import { DesktopFrameSvg } from "./components/frames/desktopFrame";
import { MobileFrameSvg } from "./components/frames/mobileFrame";

import styles from "./styles.module.scss";

interface IHeaderProps {
  setSelectedRef: (id: number) => void;
}

const Header: FC<IHeaderProps> = ({ setSelectedRef }) => {
  const { isMobile, isMediumMobile } = useResizeWindow();
  return (
    <div className={styles.wrapper}>
      <img src={figure1} alt="figure1" />
      <h2>dsfsd</h2>
    </div>
  );
};
export default Header;
