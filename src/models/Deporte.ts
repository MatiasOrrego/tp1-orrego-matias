import { Equipo } from "./Equipo.js";


export abstract class Deporte {
    public readonly nombre: string;
    public readonly maxPorEquipo: number;
constructor(nombre: string, maxPorEquipo: number){
    this.nombre = nombre;
    this.maxPorEquipo = maxPorEquipo;
}


/**
* Valida si un equipo cumple las reglas mínimas del deporte.
* Debe lanzar Error con un mensaje claro si no cumple.
*/
abstract validar(equipo: Equipo): boolean;
}