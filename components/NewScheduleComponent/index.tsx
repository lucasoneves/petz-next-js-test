import { useEffect, useState } from "react";
import styles from "./NewSchedule.module.scss";
import Select from "../Select";
import ButtonConfirm from "../ButtonConfirm";
import { useRouter } from "next/navigation";
import FeedBackScheduleComponent from "../FeedBackScheduleComponent";

type RegionType = {
  pokemon?: {
    name: string;
    url: string;
  };
  name: string;
  url: string;
};

type PokemonTeam = {
  name: string;
};

export default function NewScheduleComponent() {
  const GENERATIONAL_RATE = 2.1;
  const [scheduleInfo, setScheduleInfo] = useState({});
  const [regionsData, setRegionsData] = useState<RegionType[]>([
    { name: "", url: "" },
  ]);
  const [regionSelected, setRegionSelected] = useState<RegionType[]>([
    { name: "", url: "" },
  ]);
  const [pokemons, setPokemons] = useState<RegionType[]>([]);
  const [pokemonField, setPokemonField] = useState([{ pokemonId: 1 }]);
  const [teamPokemon, setTeamPokemon] = useState<PokemonTeam[]>([{ name: "" }]);
  const [scheduleDates, setScheduleDates] = useState<RegionType[]>([]);
  const [formSubmitted, setFormSubmitted] = useState<Boolean>(false);
  const [scheduleSuccess, setScheduleSuccess] = useState<Boolean>(false);
  const [dateSelected, setDateSelected] = useState<string>("");
  const [hourSelected, setHourSelected] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    getRegions();
    getScheduleTimes();
  }, []);

  async function getRegions() {
    const response = await fetch("https://pokeapi.co/api/v2/region");
    const data = await response.json();
    const transformedData = data.results.map(
      (result: { name: string; url: string }) => ({
        name: result.name || "",
        url: result.url || "",
      })
    );
    setRegionsData(transformedData);
  }

  async function getScheduleTimes() {
    const result = await fetch("http://localhost:3000/api/scheduling/date");
    const data = await result.json();
    const transformedData = await data.map((item: string) => {
      const date = new Date(item).toLocaleDateString("pt-BR");
      return {
        name: date,
        url: "",
      };
    });
    setScheduleDates(transformedData);
  }

  async function getRegionSelected(region: string) {
    const response = await fetch(`https://pokeapi.co/api/v2/region/${region}`);
    const data = await response.json();
    setRegionSelected(data.locations);
  }

  function handleChangeRegion(event: React.ChangeEvent<HTMLInputElement>) {
    const target = (event.target as HTMLInputElement).value;
    getRegionSelected(target);
  }

  async function handleChangeRegionSelected(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setPokemons([]);
    const locationArea = await fetch(event.target.value);
    const data = await locationArea.json();

    const fetchPromises = data.areas.map(async (area: RegionType) => {
      const pokemonsEncounters = await fetch(area.url);
      return pokemonsEncounters.json();
    });

    const results = await Promise.all(fetchPromises);

    const uniqueNames = new Set<string>();

    results.forEach((result) => {
      result.pokemon_encounters.forEach((pokemon: { pokemon: RegionType }) => {
        const pokemonName = pokemon.pokemon.name;

        if (!uniqueNames.has(pokemonName)) {
          uniqueNames.add(pokemonName);

          const uniquePokemon: RegionType = {
            name: pokemonName || "",
            url: pokemon.pokemon.url || "",
          };

          setPokemons((prevState: RegionType[]) => [
            ...prevState,
            uniquePokemon,
          ]);
        }
      });
    });
  }

  function handleChangePokemonSelected(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const pokemon = event.target.value;
    console.log(teamPokemon.length, index + 1);
    setTeamPokemon((prevState) => {
      const updatedTeamPokemon = [...prevState];
      updatedTeamPokemon[index] = { name: pokemon };
      return updatedTeamPokemon;
    });
  }

  function handleAddNewPokemonField(e: Event) {
    e.preventDefault();
    if (pokemonField.length < 6) {
      setTeamPokemon((prevState) => {
        return [...prevState, { name: "" }];
      });
      setPokemonField((prevState) => {
        return [...prevState, { pokemonId: pokemonField.length + 1 }];
      });
    }
  }

  function hadleChangeDateSchedule(e: React.ChangeEvent<HTMLInputElement>) {
    setDateSelected(e.target.value);
  }

  function handleChangeHourSchedule(e: React.ChangeEvent<HTMLInputElement>) {
    setHourSelected(e.target.value);
  }

  function totalOfPokemons() {
    const addedPokemons = teamPokemon.filter((pokemon) => pokemon.name);
    return addedPokemons.length;
  }

  function subTotal() {
    return totalOfPokemons() * 70;
  }

  function totalPrice() {
    return subTotal() + GENERATIONAL_RATE;
  }

  function handleConfirmSchedule() {
    setFormSubmitted(true);
    setScheduleSuccess(true);
  }

  function handleNewSchedule() {
    setFormSubmitted(false);
  }

  return (
    <>
      {!formSubmitted ? (
        <div className={styles["new-schedule"]}>
          <h2 className={styles["title"]}>
            Preencha o formulário abaixo para agendar sua consulta
          </h2>
          <form action="" className={styles["form"]}>
            <div className={styles["personal-info"]}>
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
                <Select
                  placeholder="Selecione sua região"
                  id="region"
                  fieldName="region"
                  change={(e) => handleChangeRegion(e)}
                  data={regionsData}
                />
              </label>
              <label htmlFor="region">
                <span className={styles["field-label"]}>Cidade</span>
                <Select
                  placeholder={
                    regionSelected.length > 0
                      ? "Selecione sua cidade"
                      : "Nenhuma cidade encontrada"
                  }
                  id="region"
                  fieldName="region"
                  change={(e) => handleChangeRegionSelected(e)}
                  data={regionSelected}
                  city
                />
              </label>
            </div>
            <h2 className={styles["field-label"]}>Cadastre seu time</h2>
            <span className={styles["field-label--lighten"]}>
              Atendemos até 06 pokémons por vez
            </span>
            {pokemonField.map((pokemon, index) => {
              return (
                <>
                  <label
                    htmlFor="pokemon"
                    className={styles["field-add-pokemon"]}
                  >
                    <span className={styles["field-label"]}>
                      Pokémon {pokemon.pokemonId}
                    </span>
                    <Select
                      placeholder={
                        pokemons.length > 0
                          ? "Selecione um Pokémon"
                          : "Nenhum Pokémon encontrado"
                      }
                      id="pokemon"
                      fieldName="pokemon"
                      change={(e) => handleChangePokemonSelected(e, index)}
                      data={pokemons}
                    />
                  </label>
                </>
              );
            })}
            {pokemonField.length < 6 ? (
              <button
                className={styles["button-add-pokemon"]}
                onClick={(e) => handleAddNewPokemonField(e)}
              >
                Adicionar novo pokémon ao time...+
              </button>
            ) : (
              ""
            )}
            <div className={styles["date-time-info"]}>
              <label htmlFor="region">
                <span className={styles["field-label"]}>
                  Data para atendimento
                </span>
                <Select
                  placeholder={
                    regionSelected.length > 0
                      ? "Selecione uma data"
                      : "Nenhuma data disponível"
                  }
                  id="schedule-date"
                  fieldName="schedule-date"
                  change={(e) => hadleChangeDateSchedule(e)}
                  data={scheduleDates}
                />
              </label>
              <label htmlFor="city">
                <span className={styles["field-label"]}>
                  Horário de Atendimento
                </span>
                <input
                  className={styles["field"]}
                  type="time"
                  name=""
                  id=""
                  onChange={handleChangeHourSchedule}
                />
              </label>
            </div>
          </form>
          <div className={styles["overview-schedule"]}>
            <div className={styles["item"]}>
              Número de pokémons a serem atendidos:{" "}
              <span>{totalOfPokemons()}</span>
            </div>
            <div className={styles["item"]}>
              Atendimento unitário por pokémon: <span>01</span>
            </div>
            <div className={styles["item"]}>
              Subtotal: <span>R$ {subTotal()}</span>
            </div>
            <div className={styles["item"]}>
              Taxa geracional*:{" "}
              <span>R$ {GENERATIONAL_RATE.toFixed(2).replace(".", ",")}</span>
            </div>
            <span className={styles["warning-small"]}>
              *adicionamos uma taxa de 3%, multiplicado pelo número da geração
              mais alta do time, com limite de até 30%
            </span>
            <div className={styles["price"]}>
              <span className={styles["price--total"]}>
                Valor Total: R${" "}
                {subTotal() === 0
                  ? 0
                  : totalPrice().toFixed(2).replace(".", ",")}
              </span>
              <ButtonConfirm
                title="Concluir agendamento"
                click={handleConfirmSchedule}
              />
            </div>
          </div>
        </div>
      ) : (
        <FeedBackScheduleComponent
          handleNewSchedule={handleNewSchedule}
          date={dateSelected}
          hour={hourSelected}
          totalPokemons={totalOfPokemons()}
          success={scheduleSuccess && formSubmitted}
        />
      )}
    </>
  );
}
