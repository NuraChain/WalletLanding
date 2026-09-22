---
title: Para qué sirve realmente la tolerancia al deslizamiento
description: El precio que obtienes se decide cuando tu transacción entra en un bloque, no cuando pulsas el botón. El deslizamiento es el margen que aceptas.
date: 2026-09-03
tags: intercambios, deslizamiento
---

La cotización de un intercambio es una predicción. Entre el momento en que tu cartera la muestra y el momento en que la transacción se incluye en un bloque, otras personas operan contra el mismo pool y el precio se mueve. La tolerancia al deslizamiento es tu forma de decir cuánto puede moverse antes de que el intercambio deba fallar en lugar de ejecutarse.

## Por qué existe ese margen

Un intercambio en cadena opera contra un pool de dos tokens. La tasa sale de la proporción entre ambos, así que cada operación —incluida la de los demás— la desplaza. Tu transacción está en la cola mientras eso ocurre.

Pon la tolerancia a cero y casi nada se confirma. Ponla demasiado alta y habrás aceptado de antemano un mal precio.

## El coste de ponerla alta

Una tolerancia amplia es una invitación. Cualquiera que vigile la cola puede colocar una operación por delante de la tuya para empujar el precio hasta el límite de lo que dijiste que aceptarías, dejar que tu intercambio se ejecute ahí y deshacer la posición. Obtienes el peor precio que autorizaste, y parece un movimiento normal del mercado.

Por eso un 1 % en un par profundo y líquido y un 1 % en uno estrecho no son la misma decisión.

## Leer una pantalla de intercambio

- **Tasa**: la predicción.
- **Mínimo recibido**: el único número que es una promesa. Es la tasa después de tu tolerancia. Juzga la operación por este.
- **Impacto en el precio**: cuánto desplaza el pool tu propia operación. Un impacto grande significa que el pool es demasiado estrecho para el tamaño que operas, y eso no lo arregla ninguna tolerancia.
- **Comisión**: se paga en la moneda nativa de la red, y se paga tanto si el intercambio funciona como si revierte.

Pon la tolerancia en el número más bajo que permita ejecutar la operación, y mira el mínimo recibido antes de firmar. Esa cifra es lo que realmente estás aceptando.
