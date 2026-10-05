---
title: L'incident MetaMask, et où se trouvent les clés
description: MetaMask a révélé le 1er octobre 2026 un incident de sécurité sur une partie de son infrastructure. Une brèche autour d'un portefeuille non custodial n'atteint pas ses clés.
date: 2026-10-05
tags: actualités, auto-conservation
---

Le 1er octobre 2026, MetaMask a indiqué qu'elle gérait un incident de sécurité touchant une partie de son infrastructure. Comme BleepingComputer l'a rapporté le jour même, l'entreprise a déclaré qu'il n'y avait « aucune menace immédiate pour les portefeuilles MetaMask » et qu'elle faisait sortir par précaution les validateurs concernés de ses opérations de staking. Lido, le protocole de staking que servent ces validateurs, s'attendait à ce que les sorties soient achevées d'ici la fin du 7 octobre.

Au 5 octobre 2026, MetaMask n'a pas dit quels systèmes ont été atteints ni comment. Il vaut la peine de le dire clairement, car une bonne partie de ce qui se répète en ligne va plus loin que ce qui a été divulgué.

## Les portefeuilles MetaMask ont-ils été piratés ?

Rien de ce qui a été publié jusqu'ici ne le dit. Le communiqué de l'entreprise trace la limite à ses opérations de staking, qu'elle décrit comme non custodiales : elle fait tourner des validateurs, et dit ne pas gérer les clés de retrait.

## Comment l'éditeur d'un portefeuille peut-il être compromis sans que les portefeuilles le soient ?

À cause de l'endroit où se trouve la clé. Dans un portefeuille non custodial, la phrase de récupération est générée et stockée sur votre appareil. L'entreprise qui écrit le logiciel fait tourner d'autres choses autour — des serveurs qui relaient les transactions, des flux de prix, un service de staking, un site web. Ceux-là peuvent défaillir, et cela peut compter : un service tombe, des récompenses sont manquées, une page compromise sert quelque chose qu'elle ne devrait pas. Mais aucune de ces machines ne détient votre phrase, donc aucune ne peut signer à votre place. C'est [ce que veut vraiment dire l'auto-conservation](/fr/blog/self-custody-explained/), et un incident comme celui-ci est le jour où la définition est mise à l'épreuve.

## Que faire après un incident de sécurité touchant un portefeuille ?

- Lisez le communiqué de l'entreprise elle-même avant le résumé qu'en fait qui que ce soit.
- Ne « migrez », ne « revalidez » et ne « sécurisez » pas votre portefeuille par un lien. Les incidents sont suivis en quelques heures de messages qui proposent exactement cela, et [cette demande est l'attaque](/fr/blog/wallet-drainers/).
- Ne tapez jamais votre phrase de récupération où que ce soit en réaction à une actualité.
- Ne mettez l'application à jour que depuis l'endroit où vous l'avez installée à l'origine.

Nura trace la même limite et dit où elle passe : la phrase de récupération est chiffrée avec AES-GCM et stockée sur votre appareil, sans compte et sans serveur qui en détienne une copie. Ce n'est pas affirmer que rien ne peut mal tourner autour d'un portefeuille. C'est énoncer où se trouve la phrase, pour que vous sachiez quoi demander quand quelque chose tourne mal.

## Sources

- [MetaMask discloses security incident affecting its infrastructure — BleepingComputer, 1er octobre 2026](https://www.bleepingcomputer.com/news/security/metamask-discloses-security-incident-affecting-its-infrastructure/)
- [MetaMask responds to security incident, exits Ethereum validators as precaution — teiss, 2 octobre 2026](https://www.teiss.co.uk/news/metamask-responds-to-security-incident-exits-ethereum-validators-as-precaution-18251)
