---
title: Extensiones de cartera falsas, 59 en las tiendas
description: En agosto de 2026 investigadores de Socket hallaron 40 complementos maliciosos de Firefox y 19 de Chrome y Edge que imitaban carteras cripto, todos en las tiendas oficiales.
date: 2026-10-05
tags: noticias, estafas
---

En agosto de 2026 la empresa de seguridad Socket reveló dos campañas de extensiones de navegador maliciosas, según informó CryptoTicker el 31 de agosto. En Firefox había 77 extensiones relacionadas entre sí, 40 de ellas confirmadas como maliciosas, que imitaban carteras como OKX, Rabby y TronLink. En Chrome y Edge había 19 más, algunas de las cuales imitaban las interfaces de Ledger y Trezor. Todas estaban en las tiendas oficiales de extensiones. Mozilla retiró los complementos denunciados tras el informe.

Una extensión de navegador es uno de los lugares más cómodos para tener una cartera, y uno de los más expuestos. Así es esa exposición.

## ¿Cómo roban una frase de recuperación las extensiones de cartera falsas?

De tres maneras, solo en estas campañas:

- **Una cartera real, reconstruida.** Algunas eran versiones alteradas de la cartera Rabby que interceptaban las claves antes de que se cifraran. Tenían el aspecto y el funcionamiento del original, porque en su mayor parte eran el original.
- **Un recolector.** Otras recogían credenciales de acceso y el contenido del portapapeles.
- **Un drainer.** El grupo de Chrome y Edge eliminaba una cabecera de seguridad de todas las páginas, robaba tokens de sesión y credenciales de acceso a exchanges, y apuntaba a carteras de Ethereum, Solana y Tron.

## ¿Cómo entraron en las tiendas oficiales?

Nueve de las extensiones maliciosas empezaron siendo inofensivas aplicaciones de deportes. Pasaron la revisión, reunieron usuarios y más tarde se actualizaron con código para robar carteras. La revisión examina una versión. Una extensión es una sucesión de versiones, y tu navegador instala la siguiente sin preguntar.

## Cómo instalar una extensión de cartera de forma segura

- Toma el enlace del sitio o el repositorio de la propia cartera, no de una búsqueda en la tienda. Buscando el nombre es como te encuentras con las imitaciones.
- Comprueba el editor y la grafía exacta, carácter por carácter.
- Nunca importes una frase de recuperación existente en una extensión que encontraste, que te enviaron o que te dijeron que probaras. [Esa frase es la cartera](/es/blog/recovery-phrase-security/).
- Mantén pocas extensiones en el navegador donde está tu cartera. Cada una es código que se ejecuta a su lado.
- [Pregúntale a una extensión lo que le preguntarías a cualquier cartera](/es/blog/choosing-a-wallet/): dónde vive la clave y si puedes leer el código.

La extensión de navegador de Nura figura junto a sus demás versiones en el repositorio del propio proyecto, que tiene licencia MIT y está abierto a la lectura. Ese es el sitio de donde obtenerla. Ser de código abierto no es un escudo: estos atacantes usaron una cartera existente como materia prima. Es lo que hace que la auténtica se pueda comprobar.

## Fuentes

- [Malicious browser extensions steal crypto wallets — CryptoTicker, 31 de agosto de 2026](https://cryptoticker.io/en/browser-extensions-wallet-theft/)
