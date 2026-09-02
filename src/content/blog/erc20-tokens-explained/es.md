---
title: Por qué tus tokens no están en tu cartera
description: Un saldo ERC-20 es una fila en un contrato. Lo que guarda tu cartera es la clave que puede cambiarla.
date: 2026-08-11
tags: ERC-20, tokens
---

Tu cartera muestra un saldo de tokens, así que parece que los tokens están dentro. No lo están, y nunca lo estuvieron.

## Dónde vive el saldo de un token

Un token ERC-20 es un contrato inteligente, y ese contrato lleva un libro de direcciones e importes. Tener 100 de un token significa que el contrato guarda una fila que dice que tu dirección tiene 100. Tu cartera lee esa fila y la muestra.

Lo que la cartera guarda realmente es la clave privada de esa dirección: la única clave que puede autorizar un cambio en la fila.

Por eso:

- **Un token puede aparecer sin que hagas nada.** Cualquiera puede escribir tu dirección en el libro de su propio contrato. Los tokens no solicitados no son una intrusión. Ignóralos.
- **Añadir un token es un cambio de visualización.** El saldo existía antes de que la aplicación lo listara, y ocultarlo no mueve nada.
- **Una dirección, muchas redes.** La misma dirección funciona en cada una, pero un saldo en una red no es un saldo en otra. El contrato pertenece a una sola red.

## Las aprobaciones son la parte a vigilar

Para que un contrato pueda mover tus tokens, le concedes una autorización. Ese permiso sigue vigente después de la transacción que lo creó, a menudo por un importe ilimitado, hasta que lo revocas. La mayoría de las pérdidas de tokens que no son pérdidas de la frase son pérdidas por aprobaciones.

Lee las aprobaciones con el mismo cuidado que las transferencias. Son lo único que firmas que sigue actuando después.

## Qué significa esto para la cartera

Nura envía y recibe monedas nativas y tokens ERC-20, y cambia de red. Lo que guarda es la clave; lo que guarda la cadena es el saldo. La pantalla es una vista del libro, no un recipiente.

Una vez claro eso, lo demás encaja, incluido por qué nada se mueve sin una firma de la clave que está en tu dispositivo.
