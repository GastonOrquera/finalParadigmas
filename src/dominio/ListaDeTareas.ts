// ------------------------------
// Clase ListaDeTareas (Paradigma OOP)
// ------------------------------
// Encapsula una colección de tareas y provee métodos básicos.
// No usa bucles explícitos, delega operaciones a funciones de orden superior.

import { Tarea } from "./Tarea.js";

export class ListaDeTareas {
    private tareas: Tarea[] = [];

    // Agregar una tarea a la lista
    agregar(tarea: Tarea): void {
        this.tareas.push(tarea);
    }

    // Eliminar una tarea por ID
    eliminar(id: string): void {
        this.tareas = this.tareas.filter(t => t.id !== id);
    }

    // Listar todas las tareas
    listar(): Tarea[] {
        return this.tareas;
    }
}