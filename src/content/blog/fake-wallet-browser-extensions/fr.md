---
title: Faux portefeuilles, 59 extensions dans les boutiques
description: En août 2026, des chercheurs de Socket ont signalé 40 modules Firefox malveillants et 19 pour Chrome et Edge imitant des portefeuilles crypto, tous en boutique officielle.
date: 2026-10-05
tags: actualités, arnaques
---

En août 2026, la société de sécurité Socket a révélé deux campagnes d'extensions de navigateur malveillantes, comme l'a rapporté CryptoTicker le 31 août. Sur Firefox, il y avait 77 extensions liées entre elles, dont 40 confirmées malveillantes, imitant des portefeuilles tels qu'OKX, Rabby et TronLink. Sur Chrome et Edge, il y en avait 19 autres, dont certaines copiaient les interfaces de Ledger et de Trezor. Toutes se trouvaient dans les boutiques d'extensions officielles. Mozilla a retiré les modules signalés après le rapport.

Une extension de navigateur est l'un des endroits les plus pratiques où garder un portefeuille, et l'un des plus exposés. Voici à quoi ressemble cette exposition.

## Comment les fausses extensions de portefeuille volent-elles une phrase de récupération ?

De trois façons, rien que dans ces campagnes :

- **Un vrai portefeuille, reconstruit.** Certaines étaient des versions modifiées du portefeuille Rabby qui interceptaient les clés avant leur chiffrement. Elles avaient l'apparence et le fonctionnement de l'original, parce qu'elles étaient, pour l'essentiel, l'original.
- **Un collecteur.** D'autres recueillaient des identifiants d'accès et le contenu du presse-papiers.
- **Un drainer.** Le lot Chrome et Edge supprimait un en-tête de sécurité de chaque page, volait des jetons de session et des identifiants de plateformes d'échange, et visait les portefeuilles Ethereum, Solana et Tron.

## Comment sont-elles entrées dans les boutiques officielles ?

Neuf des extensions malveillantes ont commencé leur vie comme d'inoffensives applications de sport. Elles ont passé la validation, rassemblé des utilisateurs, puis ont été mises à jour avec du code voleur de portefeuilles. La validation examine une version. Une extension est un flux de versions, et votre navigateur installe la suivante sans rien demander.

## Comment installer une extension de portefeuille en sécurité

- Prenez le lien sur le site ou le dépôt du portefeuille lui-même, pas dans la recherche d'une boutique. Chercher le nom, c'est ainsi qu'on rencontre les imitations.
- Vérifiez l'éditeur et l'orthographe exacte, caractère par caractère.
- N'importez jamais une phrase de récupération existante dans une extension que vous avez trouvée, qu'on vous a envoyée ou qu'on vous a dit d'essayer. [Cette phrase est le portefeuille](/fr/blog/recovery-phrase-security/).
- Gardez peu d'extensions dans le navigateur qui abrite votre portefeuille. Chacune est du code qui s'exécute à côté de lui.
- [Demandez à une extension ce que vous demanderiez à n'importe quel portefeuille](/fr/blog/choosing-a-wallet/) : où vit la clé, et si vous pouvez lire le code.

L'extension de navigateur de Nura figure avec ses autres versions dans le dépôt du projet lui-même, qui est sous licence MIT et ouvert à la lecture. C'est là qu'il faut la prendre. Être open source n'est pas un bouclier — ces attaquants ont utilisé un portefeuille existant comme matière première. C'est ce qui rend le vrai vérifiable.

## Sources

- [Malicious browser extensions steal crypto wallets — CryptoTicker, 31 août 2026](https://cryptoticker.io/en/browser-extensions-wallet-theft/)
