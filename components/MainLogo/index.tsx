import Image from "next/image";
import styles from './MainLogo.module.scss'

export default function MainLogo() {
  return (
    <div className={styles.logo}>
      <Image
        src="/images/white-pokeball.svg"
        alt="Pokeball"
        width={37}
        height={34}
      />
      <h2>Centro Pokémon</h2>
    </div>
  );
}
