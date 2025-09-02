import { IIdentificable } from "../interface/IIdentificable";
import { Partido } from "./Partido";

export class Torneo implements IIdentificable{
 public readonly id: string;
 public nombre: string;
 #partido: Map<string, Partido> = new Map();

 constructor(params: { id?: string; nombre: string }) {
   const { id, nombre } = params;
   this.id = id ?? (globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2));
   this.nombre = nombre;
 }

 listarPartidos(): Partido[] {
   return Array.from(this.#partido.values());
 }

 buscarPartido(id:string): Partido | undefined {
   return this.#partido.get(id);
 }

 agregarPartido(partido: Partido): void {
   this.#partido.set(partido.id, partido);
 }
}