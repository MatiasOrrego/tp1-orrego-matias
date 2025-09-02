import { IIdentificable } from "../interface/IIdentificable";
import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";
import { Resultado } from "./Resultado";

export class Partido implements IIdentificable{
    public readonly id: string;
    public readonly Local: Equipo;
    public readonly Visitante: Equipo;
    public readonly deporte: Deporte;
    #resultado?: Resultado;

    constructor(params: { id?: string; Local: Equipo; Visitante: Equipo; deporte: Deporte }) {
const { id, Local, Visitante, deporte } = params;
if (Local.id === Visitante.id) throw new Error("Un partido no puede tener el mismo local y visitante.");
this.id = id ?? (globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2));
this.Local = Local;
this.Visitante = Visitante;
this.deporte = deporte;
}

get Resultado(): Resultado | undefined {
    return this.#resultado;
}

jugar(Resultado: Resultado): void {
    this.deporte.validar(this.Local);
    this.deporte.validar(this.Visitante);
    this.#resultado = Resultado;
}

toString(): string{
    const base = `${this.Local.nombre} vs ${this.Visitante.nombre} - Deporte: ${this.deporte.nombre}`;
    return this.#resultado ? `${base} - Resultado: ${this.#resultado.toString()}` : base;
} 
}