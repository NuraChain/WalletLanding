---
title: Soporte
description: Ayuda con Nura Wallet — contraseña olvidada, restaurar una billetera, saldos que no aparecen, transacciones atascadas, tokens personalizados y dApps.
date: 2026-09-26
---

Ayuda con Nura Wallet, la billetera de Ethereum con autocustodia para Windows, macOS, Linux, Android e iOS.

## Cómo obtener ayuda

Los canales de la comunidad de Nura Wallet están enlazados al pie de esta página. Cuando preguntes por un problema, ayuda incluir tu plataforma y la versión de la app (Ajustes → Acerca de), qué estabas haciendo y qué ocurrió en su lugar.

**Nunca compartas tu frase de recuperación ni tu contraseña con nadie, ni siquiera con nosotros.** Nunca te las pediremos. Quien lo haga está intentando robar tus fondos.

## Preguntas frecuentes

### Olvidé mi contraseña. ¿Pueden restablecerla?

No. Nura Wallet es de autocustodia: tu contraseña y tu frase de recuperación existen solo en tu dispositivo y nunca se nos envían. Nadie puede restablecerlas ni recuperarlas.

Si tienes tu frase de recuperación de 12 o 24 palabras, puedes reinstalar la app y restaurar tu billetera con una nueva contraseña. Sin la frase de recuperación, nadie puede recuperar los fondos de esa billetera.

### Perdí mi dispositivo o borré la app. ¿He perdido mis fondos?

Tus fondos están en la cadena, no en la app. Instala Nura Wallet en cualquier dispositivo y restaura con tu frase de recuperación para recuperar el acceso.

### ¿Dónde se guarda mi frase de recuperación?

Cifrada en tu dispositivo con AES-GCM, mediante una clave derivada de tu contraseña con Argon2id. Nunca se sube a ningún sitio. La [Política de privacidad](/es/privacy/) tiene los detalles.

### Mi saldo o mi transacción no aparece

La app lee la cadena a través de puntos de conexión de red públicos, que a veces son lentos o no están disponibles.

1. Comprueba que estás en la red correcta (parte superior de la pantalla de la billetera).
2. Desliza hacia abajo para actualizar.
3. Prueba otro punto de conexión en Ajustes → Redes.
4. Busca tu dirección de billetera en un explorador de bloques de esa red.

Una transacción que aparece en el explorador pero no en la app es un problema de visualización, no una transacción perdida.

### Mi token no aparece en la lista

Añádelo manualmente: Ajustes → Tokens → Añadir, y pega la dirección del contrato del token. Toma la dirección de una fuente de confianza: un token que parece idéntico a uno conocido puede ser falso.

### Una transacción está atascada como pendiente

Las transacciones pendientes están esperando la confirmación de la red, normalmente porque la comisión de gas se fijó demasiado baja. La transacción se confirmará cuando la red se calme o acabará descartándose. Los fondos no se pierden mientras una transacción está pendiente.

### ¿Es seguro usar Nura Wallet con dApps?

El navegador integrado solo permite que un sitio web interactúe con tu billetera mediante solicitudes que tú apruebas explícitamente. Ninguna transacción se firma sin tu confirmación, y ningún sitio web recibe jamás tu frase de recuperación ni tus claves privadas.

Lee lo que estás aprobando. Un sitio malicioso puede pedir una transacción o una aprobación de tokens que vacíe tu billetera; la billetera te mostrará lo que se solicita, pero solo tú puedes juzgar si es legítimo.

### ¿Qué redes son compatibles?

Ethereum, BNB Smart Chain, Arbitrum y NuraChain, además de cualquier red compatible con EVM que añadas tú mismo en Ajustes → Redes.

### ¿Nura Wallet es de código abierto?

Sí, bajo la Licencia MIT. El repositorio del código fuente está enlazado al pie de esta página.

## Más

Las normas para usar la app están en los [Términos de uso](/es/terms/).
