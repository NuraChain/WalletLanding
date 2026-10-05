---
title: La filtración de datos de Trezor no se llevó claves
description: Una brecha en el socio de envíos de Trezor expuso en 2026 nombres, direcciones y teléfonos de más de 80 000 compradores. No se tocó ningún dispositivo, y aun así importa.
date: 2026-10-05
tags: noticias, estafas
---

En agosto de 2026 Trezor dijo que una brecha en ShipMonk, una empresa que envía sus pedidos, había expuesto los datos de 13 689 clientes. El 5 de septiembre añadió aproximadamente 67 000 clientes de Estados Unidos, de registros de pedidos que van de 2019 a 2021, según informó The Hacker News. Lo que se filtró fueron nombres, direcciones de correo electrónico, números de teléfono, direcciones de envío y números de pedido. La brecha no afectó a la seguridad de las carteras de hardware de Trezor, y no se vio implicada ninguna semilla de recuperación ni clave privada.

Sería fácil archivarlo en «no pasó nada». La brecha no abrió ni una sola cartera. Lo que produjo es una lista.

## ¿Qué quedó expuesto en la brecha de Trezor?

Una lista de personas que compraron una cartera de hardware, con dónde viven y cómo localizarlas. Los atacantes entraron por un fallo en una herramienta de analítica que usaba la empresa de envíos: nada que ver con la criptografía. El punto más débil en la seguridad de un fabricante de carteras resultó ser una base de datos de un socio.

## ¿Por qué importa una dirección filtrada si las claves están a salvo?

Porque le dice a un desconocido dos cosas: que probablemente tienes cripto, y cómo contactarte. Todo lo que viene después se apoya en eso.

- **Phishing que conoce tu nombre y tu pedido.** Correos, llamadas y cartas que se hacen pasar por el fabricante y te piden «verificar» o «asegurar» tu dispositivo. Trezor advirtió a los clientes de que esperaran exactamente esto.
- **Reemplazos falsos.** Un dispositivo que no pediste y que llega por correo, o instrucciones para introducir tu semilla en un sitio web.
- **La variante física.** Una dirección particular asociada a la compra de una cartera es el punto de partida para [la coacción en lugar del hackeo](/es/blog/wrench-attacks-crypto-2026/).

## ¿Qué hago si mis datos se filtraron?

- Trata como hostil todo mensaje no solicitado sobre tu cartera, por mucho que sepa de ti.
- Tu semilla va en tu dispositivo y en ningún otro sitio. Ningún proceso de soporte la necesita.
- No uses un dispositivo que llegue sin haberlo pedido.
- Mira qué más está ligado a esa dirección y a ese número de teléfono, y sepáralo de tu cripto donde puedas.

## ¿Protege la autocustodia la privacidad?

Protege claves. La privacidad depende de lo que tuviste que entregar por el camino. [Tu frase de recuperación es la cartera](/es/blog/recovery-phrase-security/), pero tu nombre en una lista de clientes es una exposición distinta, y ningún cifrado la cubre.

Nura es una descarga, no un envío: no hay cuenta que crear, ni dirección de envío que dar, ni servidor que guarde tu frase. Eso reduce una exposición. No te oculta: las cadenas públicas son públicas, y el lugar donde compras cripto sigue sabiendo quién eres.

## Fuentes

- [Trezor says ShipMonk breach exposed 67,000 U.S. customers' data it said was deleted — The Hacker News, 5 de septiembre de 2026](https://thehackernews.com/2026/09/trezor-says-shipmonk-breach-exposed.html)
