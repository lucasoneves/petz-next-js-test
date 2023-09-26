import Image from "next/image";
import styles from "./MainLogo.module.scss";
import Link from "next/link";
import { MouseEventHandler, TransitionEventHandler } from "react";

type LogoTypes = {
  expanded?: boolean;
  textVisible?: boolean;
  mouseHover?: MouseEventHandler;
  mouseLeave?: MouseEventHandler;
  transitionEnd?: TransitionEventHandler;
};

export default function MainLogo({
  expanded,
  textVisible,
  mouseHover,
  mouseLeave,
  transitionEnd,
}: LogoTypes) {
  return (
    <div
      className={`${styles["logo"]} ${!expanded ? styles["logo--small"] : ""}`}
    >
      <Link
        href={"/"}
        onTransitionEnd={transitionEnd}
        onMouseLeave={mouseLeave}
        onMouseEnter={mouseHover}
      >
        <Image
          src="/images/white-pokeball.svg"
          alt="Pokeball"
          width={37}
          height={34}
        />
        {textVisible ? <h2>Centro Pokémon</h2> : ""}
      </Link>
    </div>
  );
}
