---
title: El permiso que sigue actuando
description: Una transferencia ocurre una vez. Una aprobación queda encendida, a menudo por una cantidad ilimitada, hasta que vuelvas a apagarla.
date: 2026-08-22
tags: aprobaciones, tokens
---

La mayoría de las pérdidas de tokens que no son pérdidas de la frase son pérdidas por aprobaciones. Vale la pena saber exactamente qué es una aprobación, porque es lo único que firmas que sigue funcionando después de que la transacción se confirme.

## Qué estás concediendo

Un contrato de token lleva un registro de saldos. También lleva un segundo registro: quién puede mover los tokens de quién. Cuando un intercambio te pide aprobar primero, está pidiendo una fila en ese segundo registro: permiso para que su contrato mueva tu token en tu nombre.

La transferencia viene después. La aprobación es la puerta; la transferencia es cruzarla.

## Por qué lo ilimitado es lo habitual

Muchas dApps piden el máximo posible en lugar de la cantidad que vas a operar. Te ahorra una segunda aprobación más adelante y sale más barato en comisiones con el tiempo. También significa que si ese contrato es alguna vez explotado —o era malicioso desde el principio— puede mover todo tu saldo de ese token, en cualquier momento futuro, sin tocar tu frase de recuperación.

## Qué hacer al respecto

- **Aprueba la cantidad, no el máximo**, donde la interfaz te deje elegir.
- **Revoca lo que ya no uses.** Un permiso a un protocolo que usaste una vez el año pasado es exposición pura sin ninguna ventaja.
- **Lee el nombre del token en la pantalla de aprobación.** Lo peligroso de un sitio de phishing no es la transferencia que te enseña, es la aprobación que hay debajo.
- **Recuerda que es por token, por contrato y por red.** Revocar en una red no hace nada en otra.

Una aprobación no es un ajuste dentro de tu cartera. Es un hecho registrado en la cadena, junto a tu saldo, y sobrevive a la aplicación desde la que la concediste.
