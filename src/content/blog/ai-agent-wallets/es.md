---
title: Carteras de agentes de IA. ¿Quién firma si paga un bot?
description: Las carteras para agentes de IA llegaron en 2026, y con ellas los estudios sobre cómo atacarlas. Qué supone dar poder de gasto a un programa y cómo limitarlo.
date: 2026-10-05
tags: noticias, firma
---

En febrero de 2026 Coinbase lanzó lo que llama Agentic Wallets: carteras pensadas para que las manejen agentes de IA en lugar de personas, con topes de gasto por sesión y por transacción. Funcionan con x402, un protocolo que permite a un programa pagar una llamada a una API o un recurso web como parte de la propia petición. En mayo ya había investigadores publicando ataques. Un artículo, «Five Attacks on x402 Agentic Payment Protocol» (Li, Wang y Wang, 12 de mayo de 2026), describe cinco ataques prácticos que revelan «debilidades en la autorización, la vinculación, la protección contra la repetición y el tratamiento en la capa web», probados contra endpoints en producción, con resultados que van desde obtener el servicio sin pagar hasta cobrar el pago sin prestar el servicio.

Es tan nuevo que el vocabulario aún se está asentando. La pregunta de fondo es antigua.

## ¿Qué es una cartera para agentes de IA?

Una clave que un programa puede usar sin preguntarte cada vez. Esa es toda la novedad. Una cartera siempre ha sido una clave más una persona que decide qué firma. Aquí quien decide es un programa, dentro de unos límites que alguien fijó de antemano.

## ¿Por qué es arriesgado?

Todas las salvaguardas de la autocustodia dan por hecho que una persona lee la solicitud. [Leer la solicitud es la defensa](/es/blog/wallet-drainers/), y un agente no lee: procesa. El texto de una página web puede estar escrito para darle instrucciones. Se le puede ofrecer un precio que ninguna persona aceptaría. Se le puede hacer pagar dos veces, o pagar a quien no debe, y no notará que algo va mal.

Por eso los límites son todo el diseño. Un tope por transacción y por día es la diferencia entre un agente que puede perder su asignación y uno que puede perderlo todo.

## ¿Cómo dar a un programa acceso a los fondos?

Como le darías una tarjeta a un desconocido.

- **Una cartera aparte con su propia clave.** Nunca la clave que guarda tus ahorros, y nunca tu frase de recuperación: ni pegada en un prompt, ni en un archivo de configuración, ni en la memoria de un agente.
- **Solo lo que pueda permitirse perder.** Ponle fondos para la tarea, recárgala y da por hecho que el saldo está en riesgo.
- **Límites aplicados fuera del agente.** Una regla en una [cuenta inteligente](/es/blog/smart-accounts-explained/) o en el servicio de la cartera se mantiene. Una instrucción en el prompt del agente, no.
- **Sin aprobaciones permanentes.** [Un permiso que sigue actuando](/es/blog/token-approvals/) es peor en manos de algo a lo que se puede convencer de usarlo.
- **Lee el registro.** El agente no te dirá que lo engañaron.

Nura es una cartera para una persona. Las claves se derivan y se guardan en tu dispositivo, y las transacciones se firman allí cuando las apruebas. Si experimentas con agentes, lo más útil que puede ser una cartera así es aquella a la que no tienen acceso.

## Fuentes

- [Five Attacks on x402 Agentic Payment Protocol — Li, Wang y Wang, arXiv, 12 de mayo de 2026](https://arxiv.org/abs/2605.11781)
- [Coinbase Unveils Wallet Infrastructure for AI Agents — ForkLog, 12 de febrero de 2026](https://forklog.com/en/coinbase-unveils-wallet-infrastructure-for-ai-agents/)
