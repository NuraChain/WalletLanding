---
title: En realidad nada cruza un puente
description: Los tokens no viajan entre redes. Un lado bloquea algo, el otro emite algo, y a los dos los sostiene la confianza.
date: 2026-09-10
tags: puentes, redes
---

La palabra puente hace pensar que tus tokens caminan de una cadena a otra. No pueden. Una red solo conoce su propio estado, y ningún contrato de una cadena puede leer ni escribir el registro de otra.

## Qué ocurre en realidad

Envías tokens a un contrato de la primera red, que los bloquea o los quema. Un sistema que vigila esa red lo comunica a la segunda, donde un segundo contrato libera o acuña una cantidad equivalente a tu dirección allí.

Dos sucesos separados en dos registros separados, unidos por aquello que esté vigilando. La naturaleza de ese vigilante es todo el modelo de seguridad.

## Por eso las pérdidas ocurren en los puentes

Algunos de los mayores robos de cripto han sido robos a puentes, y no porque fallara la criptografía. Un puente mantiene un gran depósito de activos bloqueados en un lado y puede emitir activos en el otro, así que quien controle la comunicación controla la emisión. Comprometes a los firmantes, o encuentras un fallo en la verificación, y acuñas contra nada.

Antes de usar uno es legítimo preguntar quién da fe de la transferencia: un comité de firmantes, un conjunto de validadores, o una prueba que la cadena de destino verifica por sí misma.

## Notas prácticas

- **El token que recibes es un token distinto.** Un activo puenteado es su propio contrato en la red de destino, y su valor depende de que el puente siga solvente.
- **Comprueba la red de destino antes de firmar**, no después. Una transferencia a la dirección correcta en la red equivocada rara vez se puede deshacer.
- **Necesitas la moneda nativa en ambos lados.** Llegar con tokens y sin gas es quedarse atascado.
- **Primero las rutas oficiales.** Casi todo el phishing de puentes es una interfaz falsa, no un puente roto.

Cambiar de red en una cartera es gratis e instantáneo. Mover valor entre ellas no es ninguna de las dos cosas.
