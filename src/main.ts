import readlineSync from "readline-sync";
import { Jugador } from "./models/Jugador";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Basquet } from "./models/Basquet";
import { Partido } from "./models/Partido";
import { Resultado } from "./models/Resultado";
import { Torneo } from "./models/Torneo";
import { Deporte } from "./models/Deporte";

console.log("\n===== TP Torneo Interactivo =====");

// 1. Crear jugadores
const jugadores: Jugador[] = [];
const numJugadores = Number(readlineSync.question("¿Cuántos jugadores quieres crear? "));
for (let i = 0; i < numJugadores; i++) {
	const nombre = readlineSync.question(`Nombre del jugador ${i + 1}: `);
	const edad = Number(readlineSync.question(`Edad de ${nombre}: `));
	const posicion = readlineSync.question(`Posición de ${nombre}: `);
	jugadores.push(new Jugador((i + 1).toString(), nombre, edad, posicion));
}

// 2. Crear equipos
const equipos: Equipo[] = [];
const numEquipos = Number(readlineSync.question("¿Cuántos equipos quieres crear? "));
const deportesPorEquipo: Deporte[] = [];
for (let i = 0; i < numEquipos; i++) {
	const nombreEquipo = readlineSync.question(`Nombre del equipo ${i + 1}: `);
	let tipoDeporte = readlineSync.question(`¿Deporte del equipo ${nombreEquipo} (futbol/basquet)?: `).toLowerCase();
	while (tipoDeporte !== "futbol" && tipoDeporte !== "basquet") {
		tipoDeporte = readlineSync.question("Por favor, ingresa 'futbol' o 'basquet': ").toLowerCase();
	}
	const equipo = new Equipo({ nombre: nombreEquipo });
	const jugadoresEquipo = Number(readlineSync.question(`¿Cuántos jugadores tendrá ${nombreEquipo}?: `));
	for (let j = 0; j < jugadoresEquipo; j++) {
		const idx = Number(readlineSync.question(`Elige el número de jugador para agregar a ${nombreEquipo} (1-${jugadores.length}): `)) - 1;
		if (jugadores[idx]) equipo.agregarJugador(jugadores[idx]);
	}
	equipos.push(equipo);
	deportesPorEquipo.push(tipoDeporte === "futbol" ? new Futbol() : new Basquet());
	console.log(`Equipo ${nombreEquipo} creado con ${equipo.cantidad} jugadores.`);
}

// 3. Validar equipos
console.log("\n-Validación de equipos-");
for (let i = 0; i < equipos.length; i++) {
	try {
		deportesPorEquipo[i].validar(equipos[i]);
		console.log(`El equipo ${equipos[i].nombre} es válido para ${deportesPorEquipo[i].nombre}`);
	} catch (error) {
		console.error(`Error en validación de ${equipos[i].nombre}:`, error instanceof Error ? error.message : error);
	}
}

// 4. Crear torneo
const nombreTorneo = readlineSync.question("Nombre del torneo: ");
const torneo = new Torneo({ nombre: nombreTorneo });

// 5. Crear partidos
const numPartidos = Number(readlineSync.question("¿Cuántos partidos quieres crear?: "));
for (let i = 0; i < numPartidos; i++) {
	const idxLocal = Number(readlineSync.question(`Elige el número de equipo local (1-${equipos.length}): `)) - 1;
	const idxVisitante = Number(readlineSync.question(`Elige el número de equipo visitante (1-${equipos.length}): `)) - 1;
	if (idxLocal === idxVisitante) {
		console.error("No se puede enfrentar el mismo equipo contra sí mismo.");
		continue;
	}
	const deporteLocal = deportesPorEquipo[idxLocal];
	const deporteVisitante = deportesPorEquipo[idxVisitante];
	if (deporteLocal.nombre !== deporteVisitante.nombre) {
		console.error("No se puede enfrentar equipos de deportes distintos.");
		continue;
	}
	const partido = new Partido({ Local: equipos[idxLocal], Visitante: equipos[idxVisitante], deporte: deporteLocal });
	torneo.agregarPartido(partido);
	// 6. Jugar partido
	const puntosLocal = Number(readlineSync.question(`Puntos/Goles de ${equipos[idxLocal].nombre}: `));
	const puntosVisitante = Number(readlineSync.question(`Puntos/Goles de ${equipos[idxVisitante].nombre}: `));
	partido.jugar(new Resultado(puntosLocal, puntosVisitante));
}

// 7. Mostrar resultados
console.log("\n-Resultados del torneo-");
for (const partido of torneo.listarPartidos()) {
	console.log(partido.toString());
}

// 8. Demostración de polimorfismo
console.log("\n-Demostración de polimorfismo-");
for (let i = 0; i < equipos.length; i++) {
	try {
		deportesPorEquipo[i].validar(equipos[i]);
		console.log(`El equipo ${equipos[i].nombre} es válido para ${deportesPorEquipo[i].nombre}`);
	} catch (error) {
		console.error(`Error en validación de ${equipos[i].nombre}:`, error instanceof Error ? error.message : error);
	}
}