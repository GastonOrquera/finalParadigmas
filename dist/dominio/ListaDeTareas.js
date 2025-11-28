// ------------------------------
// Clase ListaDeTareas (Paradigma OOP)
// ------------------------------
// Encapsula una colección de tareas y provee métodos básicos.
// No usa bucles explícitos, delega operaciones a funciones de orden superior.
export class ListaDeTareas {
    constructor() {
        this.tareas = [];
    }
    // Agregar una tarea a la lista
    agregar(tarea) {
        this.tareas.push(tarea);
    }
    // Eliminar una tarea por ID
    eliminar(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
    }
    // Listar todas las tareas
    listar() {
        return this.tareas;
    }
}
