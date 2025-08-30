export class Resultado{
    public readonly golesLocal: number;
    public readonly golesVisitante: number;

    constructor( golesLocal: number, golesVisitante: number
    ){

        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
        
        if(!Number.isInteger(golesLocal) || golesLocal < 0){
            throw new Error("Los goles del equipo local deben ser un número entero no negativo.");
        }
        if(!Number.isInteger(golesVisitante) || golesVisitante < 0){
            throw new Error("Los goles del equipo visitante deben ser un número entero no negativo.");
        }
    }

    toString(): string {
        return `${this.golesLocal} - ${this.golesVisitante}`;
    }
}