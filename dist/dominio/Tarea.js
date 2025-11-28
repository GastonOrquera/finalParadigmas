// ------------------------------
// Clase Tarea (Paradigma OOP)
// ------------------------------
// Representa una tarea con atributos y métodos.
// Encapsula el estado y comportamiento de una tarea individual.
import { v4 as generarUUID } from "uuid"; // Generador de IDs únicos
export class Tarea {
    constructor(params) {
        // Inicialización de atributos
        this.id = generarUUID(); // ID único con uuid
        this.titulo = params.titulo;
        this.creadaEn = new Date();
        this.venceEn = params.venceEn;
        this.dificultad = params.dificultad ?? "media";
        this.prioridad = params.prioridad ?? "media";
        this.completada = false;
        this.etiquetas = params.etiquetas ?? [];
    }
    // Método impuro: cambia el estado interno de la tarea
    completar() {
        this.completada = true;
    }
    // Método para mostrar la tarea como string
    toString() {
        const estado = this.completada ? "✔" : " ";
        return `[${estado}] ${this.titulo} (ID: ${this.id})`;
    }
}
