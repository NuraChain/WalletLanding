---
title: Caliente, frío y lo que de verdad cambia
description: La diferencia no es lo segura que parece una cartera. Es si la clave ha estado alguna vez en una máquina que se conecta a internet.
date: 2026-08-18
tags: almacenamiento, claves
---

Las carteras se clasifican en calientes y frías como si las etiquetas describieran lo cuidadoso que es el software. Describen algo mucho más concreto: dónde está la clave privada cuando firma.

## La línea real

Una cartera **caliente** guarda la clave en un dispositivo conectado a internet: un teléfono, un portátil. Una cartera **fría** la guarda en uno que no se conecta, firma allí y devuelve únicamente la firma terminada.

Todo lo demás que se asocia a esas palabras se deriva de ese único hecho. Una cartera fría no es más difícil de robar por estar desconectada en espíritu; lo es porque el malware de tu portátil no puede leer una clave que nunca estuvo en tu portátil.

## Para qué sirve cada una

- **Las calientes son para usar.** Firmar es inmediato, las dApps se conectan, y el precio de esa comodidad es que la clave comparte máquina con todo lo demás que ejecutas.
- **Las frías son para guardar.** Cada firma cuesta un paso físico deliberado, que es justo lo que las hace adecuadas para cantidades que no vas a tocar esta semana.
- **La mayoría acaba con las dos.** Una cartera de gasto y otra de custodia, con frases distintas, es una división más útil que elegir bando.

## De qué no protege ninguna

Una cartera fría firma lo que apruebes. Si apruebas una transacción maliciosa, la clave offline la firma offline y los tokens se van igual. El almacenamiento en frío defiende la clave, no tu criterio sobre qué firmar.

Lo mismo vale para una cartera caliente que cifre lo que guarda. Nura cifra la frase de recuperación con AES-GCM y calcula el hash de la contraseña con Argon2id, lo que defiende la copia del disco. No puede defender una firma que decidiste dar.

Elige el almacenamiento según la amenaza. Y luego lee igualmente lo que firmas.
