---
title: Una stablecoin sigue siendo la promesa de alguien
description: Tener dólares en una cadena no es lo mismo que tener dólares. El token es un derecho, y ese derecho tiene un emisor.
date: 2026-09-07
tags: stablecoins, tokens
---

Las stablecoins son la parte de cripto que más gente usa de verdad, porque resuelven un problema evidente: mover valor sin verlo cambiar de precio por el camino. Conviene ser exactos sobre qué son.

## La mecánica

Una stablecoin respaldada por dinero fiat es un token ERC-20 como cualquier otro: una fila en el registro de un contrato que dice que tu dirección tiene una cantidad. Lo que mantiene su precio está completamente fuera de la cadena: una empresa guarda reservas y promete canjear un token por un dólar.

Así que el token sigue al dólar por la misma razón por la que un billete vale un dólar. Alguien responde por él, y todo el mundo cree que responderá.

## Qué implica eso

- **El emisor es una contraparte.** Tu clave sigue controlando el token, pero el valor que hay detrás depende de un balance que tú no controlas y que en general no puedes inspeccionar directamente.
- **Muchas se pueden congelar.** La mayoría de las grandes stablecoins respaldadas por fiat incluyen una lista de bloqueo que el emisor puede usar. Esa es una diferencia real con la moneda nativa de la red, que nadie puede congelar.
- **El mismo nombre son muchos tokens.** Una stablecoin existe por separado en cada red, en una dirección de contrato distinta. Enviar a la dirección correcta en la red equivocada es una de las formas más comunes de perder fondos.
- **Sigues necesitando la moneda nativa.** Las comisiones nunca se pagan en la stablecoin. Una cuenta que solo tiene stablecoins no puede moverlas.

## Las algorítmicas son otra cosa

Una stablecoin respaldada por reservas falla si falla el emisor. Una que sostiene su precio mediante un mecanismo —acuñando y quemando contra otro token— puede fallar por sí sola, y lo ha hecho, deprisa.

La autocustodia te da el control de la clave. No te da el control de aquello sobre lo que el token es un derecho. Saber cuál de las dos tienes es todo el asunto.
