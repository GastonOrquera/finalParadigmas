// ------------------------------
// Funciones puras (Paradigma Funcional)
// ------------------------------
// Operan sobre listas de tareas sin mutarlas.
// Usan funciones de orden superior (map, filter, reduce, sort).
// Evitan bucles explícitos.

import { Tarea } from "./Tarea.js";

// Filtrar tareas pendientes
export const pendientes = (tareas: Tarea[]): Tarea[] =>
    tareas.filter(t => !t.completada);

// Filtrar tareas completadas
export const completadas = (tareas: Tarea[]): Tarea[] =>
    tareas.filter(t => t.completada);

// Filtrar por etiqueta
export const filtrarPorEtiqueta = (etiqueta: string, tareas: Tarea[]): Tarea[] =>
    tareas.filter(t => t.etiquetas?.includes(etiqueta));

// Ordenar por prioridad (alta → media → baja)
export const ordenarPorPrioridad = (tareas: Tarea[]): Tarea[] => {
    const orden = { alta: 1, media: 2, baja: 3 };
    return [...tareas].sort((a, b) =>
        orden[a.prioridad ?? "media"] - orden[b.prioridad ?? "media"]
    );
};