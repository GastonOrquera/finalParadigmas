// ------------------------------
// Predicados lógicos (Paradigma Lógico)
// ------------------------------
// Definen condiciones booleanas que describen reglas.
// Se usan en consultas sobre la lista de tareas.
// Una tarea es urgente si es de prioridad alta y no está completada
export const esUrgente = (t) => t.prioridad === "alta" && !t.completada;
// Una tarea vence pronto si su fecha de vencimiento está dentro de 3 días
export const vencePronto = (t) => t.venceEn !== undefined && t.venceEn.getTime() < Date.now() + 3 * 24 * 60 * 60 * 1000;
// Una tarea es difícil si su dificultad es alta
export const esDificil = (t) => t.dificultad === "alta";
// Una tarea vence hoy si su fecha de vencimiento coincide con la fecha actual
export const venceHoy = (t) => {
    if (!t.venceEn)
        return false;
    const hoy = new Date();
    return (t.venceEn.getDate() === hoy.getDate() &&
        t.venceEn.getMonth() === hoy.getMonth() &&
        t.venceEn.getFullYear() === hoy.getFullYear());
};
// Una tarea pertenece a una etiqueta específica
export const esDeEtiqueta = (etiqueta) => (t) => t.etiquetas?.includes(etiqueta) ?? false;
