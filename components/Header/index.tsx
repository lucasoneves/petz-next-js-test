import Container from "../Container";
import MainLogo from "../MainLogo";
import MainNavigation from "../MainNavigation";
import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Container>
        <div className={styles['header-wrapper']}>
          <MainLogo />
          <MainNavigation />
        </div>
      </Container>
    </header>
  );
}
