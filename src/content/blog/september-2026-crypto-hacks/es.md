---
title: Los hackeos cripto de septiembre de 2026, por partes
description: Septiembre de 2026 fue el peor mes del año en robos de cripto, más de 766 millones de dólares. Dos incidentes suman más del 90 %, y en ninguno perdió un usuario su clave.
date: 2026-10-05
tags: noticias, autocustodia
---

Septiembre de 2026 fue el peor mes del año en robos de cripto. PeckShield contó 55 incidentes y 766,5 millones de dólares perdidos; CertiK contó 97 incidentes y 768,4 millones de dólares, según informó Cryptonomist el 1 de octubre. Dos firmas de seguimiento, que cuentan de forma distinta, quedaron a menos de dos millones de dólares una de la otra. El total acumulado de CertiK en lo que va de año era de 2680 millones de dólares en 656 incidentes.

Una cifra así de grande se lee como una razón para no fiarse de nada. Es más útil desmontada.

## ¿Cuáles fueron los mayores hackeos cripto de septiembre de 2026?

Dos sucesos suponen unos 708 millones de dólares del total:

- **Bitget, 24 de septiembre.** Unos 388 millones de dólares según el recuento de estas firmas, de las carteras calientes y templadas del exchange.
- **Liquid Network, 6 de septiembre.** Unos 320 millones de dólares de una cadena lateral de Bitcoin, devueltos después en su mayor parte.

Todo lo demás de ese mes —decenas de incidentes— sumó en conjunto unos 60 millones de dólares. Los tres mayores de ellos fueron de entre 5,9 millones y 7,8 millones de dólares cada uno.

## ¿Qué tienen en común los dos grandes?

Ninguno fue una persona que perdiera su clave. Uno fue el propio proceso de firma de un exchange [aprobando transferencias sobre las que se le habían mostrado datos falsos](/es/blog/bitget-hack-hot-wallet/). El otro fue un fallo en el software que una federación de empresas opera para [guardar bitcoin en nombre de sus usuarios](/es/blog/liquid-network-exploit/). En ambos, la gente había entregado la custodia a un sistema, y el sistema fue lo que falló.

Ese es el patrón la mayoría de los meses. La cifra de los titulares la dominan unos pocos grandes depósitos de activos ajenos, porque ahí es donde un solo éxito rinde más.

## ¿Eso hace más segura la autocustodia?

Hace que los riesgos sean distintos, y las estadísticas solo muestran bien una clase. Las pérdidas por [firmar algo que no debías](/es/blog/wallet-drainers/), o por una frase de recuperación mal guardada, son pequeñas una a una, rara vez se denuncian y no entran en un gráfico mensual. Son reales, y son las que controlas tú personalmente.

- El dinero que guarda un sistema está expuesto al peor día de ese sistema.
- El dinero que guarda una clave está expuesto a cómo se guarda la clave y a lo que firma.
- Elegir la autocustodia es elegir la segunda lista. Es más corta, y toda ella es tuya.

Nura está en la segunda lista. La frase de recuperación se cifra con AES-GCM y se queda en tu dispositivo; la contraseña que la desbloquea se procesa con el hash Argon2id; no hay cuenta ni servidor que guarde una copia. Nada de eso lee una solicitud por ti.

## Fuentes

- [September 2026 crypto hacks cost $766 million, the year's worst month — Cryptonomist, 1 de octubre de 2026](https://en.cryptonomist.ch/2026/10/01/crypto-hacks-september-2026/)
