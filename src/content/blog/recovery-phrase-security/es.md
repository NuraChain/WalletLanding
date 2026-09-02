---
title: Tu frase de recuperación es la cartera
description: Doce palabras no son una contraseña. Son la cartera misma, y hay que tratarlas como tal.
date: 2026-05-12
tags: frase de recuperación, copia de seguridad
---

Una contraseña protege una cuenta que existe en otro sitio. Una frase de recuperación no protege nada: _es_ la cosa. Con esas palabras, cualquier aplicación de cartera en cualquier dispositivo puede reconstruir todas las claves que hayas usado en esa cartera.

## De dónde salen esas palabras

La frase es una forma compacta de escribir un número aleatorio muy grande. La cartera elige ese número, lo asigna a palabras de una lista fija y deriva de él tus claves privadas: las mismas claves, en el mismo orden, siempre. Por eso la frase restaura una cartera en lugar de limitarse a desbloquearla.

También significa que las palabras no son una pista ni un apodo. Son el secreto mismo, escrito en una forma que puedes copiar a mano sin errores.

## Lo que se deduce de ahí

- **Anótala fuera de línea.** Una captura de pantalla es un archivo, y los archivos se sincronizan.
- **Nunca la escribas en un sitio web.** Ningún soporte legítimo la pide, jamás.
- **Prueba la copia una vez.** Restáurala en una instalación nueva antes de que haya algo en juego.
- **Dos copias, dos lugares.** La pérdida habitual no es el robo: es una sola copia en un solo cajón.

## Lo que una aplicación puede y no puede hacer

En el dispositivo, Nura cifra la frase de recuperación con AES-GCM antes de almacenarla y procesa con Argon2id la contraseña que la desbloquea: una función deliberadamente lenta y exigente en memoria, para que adivinarla salga caro.

Lo que ninguna aplicación puede hacer es proteger una frase que ya has entregado, ni reproducir una que nunca anotaste. El cifrado en el dispositivo defiende la copia del dispositivo. La copia de tu puño y letra la defiende el sitio donde la guardas.

Trata esas palabras como tratarías la escritura de una propiedad. Se parecen mucho más a eso que a una contraseña.
