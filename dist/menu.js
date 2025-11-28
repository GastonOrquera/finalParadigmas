// ------------------------------
// Menú interactivo en consola
// ------------------------------
// Este archivo no es parte del dominio,
// es una capa de presentación para probar las funciones.
// Usa readline de Node.js para interacción básica.
import readline from "readline";
import { pendientes, ordenarPorPrioridad } from "./dominio/funcional.js";
import { esUrgente, vencePronto, esDificil, venceHoy, esDeEtiqueta } from "./dominio/logico.js";
// Exportamos la función para poder usarla en index.ts
export function mostrarMenu(lista) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    function menu() {
        console.log("\n=== MENÚ DE TAREAS ===");
        console.log("1. Listar todas");
        console.log("2. Ver pendientes");
        console.log("3. Ver urgentes");
        console.log("4. Ver que vencen pronto");
        console.log("5. Ver difíciles");
        console.log("6. Ver que vencen hoy");
        console.log("7. Ordenar por prioridad");
        console.log("8. Filtrar por etiqueta 'hogar'");
        console.log("9. Filtrar por etiqueta 'uni'");
        console.log("0. Salir");
        rl.question("Elige una opción: ", manejarOpcion);
    }
    function manejarOpcion(opcion) {
        switch (opcion) {
            case "1":
                lista.listar().forEach(t => console.log(t.toString()));
                break;
            case "2":
                pendientes(lista.listar()).forEach(t => console.log(t.toString()));
                break;
            case "3":
                lista.listar().filter(esUrgente).forEach(t => console.log(t.toString()));
                break;
            case "4":
                lista.listar().filter(vencePronto).forEach(t => console.log(t.toString()));
                break;
            case "5":
                lista.listar().filter(esDificil).forEach(t => console.log(t.toString()));
                break;
            case "6":
                lista.listar().filter(venceHoy).forEach(t => console.log(t.toString()));
                break;
            case "7":
                ordenarPorPrioridad(lista.listar()).forEach(t => console.log(t.toString()));
                break;
            case "8":
                lista.listar().filter(esDeEtiqueta("hogar")).forEach(t => console.log(t.toString()));
                break;
            case "9":
                lista.listar().filter(esDeEtiqueta("uni")).forEach(t => console.log(t.toString()));
                break;
            case "0":
                console.log("¡Hasta luego!");
                rl.close();
                return;
            default:
                console.log("Opción inválida.");
        }
        menu();
    }
    menu();
}
