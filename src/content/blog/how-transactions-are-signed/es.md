---
title: Qué ocurre cuando firmas una transacción
description: Una firma demuestra que tu clave aprobó un mensaje, sin que la clave salga a ninguna parte.
date: 2026-06-09
tags: firma, transacciones
---

«Firmar» suena a formalidad al final de un formulario. Es, en realidad, todo el modelo de seguridad.

## Los pasos

1. **Se construye un mensaje.** Destinatario, importe, red, comisión y un nonce para que la misma transacción no pueda repetirse.
2. **Se aplica un hash.** El mensaje se reduce a una huella corta de longitud fija.
3. **La clave firma el hash.** La matemática de curva elíptica produce una firma que solo pudo salir de esa clave privada.
4. **La firma se difunde.** Los nodos la verifican contra tu dirección pública y, si es válida, incluyen la transacción en un bloque.

El paso tres es el interesante. Verificar una firma solo necesita la clave pública. Producirla necesita la clave privada, y la clave nunca tiene que salir del dispositivo para hacerlo. Lo que viaja a la red es el mensaje firmado, no el secreto que lo firmó.

## Por qué importa en la práctica

El límite es nítido. Una dApp puede preparar una transacción, un nodo puede retransmitirla, un explorador puede mostrarla, y ninguno toca nunca tu clave. El único momento que cuenta es el momento en que apruebas, en tu propio dispositivo.

También significa que una firma es exactamente tan fiable como tu lectura de lo que firmaste. La cadena no comprueba la intención. Comprueba matemáticas.

- Lee el destinatario, no solo el importe.
- Comprueba en qué red estás.
- Trata una aprobación de tokens como lo que es: un permiso que sobrevive a la transacción.

En Nura las transacciones se firman en el dispositivo y lo que va a la red es el resultado firmado. La clave privada se queda donde fue derivada.

Esa es la línea que traza la autocustodia, y firmar es el lugar donde realmente puedes verla.
