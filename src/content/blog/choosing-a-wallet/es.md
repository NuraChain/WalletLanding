---
title: Qué comprobar antes de confiar en una cartera
description: No es un ranking. Es una lista corta de preguntas cuyas respuestas son hechos, y que casi ninguna página de producto llega a enunciar.
date: 2026-09-21
tags: carteras, lista de control
---

Todas las carteras dicen ser seguras. Esa afirmación no es comprobable, así que no sirve. Estas son las preguntas que sí tienen respuesta.

## ¿Dónde vive la clave?

La primera pregunta y casi toda la respuesta. ¿La clave privada se deriva y se guarda en tu dispositivo, o la guarda un servidor, o una parte de ella? «No custodial» se usa con la suficiente ligereza como para que valga la pena buscar la frase que diga con claridad dónde está la clave y qué sale del dispositivo.

## ¿Puedes leer el código?

Un repositorio abierto no garantiza que alguien lo haya auditado. Lo que sí garantiza es que la afirmación sobre la clave puede comprobarla alguien distinto de quien la hace. Una cartera cerrada te pide aceptar esa misma afirmación por fe.

## ¿Qué protege el secreto almacenado?

Algo en el disco guarda tu frase. Busca los detalles: qué cifrado la protege y cómo se calcula el hash de la contraseña que la abre. Una función de memoria dura como Argon2id encarece adivinarla; un hash simple no. La vaguedad aquí es ya una respuesta.

## ¿Qué pasa si pierdes el dispositivo?

Averígualo antes de que importe. Una frase de recuperación estándar se restaura también en otras carteras, lo que significa que no quedas atado a esta aplicación. Un esquema propio de un solo fabricante puede ser más cómodo y conviene entenderlo del todo por adelantado.

## ¿Hace lo que necesitas sin extras?

Enviar y recibir, cambiar de red, conectarse a una dApp. Los productos añadidos —tarjetas, rendimiento, trading— son código extra cerca de tu clave y, a menudo, contrapartes extra.

Nura responde a esto igual en todos los idiomas: claves en el dispositivo, frase cifrada con AES-GCM, contraseña con hash Argon2id, licencia MIT, sin cuenta y sin servidor que guarde nada. No hace falta que lo creas: el repositorio está ahí.
