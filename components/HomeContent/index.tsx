import styles from './HomeContent.module.scss'

export default function HomeContent() {
  return (
    <>
      <div className={styles['home-content']}>
        <h2 className={styles['title']}>Cuidamos bem do seu pokémon, para ele cuidar bem de você</h2>
      </div>
    </>
  );
}
