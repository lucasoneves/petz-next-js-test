import Image from "next/image";
import styles from "./MainLogo.module.scss";
import Link from "next/link";

type LogoTypes = {
  expanded?: boolean
}

export default function MainLogo({expanded}: LogoTypes) {
  return (
    <div className={`${expanded ? styles['logo'] : styles['logo-small']}`}>
      <Link href={"/"}>
        <Image
          src="/images/white-pokeball.svg"
          alt="Pokeball"
          width={37}
          height={34}
        />
        {expanded ? <h2>Centro Pokémon</h2> : ''}
      </Link>
    </div>
  );
}
