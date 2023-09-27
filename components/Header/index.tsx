"use client";

import { useEffect, useState } from "react";
import Container from "../Container";
import MainLogo from "../MainLogo";
import MainNavigation from "../MainNavigation";
import styles from "./Header.module.scss";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [expandedLogo, setExpandedLogo] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  useEffect(() => {

    if (pathname !== "/") {
      setExpandedLogo(false);
      setTextVisible(false);
    } else {
      setExpandedLogo(true)
      setTimeout(() => {
        setExpandedLogo(false);
        setTextVisible(false);
      }, 5000);
    }

  }, [pathname]);

  function handleMouseLeave() {
    setExpandedLogo(false);
    setTextVisible(false);
  }

  function handleMouseEnter() {
    setExpandedLogo(true);
  }

  function handleTransitionEnded() {
    if (expandedLogo) {
      setTextVisible(true)
      return;
    }
    setTextVisible(false);
  }

  return (
    <header>
      <Container>
        <div className={styles["header-wrapper"]}>
          <MainLogo
            transitionEnd={() => handleTransitionEnded()}
            expanded={expandedLogo}
            textVisible={textVisible}
            mouseLeave={() => handleMouseLeave()}
            mouseHover={() => handleMouseEnter()}
          />
          <MainNavigation />
        </div>
      </Container>
    </header>
  );
}
