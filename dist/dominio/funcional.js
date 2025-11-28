// ------------------------------
// Funciones puras (Paradigma Funcional)
// ------------------------------
// Operan sobre listas de tareas sin mutarlas.
// Usan funciones de orden superior (map, filter, reduce, sort).
// Evitan bucles explícitos.
// Filtrar tareas pendientes
export const pendientes = (tareas) => tareas.filter(t => !t.completada);
// Filtrar tareas completadas
export const completadas = (tareas) => tareas.filter(t => t.completada);
// Filtrar por etiqueta
export const filtrarPorEtiqueta = (etiqueta, tareas) => tareas.filter(t => t.etiquetas?.includes(etiqueta));
// Ordenar por prioridad (alta → media → baja)
export const ordenarPorPrioridad = (tareas) => {
    const orden = { alta: 1, media: 2, baja: 3 };
    return [...tareas].sort((a, b) => orden[a.prioridad ?? "media"] - orden[b.prioridad ?? "media"]);
};
