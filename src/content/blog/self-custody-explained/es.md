---
title: Qué significa realmente la autocustodia
description: La custodia se reduce a una pregunta — quién tiene la clave privada — y todo lo demás se deriva de la respuesta.
date: 2026-04-14
tags: autocustodia, claves
---

Toda cartera responde a una pregunta: quién tiene la clave privada. Todo lo que se discute después — exchanges, frases semilla, dispositivos de hardware — se deriva de esa única respuesta.

## Dos respuestas

Cuando un exchange o una cartera alojada tiene la clave, tu saldo es una fila en su base de datos. Es un derecho frente a ellos. Se comporta como un saldo bancario: pueden congelarlo, pueden perderlo y pueden ser obligados a entregarlo. A cambio obtienes un restablecimiento de contraseña y alguien a quien llamar.

Cuando la clave la tienes tú, el saldo está en la cadena y la clave está en tu dispositivo. Nadie puede moverlo sin esa clave. Tampoco hay nadie a quien llamar.

## Qué cambia de verdad

- **Recuperación.** No hay restablecimiento. Una frase de recuperación que no puedes presentar es una cartera que nadie puede abrir, tú incluido.
- **Aprobación.** Nada se mueve sin una firma hecha por tu clave. Un sitio puede pedirlo; solo tú puedes firmar.
- **Exposición.** Tu riesgo pasa de la seguridad de _ellos_ a tu propia copia de seguridad.

Eso último es el intercambio que la gente subestima. La autocustodia no elimina el riesgo: lo traslada, del balance de una empresa a un papel en tu cajón.

## Por qué aun así merece la pena

Porque los modos de fallo pasan a ser cosas que puedes ver y atender. La insolvencia de un exchange es invisible hasta que se detienen los retiros. Tu propia copia de seguridad es algo que puedes comprobar esta noche.

Nura es de autocustodia: la frase de recuperación se cifra con AES-GCM antes de guardarse, la contraseña que la desbloquea se procesa con Argon2id y las transacciones se firman en el dispositivo. Sin cuenta, sin custodia, sin servidor que guarde tu frase.

Lo que significa que el resto de estas notas trata de la parte que ahora es tuya: la clave, la frase y lo que ocurre cuando firmas.
