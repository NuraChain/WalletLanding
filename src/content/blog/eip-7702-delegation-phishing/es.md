---
title: Phishing de EIP-7702 y el vaciado con una sola firma
description: Un estudio de agosto de 2026 vinculó el 63 % de las autorizaciones EIP-7702 de su muestra con contratos maliciosos. Cómo una firma de delegación entrega una cuenta entera.
date: 2026-10-05
tags: noticias, cuentas inteligentes
---

EIP-7702 llegó a Ethereum en 2025. Permite que una cuenta ordinaria apunte a un código de contrato y se comporte como él: agrupación, comisiones patrocinadas, las comodidades de [una cuenta inteligente](/es/blog/smart-accounts-explained/) sin mudarse a una dirección nueva. En agosto de 2026, una investigación presentada en el USENIX Security Symposium halló que el 63 % de las transacciones de autorización EIP-7702 de su muestra estaban conectadas con contratos maliciosos, con más de 2,3 millones de dólares en robos confirmados, según informó CryptBull el 21 de agosto.

Una muestra no es toda la red, y la cifra dice tanto de quién adoptó primero la función como de la función misma. Aun así es un aviso justo sobre una firma concreta.

## ¿Qué es una delegación EIP-7702?

Un mensaje firmado que dice: a partir de ahora, ejecuta el código de este contrato como mi cuenta. Hasta que sustituyas o borres la delegación, cada llamada a tu dirección ejecuta ese código, con tus saldos.

Usado con honestidad, el código es una implementación de cartera conocida. Usado con mala fe, es un sweeper: código cuya única función es enviar a otra persona todo lo que la cuenta tiene, y todo lo que llegue después.

## ¿En qué se diferencia de un drainer corriente?

Una [aprobación](/es/blog/token-approvals/) entrega un token. Una delegación entrega la cuenta. [El truco antiguo](/es/blog/wallet-drainers/) necesitaba una firma distinta para cada activo. Este necesita una, y sigue funcionando: los fondos que se envíen después a una dirección delegada pueden ser sustraídos según llegan.

## ¿Qué aspecto tiene la solicitud?

El de una actualización. «Habilita las funciones de cuenta inteligente». «Activa las transacciones sin gas». «Reclama con gas patrocinado». La petición tiene la misma estructura que una legítima. Lo único que cambia es la dirección a la que se delega, que son cuarenta caracteres hexadecimales.

## Cómo proteger una cuenta

- Trata cualquier petición de un sitio web para delegar, actualizar o «habilitar funciones inteligentes» como tratarías una petición de tu frase de recuperación. La actualización propia de una cartera empieza dentro de la cartera, no en una página a la que te enviaron.
- Si tu cartera muestra la dirección a la que delegas, léela. Si no muestra lo que estás autorizando, no firmes.
- Una delegación se puede sustituir o borrar firmando una nueva. Si firmaste algo de lo que dudas, haz eso primero, antes de enviar nada a la cuenta.
- Si una delegación apareció porque se filtró tu clave o tu frase, borrarla no cambia nada. Esa cuenta está perdida para siempre y no debería volver a recibir fondos.

Nura es una cartera de Ethereum con autocustodia: la clave está en tu dispositivo y firma lo que apruebas. Esta nota no afirma nada sobre qué tipos de firma admite. La regla no depende de la cartera: una firma que no puedes leer es una transferencia que no has comprobado.

## Fuentes

- [EIP-7702 wallet delegation faces scrutiny after phishing research — CryptBull, 21 de agosto de 2026](https://www.cryptbull.net/2026/08/21/eip-7702-wallet-delegation-faces-scrutiny-after-phishing-research/)
