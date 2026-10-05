---
title: El incidente de MetaMask y dónde están las claves
description: El 1 de octubre de 2026 MetaMask reveló un incidente de seguridad en parte de su infraestructura. Por qué una brecha junto a una cartera con autocustodia no toca sus claves.
date: 2026-10-05
tags: noticias, autocustodia
---

El 1 de octubre de 2026 MetaMask dijo que estaba gestionando un incidente de seguridad que afectaba a parte de su infraestructura. Según informó BleepingComputer ese mismo día, la empresa afirmó que no había «ninguna amenaza inmediata para las carteras de MetaMask» y que estaba dando salida por precaución a los validadores afectados de sus operaciones de staking. Lido, el protocolo de staking al que sirven esos validadores, esperaba que las salidas estuvieran completas al final del 7 de octubre.

A 5 de octubre de 2026 MetaMask no ha dicho qué sistemas se vieron alcanzados ni cómo. Conviene decirlo con claridad, porque mucho de lo que se repite en internet va más lejos de lo que se ha revelado.

## ¿Hackearon las carteras de MetaMask?

Nada de lo publicado hasta ahora lo dice. El comunicado de la empresa traza la línea en sus operaciones de staking, que describe como no custodiales: opera validadores, y dice que no gestiona claves de retiro.

## ¿Cómo puede sufrir una brecha la empresa de una cartera sin que la sufran las carteras?

Por el lugar donde está la clave. En una cartera con autocustodia la frase de recuperación se genera y se guarda en tu dispositivo. La empresa que escribe el software opera otras cosas a su alrededor: servidores que retransmiten transacciones, fuentes de precios, un servicio de staking, un sitio web. Eso puede fallar, y puede importar: un servicio se cae, se pierden recompensas, una página comprometida sirve algo que no debería. Pero ninguna de esas máquinas guarda tu frase, así que ninguna puede firmar por ti. Eso es [lo que significa realmente la autocustodia](/es/blog/self-custody-explained/), y un incidente como este es el día en que la definición se pone a prueba.

## ¿Qué hacer tras un incidente de seguridad de una cartera?

- Lee el comunicado de la propia empresa antes que el resumen que haga cualquiera.
- No «migres», «revalides» ni «asegures» tu cartera a través de un enlace. A los incidentes les siguen, en cuestión de horas, mensajes que ofrecen exactamente eso, y [esa solicitud es el ataque](/es/blog/wallet-drainers/).
- Nunca escribas tu frase de recuperación en ningún sitio como respuesta a una noticia.
- Actualiza la aplicación solo desde el lugar donde la instalaste originalmente.

Nura traza la misma línea y dice dónde está: la frase de recuperación se cifra con AES-GCM y se guarda en tu dispositivo, sin cuenta y sin servidor que guarde una copia. Eso no es afirmar que nada alrededor de una cartera pueda salir mal. Es declarar dónde está la frase, para que sepas qué preguntar cuando algo salga mal.

## Fuentes

- [MetaMask discloses security incident affecting its infrastructure — BleepingComputer, 1 de octubre de 2026](https://www.bleepingcomputer.com/news/security/metamask-discloses-security-incident-affecting-its-infrastructure/)
- [MetaMask responds to security incident, exits Ethereum validators as precaution — teiss, 2 de octubre de 2026](https://www.teiss.co.uk/news/metamask-responds-to-security-incident-exits-ethereum-validators-as-precaution-18251)
