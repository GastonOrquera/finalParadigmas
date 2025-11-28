// ------------------------------
// Clase Tarea (Paradigma OOP)
// ------------------------------
// Representa una tarea con atributos y métodos.
// Encapsula el estado y comportamiento de una tarea individual.

import { v4 as generarUUID } from "uuid"; // Generador de IDs únicos

export class Tarea {
    id: string;
    titulo: string;
    creadaEn: Date;
    venceEn?: Date;
    dificultad?: "baja" | "media" | "alta";
    prioridad?: "baja" | "media" | "alta";
    completada: boolean;
    etiquetas?: string[];

    constructor(params: {
        titulo: string;
        venceEn?: Date;
        dificultad?: "baja" | "media" | "alta";
        prioridad?: "baja" | "media" | "alta";
        etiquetas?: string[];
    }) {
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
    completar(): void {
        this.completada = true;
    }

    // Método para mostrar la tarea como string
    toString(): string {
        const estado = this.completada ? "✔" : " ";
        return `[${estado}] ${this.titulo} (ID: ${this.id})`;
    }
}