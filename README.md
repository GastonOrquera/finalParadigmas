# 📘 Trabajo Final – Paradigmas de Programación

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)
![Paradigmas](https://img.shields.io/badge/Paradigmas-OOP%20%7C%20FP%20%7C%20PL-orange)

## 🚀 Descripción
Este proyecto implementa un sistema de **gestión de tareas** aplicando los tres paradigmas de programación vistos en la materia:

- **Orientado a Objetos (OOP)** → Clases `Tarea` y `ListaDeTareas`.
- **Funcional (FP)** → Funciones puras para filtrar, ordenar y transformar colecciones.
- **Lógico (PL)** → Predicados booleanos que representan reglas y condiciones.

Además, se incluye un **menú interactivo en consola** para explorar las funcionalidades de manera práctica.

---

## 📂 Estructura del Proyecto
src/ └── dominio/ ├── Tarea.ts # Clase OOP con atributos y métodos
├── ListaDeTareas.ts # Clase OOP para colecciones 
├── funcional.ts     # Funciones puras (FP) 
├── logico.ts        # Predicados lógicos (PL) 
└── index.ts         # Demo automática con ejemplos 
└── menu.ts          # Menú interactivo en consola

---

## 🧩 Archivos principales

### `dominio/Tarea.ts`
- Clase `Tarea` con atributos (`titulo`, `prioridad`, `dificultad`, `venceEn`, `etiquetas`).
- Generación de ID único con `uuid`.
- Métodos:
  - `completar()` → marca la tarea como realizada.
  - `toString()` → representación textual de la tarea.

### `dominio/ListaDeTareas.ts`
- Clase `ListaDeTareas` que encapsula un arreglo de tareas.
- Métodos:
  - `agregar(tarea)`
  - `eliminar(id)`
  - `listar()`

### `dominio/funcional.ts`
- Funciones puras (FP):
  - `pendientes(tareas)`
  - `completadas(tareas)`
  - `filtrarPorEtiqueta(etiqueta, tareas)`
  - `ordenarPorPrioridad(tareas)`

### `dominio/logico.ts`
- Predicados lógicos:
  - `esUrgente(t)`
  - `vencePronto(t)`
  - `esDificil(t)`
  - `venceHoy(t)`
  - `esDeEtiqueta(etiqueta)(t)`

### `index.ts`
- Integra los tres paradigmas.
- Demuestra:
  - Pendientes vs completadas.
  - Ordenar por prioridad.
  - Urgentes, difíciles, vencen pronto, vencen hoy.
  - Filtrar por etiquetas.
  - Composición FP + Lógico.
  - Conteo por prioridad con `reduce`.

### `menu.ts`
- Menú interactivo en consola usando `readline`.
- Opciones:
  - Listar todas.
  - Pendientes.
  - Urgentes.
  - Vencen pronto.
  - Difíciles.
  - Vencen hoy.
  - Ordenar por prioridad.
  - Filtrar por etiquetas.

---

## ⭐ Bonus implementados
- `toString()` en `Tarea`.
- Ejemplos múltiples para cada predicado/filtro.
- Evitar bucles explícitos → uso de funciones de orden superior.
- Funciones puras vs impuras (70/30).
- Predicados adicionales (`esDificil`, `venceHoy`, `esDeEtiqueta`).
- Menú interactivo como capa de presentación.

