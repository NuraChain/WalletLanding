---
title: Las cuentas inteligentes y lo que mueven de verdad
description: Una cuenta que es un contrato puede tener reglas: recuperación, límites, agrupación. Lo que no puede es eliminar la clave que hay debajo.
date: 2026-09-14
tags: cuentas inteligentes, claves
---

En Ethereum hay dos tipos de cuenta. La corriente es un par de claves: una dirección derivada de una clave privada, sin código y sin más regla que «una firma válida mueve los fondos». La otra es un contrato, y a un contrato se le puede decir qué cuenta como válido.

## Qué compran las reglas

Como una cuenta inteligente decide por sí misma cuándo aceptar una instrucción, puede ofrecer cosas que una clave simple no:

- **Recuperación**: designar guardianes que, en conjunto, puedan asignar una nueva clave de firma si se pierde la anterior. La cuenta sobrevive a la clave.
- **Límites**: un tope diario, un retraso en transferencias grandes, una lista de destinos permitidos.
- **Agrupación**: aprobar e intercambiar en una sola confirmación, lo que elimina toda una clase de estados a medias.
- **Comisiones pagadas por otro**, o en un token, ya que la cuenta puede aceptar una transacción patrocinada.

## Qué no cambia

La cuenta sigue ejecutando lo que sus firmantes autoricen. Si firmas una aprobación maliciosa desde una cuenta inteligente, se ejecuta; al contrato se le dijo que aceptara tu firma y lo hizo. Los guardianes y los límites reducen el daño de una clave perdida. No hacen nada contra una firma equivocada.

Y sigue habiendo una clave. Puede estar guardada en el elemento seguro de tu teléfono en lugar de derivarse de doce palabras, pero algo firma, y lo que firma es lo que hay que proteger.

## Dónde deja esto a una cartera simple

Una cuenta de par de claves no tiene coste de despliegue, ni contrato en el que confiar, ni una vía de actualización que controle otro, y se comporta igual en todas las redes. Eso son propiedades reales, no meramente la ausencia de funciones.

Nura es una cartera para ese tipo de cuenta: claves derivadas y guardadas en el dispositivo, transacciones firmadas allí, y la frase de recuperación cifrada con AES-GCM antes de guardarse. Simple en el sentido de tener menos sitios donde fallar.
