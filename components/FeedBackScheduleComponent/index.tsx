import BoxAlertComponent from "../BoxAlertComponent";
import iconCheck from "../../public/check.svg";
import iconWarn from "../../public/warning.svg";
import Image from "next/image";
import { MouseEventHandler } from "react";

type ActionTypes = {
  handleNewSchedule: MouseEventHandler;
  success: Boolean;
  date: string;
  hour: string;
  totalPokemons: number;
};

export default function FeedBackScheduleComponent({
  handleNewSchedule,
  success,
  date,
  hour,
  totalPokemons,
}: ActionTypes) {
  {
    return success ? (
      <BoxAlertComponent
        title="Consulta agendada"
        message={`Seu agendamento para dia ${date}, às ${hour},
          para ${totalPokemons} pokémons foi realizado com sucesso!`}
        titleButton="Fazer novo agendamento"
        action={handleNewSchedule}
      >
        <Image src={iconCheck} width={42} height={42} alt="Check icon"></Image>
      </BoxAlertComponent>
    ) : (
      <BoxAlertComponent
        title="Houve um erro no agendamento"
        titleButton="Fazer novo agendamento"
        action={handleNewSchedule}
      >
        <Image src={iconWarn} width={42} height={42} alt="Check icon"></Image>
      </BoxAlertComponent>
    );
  }
}
