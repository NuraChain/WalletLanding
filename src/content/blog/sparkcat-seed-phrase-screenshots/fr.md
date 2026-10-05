---
title: SparkCat, le malware qui lit les captures d'écran
description: En avril 2026, Kaspersky a trouvé un nouveau SparkCat sur l'App Store et Google Play, en quête de phrases de récupération dans les photos. Une capture d'écran est une fuite.
date: 2026-10-05
tags: actualités, phrase de récupération
---

Le 2 avril 2026, Kaspersky a signalé une nouvelle variante de SparkCat, un cheval de Troie qui se cache dans des applications d'apparence ordinaire et fouille la galerie photo du téléphone à la recherche de phrases de récupération de cryptomonnaies. Ses chercheurs l'ont trouvé dans deux applications de l'App Store et une de Google Play — des messageries d'entreprise et une application de livraison de repas — un an après le retrait de la première version des deux boutiques. Le code malveillant a depuis été retiré.

Il n'a pas attaqué de portefeuille. Il n'en avait pas besoin.

## Comment SparkCat vole-t-il une phrase de récupération ?

L'application demande l'accès à vos photos, ce qu'une messagerie ou une application de livraison peut plausiblement vouloir. Elle applique ensuite une reconnaissance optique de caractères aux images et cherche du texte qui ressemble à une phrase de récupération. Sur Android, Kaspersky a constaté qu'il cherchait des mots-clés en japonais, en coréen et en chinois. La variante iOS cherche les mots mnémoniques eux-mêmes, qui sont en anglais — elle peut donc atteindre n'importe qui, n'importe où.

Le portefeuille n'est jamais touché. La phrase est lue sur une image que vous en avez prise.

## Est-il sûr de faire une capture d'écran d'une phrase de récupération ?

Non, et voici pourquoi. Une capture d'écran est un fichier image ordinaire. Elle se trouve dans une galerie que toute application ayant accès aux photos peut lire. Elle est en général copiée vers un compte cloud en quelques minutes. Elle réapparaît dans les sauvegardes, et sur d'autres appareils connectés au même compte. Chacun de ces endroits est un lieu où la phrase existe désormais.

[La phrase est le portefeuille](/fr/blog/recovery-phrase-security/). Une image d'elle est une copie de plus du portefeuille, gardée à l'endroit le moins surveillé du téléphone.

## Comment conserver une phrase de récupération à la place ?

- Écrivez-la sur papier ou gravez-la dans le métal, et gardez-la là où vous garderiez un document impossible à remplacer.
- Ne la photographiez jamais, ne la tapez pas dans une application de notes, ne vous l'envoyez pas par e-mail et ne la collez pas dans une discussion.
- Si vous l'avez déjà fait, considérez la phrase comme exposée : créez un nouveau portefeuille et déplacez les fonds.
- Donnez aux applications l'accès à des photos choisies plutôt qu'à toute la galerie quand votre téléphone le permet, et méfiez-vous de toute application qui exige tout.
- Les boutiques officielles réduisent le risque. Elles ne le suppriment pas — ces applications ont passé la validation.

Dans Nura, la phrase de récupération est chiffrée avec AES-GCM avant d'être stockée, et la phrase secrète qui la déverrouille est hachée avec Argon2id. Cette protection s'arrête à la limite de l'application. Une phrase recopiée au-dehors — sur papier, ou dans une photo — est aussi en sécurité que l'endroit où vous la mettez, et rien dans le portefeuille ne peut l'y suivre.

## Sources

- [Kaspersky discovers new SparkCat variant bypassing App Store and Google Play security — Kaspersky, 2 avril 2026](https://www.kaspersky.com/about/press-releases/kaspersky-discovers-new-sparkcat-variant-bypassing-app-store-and-google-play-security)
