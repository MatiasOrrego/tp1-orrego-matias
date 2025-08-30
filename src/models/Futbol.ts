import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";

export class Futbol extends Deporte{
    constructor() {
        super("Fútbol", 11)
    }

    override validar(equipo: Equipo): boolean {
        if (equipo.cantidad < 11) {
            throw new Error(`El equipo ${equipo.nombre} no tiene suficientes jugadores. Mínimo 11 jugadores para comenzar.`);
        }
        if (equipo.cantidad > this.maxPorEquipo) {
            throw new Error(`El equipo ${equipo.nombre} tiene demasiados jugadores. Máximo ${this.maxPorEquipo} jugadores.`);
        }
        return true;
    }
}