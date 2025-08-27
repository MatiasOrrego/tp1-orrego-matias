import { ICompetidor } from "../interface/ICompetidor";
import { IIdentificable } from "../interface/IIdentificable";
import { Jugador } from "./Jugador";

export class Equipo implements ICompetidor{
    public readonly id: string;
    public nombre: string;
    #jugadores: Jugador[];


}