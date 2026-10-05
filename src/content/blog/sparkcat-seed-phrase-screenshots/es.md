---
title: SparkCat, el malware que lee capturas de pantalla
description: En abril de 2026 Kaspersky halló en App Store y Google Play una nueva variante de SparkCat, que busca frases de recuperación en las fotos. Por qué una captura es una fuga.
date: 2026-10-05
tags: noticias, frase de recuperación
---

El 2 de abril de 2026 Kaspersky informó de una nueva variante de SparkCat, un troyano que se esconde dentro de aplicaciones de aspecto corriente y busca en la galería de fotos del teléfono frases de recuperación de criptomonedas. Sus investigadores lo hallaron en dos aplicaciones de App Store y una de Google Play —aplicaciones de mensajería empresarial y una de reparto de comida— un año después de que la primera versión fuera retirada de ambas tiendas. El código malicioso ya ha sido eliminado.

No atacó ninguna cartera. No le hizo falta.

## ¿Cómo roba SparkCat una frase de recuperación?

La aplicación pide acceso a tus fotos, algo que una aplicación de mensajería o de reparto puede querer de forma verosímil. Después pasa un reconocimiento óptico de caracteres por las imágenes y busca texto que se parezca a una frase de recuperación. En Android, Kaspersky lo encontró buscando palabras clave en japonés, coreano y chino. La variante de iOS busca las propias palabras mnemotécnicas, que están en inglés, así que puede alcanzar a cualquiera, en cualquier lugar.

La cartera no se toca en ningún momento. La frase se lee de una foto que tú le hiciste.

## ¿Es seguro hacer una captura de pantalla de una frase de recuperación?

No, y este es el motivo. Una captura de pantalla es un archivo de imagen corriente. Está en una galería que puede leer cualquier aplicación con permiso de fotos. Suele copiarse a una cuenta en la nube en cuestión de minutos. Aparece en las copias de seguridad, y en otros dispositivos con la sesión iniciada en la misma cuenta. Cada uno de esos es un lugar donde ahora existe la frase.

[La frase es la cartera](/es/blog/recovery-phrase-security/). Una foto de ella es otra copia de la cartera, guardada en el lugar menos vigilado del teléfono.

## ¿Cómo guardar entonces una frase de recuperación?

- Escríbela en papel o grábala en metal, y guárdala donde guardarías un documento que no pudieras reemplazar.
- Nunca la fotografíes, ni la escribas en una aplicación de notas, ni te la envíes por correo, ni la pegues en un chat.
- Si alguna vez lo hiciste, da la frase por expuesta: crea una cartera nueva y mueve los fondos.
- Da a las aplicaciones acceso a fotos concretas en lugar de a toda la galería cuando tu teléfono lo permita, y desconfía de cualquier aplicación que insista en tenerlo todo.
- Las tiendas oficiales reducen el riesgo. No lo eliminan: estas aplicaciones pasaron la revisión.

Dentro de Nura, la frase de recuperación se cifra con AES-GCM antes de guardarse, y la contraseña que la desbloquea se procesa con el hash Argon2id. Esa protección termina en el borde de la aplicación. Una frase copiada fuera —en papel, o en una foto— está tan segura como el sitio donde la pongas, y nada en la cartera puede seguirla hasta allí.

## Fuentes

- [Kaspersky discovers new SparkCat variant bypassing App Store and Google Play security — Kaspersky, 2 de abril de 2026](https://www.kaspersky.com/about/press-releases/kaspersky-discovers-new-sparkcat-variant-bypassing-app-store-and-google-play-security)
