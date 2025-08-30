import { ICompetidor } from "../interface/ICompetidor";
import { IIdentificable } from "../interface/IIdentificable";
import { Jugador } from "./Jugador";

export class Equipo implements ICompetidor, IIdentificable{
    public readonly id: string;
    public nombre: string;
    #jugadores: Map<string, Jugador> = new Map();

    constructor(params: { id?: string; nombre: string; jugadores?: Jugador[] }) {
const { id, nombre, jugadores = [] } = params;
this.id = id ?? (globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2));
this.nombre = nombre;
jugadores.forEach((jugador) => this.agregarJugador(jugador));
}
 get cantidad(): number {
    return this.#jugadores.size;
}

agregarJugador(jugador: Jugador): void{
    if (this.#jugadores.has(jugador.id)) {
        throw new Error(`El jugador con id ${jugador.id} ya está en el equipo ${this.nombre}`);
    }
    this.#jugadores.set(jugador.id, jugador);
}

get listaIntegrantes(): string[] {
    return Array.from(this.#jugadores.values()).map(jugador => jugador.nombre);
}

hasJugador(jugador: Jugador): boolean {
    return this.#jugadores.has(jugador.id);
}

toString(): string {
    return `Equipo: ${this.nombre}, Jugadores: ${this.listaIntegrantes.join(", ")}`;
}

}