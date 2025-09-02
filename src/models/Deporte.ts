import { Equipo } from "./Equipo.js";


export abstract class Deporte {
    public readonly nombre: string;
    public readonly maxPorEquipo: number;
constructor(nombre: string, maxPorEquipo: number){
    this.nombre = nombre;
    this.maxPorEquipo = maxPorEquipo;
}


abstract validar(equipo: Equipo): void;
}