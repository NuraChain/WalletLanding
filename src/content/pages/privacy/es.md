---
title: Política de privacidad
description: Nura Wallet no recopila datos personales. Qué guarda la app en tu dispositivo y qué envía a las redes que consulta.
date: 2026-09-26
---

Nura Wallet es una billetera de criptomonedas con autocustodia. Esta política explica qué ocurre con la información cuando usas la app.

## La versión breve

Nura Wallet no tiene cuentas, ni registro, ni servidores propios que almacenen tu información. No recopilamos ni vendemos datos personales. Tu frase de recuperación y tus claves privadas nunca salen de tu dispositivo.

## Información que recopilamos

**Ninguna.**

No utilizamos analíticas, ni telemetría, ni informes de fallos, ni publicidad. La app no contiene SDK de seguimiento de terceros. No podemos ver tus saldos, tus direcciones, tus transacciones ni cómo usas la app.

## Información almacenada en tu dispositivo

La app almacena lo siguiente localmente en tu dispositivo, y en ningún otro lugar:

- Tu frase de recuperación y tus claves privadas, cifradas con **AES-GCM** mediante una clave derivada de tu contraseña con **Argon2id**.
- El verificador de tu contraseña (un hash; la contraseña en sí nunca se almacena).
- Tus ajustes: redes elegidas, tokens añadidos, idioma y preferencias de visualización.
- Los datos de tu navegador de dApps: marcadores, historial y pestañas abiertas.

Estos datos se guardan en el almacenamiento propio de la app en tu dispositivo. Nunca se nos envían.

**No podemos recuperar tu billetera.** Como tu contraseña y tu frase de recuperación existen solo en tu dispositivo, nadie —ni siquiera nosotros— puede restablecer el acceso si las pierdes. Guarda tu frase de recuperación en un lugar seguro y sin conexión.

## Servicios con los que se comunica la app

Una billetera no es útil sin leer la cadena, así que la app hace solicitudes a servicios que no operamos. Cada uno de ellos recibe la **dirección IP** de tu dispositivo, como ocurre con cualquier solicitud por internet, y ve lo siguiente:

- **Nodos públicos de red (RPC)**, usados para leer saldos y emitir transacciones: tu dirección de billetera y las transacciones que emites.
- **Servicios de exploradores de bloques**, usados para el historial de transacciones y los datos de tokens: la dirección de billetera que se consulta.
- **Un servicio de precios de tokens**, usado para mostrar precios: de qué tokens se solicitan los precios.
- **Un motor de búsqueda**, usado para las búsquedas en el navegador de dApps integrado: tus términos de búsqueda.
- **Nodos y explorador de la red NuraChain**, usados para leer la red NuraChain: tu dirección de billetera.

Las solicitudes se hacen solo cuando las necesita una función que estás usando. Puedes cambiar o sustituir los puntos de conexión de red en Ajustes.

Cada uno de estos servicios tiene su propia política de privacidad, que rige lo que hace con esa información.

## El navegador de dApps integrado

La app incluye un navegador para visitar aplicaciones descentralizadas. Los sitios web que abres en él son terceros y pueden ver la información habitual que ve un sitio web, incluida tu dirección IP y cualquier dirección de billetera que decidas conectar.

Un sitio web solo puede interactuar con tu billetera mediante una solicitud explícita que tú apruebes. Aprobar una conexión comparte tu dirección pública de billetera con ese sitio. Tu frase de recuperación y tus claves privadas nunca se comparten con ningún sitio web, y ninguna transacción se firma jamás sin tu confirmación.

Ten cuidado con los sitios a los que te conectas y con las transacciones que apruebas.

## Menores

Nura Wallet no está dirigida a menores, y no recopilamos a sabiendas información de nadie.

## Tus derechos

Como no tenemos datos personales tuyos, no hay nada que podamos consultar, corregir, exportar ni eliminar. Los datos guardados en tu dispositivo se eliminan cuando borras la app, junto con tu billetera cifrada; asegúrate de tener tu frase de recuperación antes de hacerlo.

## Cambios en esta política

Si esta política cambia, actualizaremos la fecha que aparece al principio de esta página y publicaremos aquí la versión revisada.

## Más

Para obtener ayuda con la app, consulta [Soporte](/es/support/). Los términos para usarla están en los [Términos de uso](/es/terms/).
