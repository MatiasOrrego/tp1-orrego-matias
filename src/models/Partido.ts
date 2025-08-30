import { IIdentificable } from "../interface/IIdentificable";
import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";
import { Resultado } from "./Resultado";

export class Partido implements IIdentificable{
    public readonly id: string;
    public readonly Local: Equipo;
    public readonly Visitante: Equipo;
    public readonly deporte: Deporte;
    public readonly resultado: Resultado;

    constructor(id?: string, Local: Equipo, Visitante: Equipo, deporte: Deporte, resultado: Resultado) {
        this.id = id;
        this.Local = Local;
        this.Visitante = Visitante;
        this.deporte = deporte;
        this.resultado = resultado;
    }
}