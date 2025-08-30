import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";

export class Basquet extends Deporte{
    constructor(){
        super("Básquet", 5)
    }

    override validar(equipo: Equipo): boolean {
        if (equipo.cantidad < 5) {
            throw new Error(`El equipo ${equipo.nombre} no tiene suficientes jugadores. Mínimo 5 jugadores para comenzar.`);
        }
        if (equipo.cantidad > this.maxPorEquipo) {
            throw new Error(`El equipo ${equipo.nombre} tiene demasiados jugadores. Máximo ${this.maxPorEquipo} jugadores.`);
        }
        return true;
    }
}