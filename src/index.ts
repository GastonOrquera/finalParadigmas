// ------------------------------
// Integración total de los tres paradigmas + ejemplos completos
// ------------------------------
// OOP: usamos clases Tarea y ListaDeTareas.
// FP: usamos funciones puras para filtrar, ordenar y contar.
// Lógico: usamos predicados para consultas específicas.
// Impuro: console.log y completar() para mostrar resultados y cambiar estado.
// Además: ejemplos de composición FP + Lógico y conteo por prioridad.

// Dominio (OOP)
import { Tarea } from "./dominio/Tarea.js";
import { ListaDeTareas } from "./dominio/ListaDeTareas.js";

// Funcional (FP)
import {
    pendientes,
    completadas,
    filtrarPorEtiqueta,
    ordenarPorPrioridad,
} from "./dominio/funcional.js";

// Lógico (predicados)
import {
    esUrgente,
    vencePronto,
    esDificil,
    venceHoy,
    esDeEtiqueta,
} from "./dominio/logico.js";

// Crear lista de tareas (OOP)
const lista = new ListaDeTareas();

// Agregar tareas de ejemplo (variadas en prioridad, dificultad, etiquetas y vencimiento)
lista.agregar(new Tarea({ titulo: "Estudiar FP", prioridad: "alta", dificultad: "media", etiquetas: ["uni"], venceEn: new Date("2025-12-01") }));
lista.agregar(new Tarea({ titulo: "Comprar café", prioridad: "media", dificultad: "baja", etiquetas: ["hogar"], venceEn: new Date() })); // hoy
lista.agregar(new Tarea({ titulo: "Hacer ejercicio", prioridad: "media", dificultad: "alta", etiquetas: ["salud"], venceEn: new Date("2025-12-05") }));
lista.agregar(new Tarea({ titulo: "Preparar presentación", prioridad: "alta", dificultad: "alta", etiquetas: ["trabajo"], venceEn: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) })); // en 2 días
lista.agregar(new Tarea({ titulo: "Leer libro de lógica", prioridad: "media", dificultad: "media", etiquetas: ["uni"], venceEn: new Date("2025-12-02") }));
lista.agregar(new Tarea({ titulo: "Pagar servicios", prioridad: "alta", dificultad: "baja", etiquetas: ["hogar"], venceEn: new Date() })); // hoy

// Marcar algunas tareas como completadas (uso de método impuro completar())
lista.listar()[1].completar(); // "Comprar café"
lista.listar()[3].completar(); // "Preparar presentación"

// ------------------------------
// DEMO AUTOMÁTICA COMPLETA
// ------------------------------

console.log("=== TODAS LAS TAREAS ===");
lista.listar().forEach(t => console.log(t.toString()));

// FP: pendientes
console.log("\n=== PENDIENTES ===");
pendientes(lista.listar()).forEach(t => console.log(t.toString()));

// FP: completadas
console.log("\n=== COMPLETADAS ===");
completadas(lista.listar()).forEach(t => console.log(t.toString()));

// FP: ordenar por prioridad
console.log("\n=== ORDENADAS POR PRIORIDAD (alta -> media -> baja) ===");
ordenarPorPrioridad(lista.listar()).forEach(t => console.log(t.toString()));

// Lógico: urgentes (alta y no completada)
console.log("\n=== URGENTES (prioridad alta y pendientes) ===");
lista.listar().filter(esUrgente).forEach(t => console.log(t.toString()));

// Lógico: vencen pronto (dentro de 3 días)
console.log("\n=== QUE VENCEN PRONTO (<= 3 días) ===");
lista.listar().filter(vencePronto).forEach(t => console.log(t.toString()));

// Lógico: difíciles (dificultad alta)
console.log("\n=== DIFÍCILES (dificultad alta) ===");
lista.listar().filter(esDificil).forEach(t => console.log(t.toString()));

// Lógico: vencen hoy
console.log("\n=== QUE VENCEN HOY ===");
lista.listar().filter(venceHoy).forEach(t => console.log(t.toString()));

// Lógico: por etiqueta (currificada)
console.log("\n=== ETIQUETA 'hogar' ===");
lista.listar().filter(esDeEtiqueta("hogar")).forEach(t => console.log(t.toString()));

console.log("\n=== ETIQUETA 'uni' ===");
lista.listar().filter(esDeEtiqueta("uni")).forEach(t => console.log(t.toString()));

// FP: filtrar por etiqueta usando función pura
console.log("\n=== FILTRAR POR ETIQUETA (función pura) 'trabajo' ===");
filtrarPorEtiqueta("trabajo", lista.listar()).forEach(t => console.log(t.toString()));

// ------------------------------
// COMPOSICIÓN FP + LÓGICO
// ------------------------------
// Ejemplos de combinar funciones puras con predicados lógicos,
// sin bucles explícitos.

console.log("\n=== PENDIENTES URGENTES (pendientes + esUrgente) ===");
pendientes(lista.listar())
    .filter(esUrgente)
    .forEach(t => console.log(t.toString()));

console.log("\n=== PENDIENTES QUE VENCEN PRONTO (pendientes + vencePronto) ===");
pendientes(lista.listar())
    .filter(vencePronto)
    .forEach(t => console.log(t.toString()));

console.log("\n=== DIFÍCILES DE 'trabajo' (esDificil + esDeEtiqueta('trabajo')) ===");
lista.listar()
    .filter(t => esDificil(t) && esDeEtiqueta("trabajo")(t))
    .forEach(t => console.log(t.toString()));

console.log("\n=== PENDIENTES ORDENADAS POR PRIORIDAD (pendientes + ordenarPorPrioridad) ===");
ordenarPorPrioridad(pendientes(lista.listar()))
    .forEach(t => console.log(t.toString()));

// ------------------------------
// EXTRA (FP): conteo por prioridad con reduce
// ------------------------------
console.log("\n=== CONTEO POR PRIORIDAD (reduce) ===");
const conteoPorPrioridad = lista.listar().reduce((acc, t) => {
    const p = t.prioridad ?? "media";
    acc[p] = (acc[p] ?? 0) + 1;
    return acc;
}, {} as Record<string, number>);
console.log(conteoPorPrioridad);

// ------------------------------
// FIN DE DEMO AUTOMÁTICA
// ------------------------------
// (El menú interactivo se ejecuta por separado en menu.ts.
// Si querés integrarlo, importá mostrarMenu(lista) y llamalo al final.)