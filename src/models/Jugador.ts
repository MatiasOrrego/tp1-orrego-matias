import { IIdentificable } from "../interface/IIdentificable";

export class Jugador implements IIdentificable {
    public readonly id: string;
    public nombre: string;
    public edad: number;
    public posicion?: string;

    constructor(id: string, nombre: string, edad: number, posicion?: string) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }

    public toString(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Edad: ${this.edad}, Posición: ${this.posicion ?? "N/A"}`;
    }
    
}