---
title: El fallo de Coldcard, o cuando los dados están mal
description: Un error de firmware de 2021 dejó algunas semillas de Coldcard con apenas 40 bits de aleatoriedad. En 2026 se robaron unos 1816 BTC. Qué fuerza tiene de verdad una semilla.
date: 2026-10-05
tags: noticias, frase de recuperación
---

Entre el 30 de julio y el 4 de agosto de 2026, unos atacantes se llevaron aproximadamente 1816 BTC —unos 116 millones de dólares— de más de 5200 direcciones cuyas claves se habían generado en carteras de hardware Coldcard. TRM Labs, en su informe del 5 de agosto, situó la causa en la versión 4.0.1 del firmware, publicada en marzo de 2021: un error en la configuración de compilación hizo que algunos dispositivos pasaran de la fuente de números aleatorios del hardware a una débil por software. Semillas diseñadas para llevar 128 bits de aleatoriedad podían tener tan solo 40.

Nadie tocó ningún dispositivo. Nadie vio ninguna frase. Los atacantes adivinaron.

## ¿Qué falló en el firmware de Coldcard?

Una frase de recuperación es un número aleatorio grande escrito en palabras. Toda su fortaleza está en que ese número podría haber sido cualquiera de un conjunto astronómicamente grande. Si el generador que lo produce es débil, el conjunto es pequeño, y un conjunto pequeño se puede recorrer. Cuarenta bits son en torno a un billón de posibilidades, al alcance de hardware corriente. La primera oleada se llevó 594 BTC en 25 minutos.

## ¿Por qué no lo arregla actualizar el firmware?

Porque el fallo estaba en cómo se creaban las semillas, no en cómo funciona el dispositivo. Como dice TRM, actualizar corrige el problema para las carteras creadas después, pero no protege las carteras cuyas semillas se generaron con el firmware vulnerable. Una semilla así sigue siendo el mismo número débil, en cualquier dispositivo y en cualquier cartera donde la restaures. El único arreglo es una semilla nueva, y mover los fondos a ella.

## ¿Siguen siendo seguras las carteras de hardware?

[La diferencia que importa](/es/blog/hot-vs-cold-wallets/) —si una clave ha estado alguna vez en una máquina que se conecta a internet— sigue intacta. Este fue un fallo distinto: la clave se podía adivinar antes incluso de guardarse. Un dispositivo puede guardar un secreto a la perfección y aun así haber recibido uno malo.

## Qué sacar de esto

- Una semilla es tan fuerte como la aleatoriedad del momento en que se creó. Nada posterior la mejora.
- [La frase es la cartera](/es/blog/recovery-phrase-security/), defectos incluidos. Restaurar una frase débil en otro sitio restaura la debilidad.
- Una frase estándar es también lo que te permite irte. Pasar a una semilla nueva no requiere más que una cartera compatible.
- El fallo estuvo cinco años en un firmware publicado antes de que lo explotaran. Un código disponible para leerse no es lo mismo que un código que se ha leído.

Nura es una cartera de Ethereum, y esta nota no afirma nada sobre su fuente de números aleatorios. Compruébalo: para eso está un repositorio con licencia MIT. Lo que Nura sí declara es qué ocurre una vez que existe una frase: se cifra con AES-GCM antes de guardarse, y la contraseña que la desbloquea se procesa con el hash Argon2id.

## Fuentes

- [The largest hardware wallet exploit of 2026: inside the USD 116 million Coldcard hack — TRM Labs, 5 de agosto de 2026](https://www.trmlabs.com/resources/blog/the-largest-hardware-wallet-exploit-of-2026-inside-the-usd-116-million-coldcard-hack)
