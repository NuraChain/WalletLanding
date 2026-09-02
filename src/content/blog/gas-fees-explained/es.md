---
title: El gas, en términos simples
description: Por qué una transferencia cuesta lo que cuesta y qué pagas realmente cuando pagas una comisión.
date: 2026-07-07
tags: gas, comisiones
---

Cada transacción pide a miles de ordenadores que hagan el mismo trabajo y se pongan de acuerdo en el resultado. El gas es la forma de medir y pagar ese trabajo.

## Tres números

- **Gas consumido**: cuánto trabajo cuesta la transacción. Una transferencia simple de la moneda nativa está fijada en 21 000 unidades. Transferir un token cuesta más; un swap, más todavía.
- **Precio del gas**: lo que pagas por unidad, en gwei, la milmillonésima parte de la moneda nativa. Es la parte que se mueve con la demanda.
- **Límite de gas**: el techo que fijas. Si se supera, la transacción falla y el trabajo ya hecho se paga igualmente.

La comisión es el gas consumido multiplicado por el precio del gas. El primer número es una propiedad de lo que haces. El segundo, de cuándo lo haces.

## Por qué se mueve el precio

El espacio de bloque es finito y se subasta continuamente. Cuando muchos quieren entrar a la vez, el precio de ser incluido sube; cuando la cola se vacía, baja. Nada cambió en tu transacción: cambió la cola.

## Consecuencias prácticas

- Las transferencias simples son baratas y predecibles. Las llamadas a contratos no son ni una cosa ni la otra.
- Una transacción fallida también cuesta gas. La red hizo el trabajo antes de descubrir el fallo.
- Esperar es una estrategia real. La misma transferencia a una hora tranquila puede costar una fracción.
- Las comisiones se pagan en la moneda nativa de la red, nunca en el token que mueves.

Este último punto pilla a la gente constantemente: una cuenta que solo tiene tokens no puede moverlos, porque no puede pagar el trabajo. Guarda algo de moneda nativa en cualquier cuenta que pienses usar. Es el combustible, y sin él no se mueve nada.
