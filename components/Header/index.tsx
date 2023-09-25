import Container from "../Container";
import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Container>
        <div className={styles['header-wrapper']}>
          <div className={styles.logo}>
            <Image src="/images/white-pokeball.svg" alt="Pokeball" width={37} height={34} />
            <h2>Centro Pokémon</h2>
          </div>
          <nav>
            <ul>
              <li>
                <a href="">Quem somos</a>
              </li>
              <li>
                <a href="">Agendar Consulta</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
