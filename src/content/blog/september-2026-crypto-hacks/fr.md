---
title: Les piratages crypto de septembre 2026, décortiqués
description: Septembre 2026, pire mois de l'année pour le vol de crypto, plus de 766 millions de dollars. Deux incidents en font plus de 90 %, aucun n'est un utilisateur perdant sa clé.
date: 2026-10-05
tags: actualités, auto-conservation
---

Septembre 2026 a été le pire mois de l'année pour le vol de crypto. PeckShield a compté 55 incidents et 766,5 millions de dollars perdus ; CertiK a compté 97 incidents et 768,4 millions de dollars, comme l'a rapporté Cryptonomist le 1er octobre. Deux observateurs, qui comptent différemment, sont arrivés à moins de deux millions de dollars l'un de l'autre. Le cumul de CertiK pour l'année s'élevait à 2,68 milliards de dollars sur 656 incidents.

Un nombre aussi grand se lit comme une raison de ne se fier à rien. Il est plus utile une fois décortiqué.

## Quels ont été les plus gros piratages crypto de septembre 2026 ?

Deux événements représentent environ 708 millions de dollars du total :

- **Bitget, le 24 septembre.** Environ 388 millions de dollars selon le décompte de ces observateurs, pris dans les portefeuilles chauds et tièdes de la plateforme.
- **Liquid Network, le 6 septembre.** Environ 320 millions de dollars pris sur une sidechain de Bitcoin, pour l'essentiel restitués par la suite.

Tout le reste du mois — des dizaines d'incidents — a représenté environ 60 millions de dollars au total. Les trois plus gros d'entre eux se situaient entre 5,9 millions et 7,8 millions de dollars chacun.

## Qu'ont en commun les deux plus gros ?

Dans aucun des deux une personne n'a perdu sa clé. L'un était le propre processus de signature d'une plateforme, [approuvant des transferts sur lesquels on lui avait montré de fausses données](/fr/blog/bitget-hack-hot-wallet/). L'autre était une faille dans le logiciel qu'une fédération d'entreprises fait tourner pour [détenir du bitcoin pour le compte de ses utilisateurs](/fr/blog/liquid-network-exploit/). Dans les deux cas, des gens avaient confié la garde à un système, et c'est le système qui a cédé.

C'est le schéma de la plupart des mois. Le chiffre des gros titres est dominé par quelques grandes réserves d'actifs appartenant à d'autres, parce que c'est là qu'un seul succès rapporte le plus.

## Cela rend-il l'auto-conservation plus sûre ?

Cela rend les risques différents, et les statistiques n'en montrent bien qu'une sorte. Les pertes dues au fait de [signer quelque chose qu'il ne fallait pas](/fr/blog/wallet-drainers/), ou à une phrase de récupération mal gardée, sont petites prises une à une, rarement signalées, et n'entrent pas dans un graphique mensuel. Elles sont réelles, et ce sont celles que vous contrôlez personnellement.

- L'argent détenu par un système est exposé au pire jour de ce système.
- L'argent détenu par une clé est exposé à la façon dont la clé est gardée et à ce qu'elle signe.
- Choisir l'auto-conservation, c'est choisir la seconde liste. Elle est plus courte, et elle est entièrement à vous.

Nura est sur la seconde liste. La phrase de récupération est chiffrée avec AES-GCM et reste sur votre appareil ; la phrase secrète qui la déverrouille est hachée avec Argon2id ; il n'y a ni compte ni serveur qui en détienne une copie. Rien de tout cela ne lit une demande à votre place.

## Sources

- [September 2026 crypto hacks cost $766 million, the year's worst month — Cryptonomist, 1er octobre 2026](https://en.cryptonomist.ch/2026/10/01/crypto-hacks-september-2026/)
