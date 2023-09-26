import NewScheduleComponent from "../components/NewScheduleComponent";
import styles from "../styles/Pages.module.scss";
import PageBanner from "../components/PageBanner";
export default function NewSchedule() {
  return (
    <>
      <PageBanner pageTitle="Agendar Consulta" pageDescription="Recupere seus pokémons em 5 segundos" />
      <div className={styles["page-content"]}>
        <NewScheduleComponent />
      </div>
    </>
  );
}
