import styles from "./NewSchedule.module.scss";

export default function NewScheduleComponent() {
  return (
    <>
      <div className={styles["new-schedule"]}>
        <h2 className={styles["title"]}>
          Preencha o formulário abaixo para agendar sua consulta
        </h2>
        <form action="" className={styles['form']}>
          <div className={styles['personal-info']}>
            <label htmlFor="first-name">
              <span className={styles["field-label"]}>Nome</span>
              <input
                type="text"
                className={styles["field"]}
                placeholder="Digite seu nome"
                id="first-name"
                name="first-name"
              />
            </label>
            <label htmlFor="last-name">
              <span className={styles["field-label"]}>Sobrenome</span>
              <input
                type="text"
                className={styles["field"]}
                placeholder="Digite seu sobrenome"
                id="last-name"
                name="last-name"
              />
            </label>
            <label htmlFor="region">
              <span className={styles["field-label"]}>Região</span>
              <select
                className={styles["field"]}
                placeholder="Digite seu sobrenome"
                id="region"
                name="region"
              >
                <option value="1">Selecione sua região</option>
              </select>
            </label>
            <label htmlFor="city">
              <span className={styles["field-label"]}>Cidade</span>
              <select
                className={styles["field"]}
                placeholder="Cidade"
                id="city"
                name="city"
              >
                <option value="1">Selecione sua cidade</option>
              </select>
            </label>
          </div>
          <h2 className={styles['field-label']}>Cadastre seu time</h2>
          <span className={styles['field-label--lighten']}>Atendemos até 06 pokémons por vez</span>
          <label htmlFor="city">
            <span className={styles['field-label']}>Pokémon 01</span>
            <select className={styles["field"]} id="pokemon-1" name="pokemon-1">
              <option value="1"></option>
            </select>
          </label>
          <label htmlFor="city">
            <span className={styles['field-label']}>Pokémon 02</span>
            <select className={styles["field"]} id="pokemon-2" name="pokemon-2">
              <option value="1">1</option>
            </select>
          </label>
          <button>Adicionar novo pokémon ao time...</button>
          <label htmlFor="city">
            <span>Data para Atendimento</span>
            <input className={styles["field"]} type="date" />
          </label>
          <label htmlFor="city">
            <span>Horário de Atendimento</span>
            <input className={styles["field"]} type="time" />
          </label>
        </form>
        {/* <div className="overview-schedule">
        <span>Número de pokémons a serem atendidos: 01</span>
        <span>Atendimento unitário por pokémon: 01</span>
        <span>Subtotal: 01</span>
        <span>Taxa geracional*:  01</span>
        <span>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</span>
        <div className="total">
          <h3>Valor Total: R$ 72,10</h3>
          <button>concluir agendamento</button>
        </div>
      </div> */}
      </div>
    </>
  );
}
