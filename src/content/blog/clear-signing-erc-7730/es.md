---
title: La firma clara (ERC-7730) llega a Trezor
description: Trezor activó en septiembre de 2026 la firma clara ERC-7730, que muestra lo que hace una transacción en lugar de datos en bruto. Qué cubre y dónde se detiene.
date: 2026-10-05
tags: noticias, firma
---

El 9 de septiembre de 2026 Trezor activó la firma clara en sus dispositivos Safe 3, Safe 5, Safe 7 y Model T, según informó Cryptonomist. En lugar de una pantalla de hexadecimal, el dispositivo muestra lo que hace una transacción: la acción, los tokens y los importes, y adónde van. Sigue ERC-7730, un estándar desarrollado primero en Ledger, formalizado en 2024 y hoy a cargo de la Ethereum Foundation.

El mayor robo de 2026 hasta la fecha no implicó una clave robada. Implicó una firma correcta sobre unos datos acerca de los cuales se había engañado al firmante. Este es el estándar que apunta a ese hueco.

## ¿Qué es la firma a ciegas?

Firmar datos que no puedes interpretar. Una llamada a un contrato es una cadena de bytes: un selector de función y sus argumentos. Una cartera que no sabe decodificarla muestra los bytes, o un hash de ellos, y pide la aprobación. Estás aprobando algo, y no puedes saber qué. [Así funciona un drainer](/es/blog/wallet-drainers/): la solicitud es real, e ilegible.

## ¿Cómo funciona la firma clara?

Quienes escriben un contrato publican una descripción de sus funciones en un registro compartido: este selector significa «intercambiar», este argumento es el importe, este otro el destinatario. Una cartera compatible con el estándar busca la descripción y presenta la llamada como una frase. La firma no cambia. [Lo que se firma](/es/blog/how-transactions-are-signed/) son los mismos bytes; lo que ves es, por fin, lo que significan.

## ¿Cuáles son los límites de la firma clara?

- **Cobertura.** Un contrato sin descripción publicada vuelve a un aviso de firma a ciegas. En el lanzamiento de Trezor los protocolos cubiertos eran 1inch, Aave, Lido, Tether, LiFi y Hyperliquid: un comienzo, no la cadena entera.
- **La descripción es una afirmación.** Es tan honesta como el registro que la aloja, y dice cómo se llama una función, no todo lo que el código del contrato hace después.
- **Una aprobación legible sigue siendo una aprobación.** «Permitir que este contrato gaste USDT sin límite», en palabras llanas, es [el mismo permiso](/es/blog/token-approvals/) que era en hexadecimal.
- **Solo ayuda si lo lees.**

Nura firma en tu dispositivo, como toda cartera con autocustodia, y muestre lo que muestre una cartera la regla es la misma: si no sabes decir qué hace una solicitud, no la apruebes. Su código tiene licencia MIT, así que la pantalla que construye es algo que puedes leer en lugar de aceptar por fe.

La firma clara no hace segura una transacción. La hace legible, y leerla es la parte que siempre te tocó a ti.

## Fuentes

- [Trezor ERC-7730 signing enhances hardware wallet security — Cryptonomist, 9 de septiembre de 2026](https://en.cryptonomist.ch/2026/09/09/trezor-erc-7730-signing/)
