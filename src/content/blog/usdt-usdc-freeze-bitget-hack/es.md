---
title: Circle y Tether congelaron 318 000 $. El resto se movió
description: Tras el hackeo de Bitget, Circle y Tether congelaron unos 318 000 dólares en stablecoins. Más de 63 000 ETH quedaron fuera de alcance. Qué es congelar y quién puede hacerlo.
date: 2026-10-05
tags: noticias, stablecoins
---

La mañana siguiente al hackeo de Bitget, Circle incluyó una de las direcciones del ladrón en la lista de bloqueo del contrato de USDC, a las 05:00 UTC del 25 de septiembre de 2026. Tether hizo lo mismo unas siete horas después. Entre los dos congelaron 99 990 USDC y 218 023 USDT —aproximadamente 318 000 dólares— en una sola cartera, según informó Decrypt ese día. En otras direcciones vinculadas al mismo atacante había más de 63 000 ETH que nadie podía congelar de ningún modo.

Conviene entender las dos mitades. Son el mismo hecho visto desde dos lados.

## ¿Cómo se puede congelar una stablecoin?

USDC y USDT son contratos, y cada contrato tiene un propietario. Entre las funciones que el propietario puede llamar hay una que marca una dirección como bloqueada. A partir de ahí los tokens de esa dirección siguen apareciendo como saldo, y todo intento de moverlos falla. No hay ningún tribunal entre la decisión y su efecto. El emisor llama a una función.

[Una stablecoin es la promesa de alguien](/es/blog/stablecoins-explained/), y esta es la otra cláusula de la promesa. La parte que se compromete a canjear tu token también puede impedir que se mueva.

## ¿Por qué escapó la mayor parte de los fondos robados?

Porque el atacante sabía todo esto. Decrypt describe una carrera por convertir activos congelables en ETH antes de que intervinieran los emisores. Un emisor puede congelar su propio token. No puede congelar la moneda nativa de Ethereum, porque no hay propietario a quien pedírselo. Lo que quedó por congelar fue lo que aún no se había convertido.

## ¿Pueden congelar mi propio USDT o USDC?

Sí: en una cuenta de un exchange, o en una cartera que solo tú controlas. La autocustodia decide quién puede firmar por una dirección. No cambia las reglas internas del contrato de un token, que se aplican a todos los titulares por igual. En la práctica los emisores actúan contra direcciones ligadas a robos, sanciones e investigaciones, no al azar. La cuestión es que la capacidad existe, y tener la clave no la elimina.

- Ten claro cuáles de tus activos tienen un administrador y cuáles no.
- Un saldo ERC-20 es [una fila en el contrato de alguien](/es/blog/erc20-tokens-explained/). Averigua qué le permite ese contrato a su propietario.
- Ten cuidado con lo que aceptas. Una dirección que recibe tokens robados puede acabar en la misma lista.

Nura guarda la clave en tu dispositivo y con ella envía y recibe tokens ERC-20. Eso es todo lo que controla una cartera. El contrato que hay detrás de un token responde ante su emisor, en Nura como en cualquier otra cartera.

## Fuentes

- [Circle and Tether freeze stablecoins tied to Bitget hack, but most funds slip away — Decrypt, 25 de septiembre de 2026](https://decrypt.co/379365/circle-tether-freeze-stablecoins-bitget-hack)
