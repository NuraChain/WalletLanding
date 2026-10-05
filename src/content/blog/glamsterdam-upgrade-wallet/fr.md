---
title: Glamsterdam, et ce que votre portefeuille doit faire
description: La mise à niveau Glamsterdam d'Ethereum atteint le testnet Sepolia le 6 octobre 2026. Ce qui change ou non, et pourquoi « mettez à niveau vos ETH » est une arnaque.
date: 2026-10-05
tags: actualités, gas
---

La prochaine mise à niveau d'Ethereum, Glamsterdam, s'active sur le réseau de test Sepolia le 6 octobre 2026 à 13 h 53 UTC, d'après l'annonce de l'Ethereum Foundation rapportée par crypto.news le 29 septembre. Un second testnet, Hoodi, est provisoirement prévu pour le 27 octobre. Il n'y a pas encore de date pour le réseau principal : ethereum.org donne le quatrième trimestre 2026 comme objectif et le signale comme non confirmé.

Chaque mise à niveau produit deux choses — un changement du réseau, et une vague de messages vous disant de faire quelque chose à ce sujet. Seule la première est réelle.

## Que change Glamsterdam ?

Trois choses, dont aucune dans votre portefeuille :

- **La construction des blocs entre dans le protocole.** Aujourd'hui, des constructeurs spécialisés assemblent la plupart des blocs par un arrangement extérieur aux règles de la chaîne. Glamsterdam inscrit cet arrangement dans le protocole (EIP-7732).
- **Les blocs déclarent ce qu'ils touchent.** Les listes d'accès au niveau du bloc (EIP-7928) consignent les comptes et le stockage qu'un bloc utilise, ce qui permet aux nœuds de traiter les transactions en parallèle.
- **Le gas change de prix.** Plusieurs opérations changent de coût. La Fondation a prévenu que les applications qui s'appuient sur des limites de gas codées en dur pourraient devoir être modifiées — une note pour les développeurs, pas pour les détenteurs. [Ce que des frais paient réellement](/fr/blog/gas-fees-explained/) reste identique.

## Dois-je mettre à niveau mon portefeuille ou mes ETH ?

Non. Une mise à niveau du réseau change les règles que suivent les nœuds. Votre adresse, votre clé et votre solde ne sont ni migrés, ni convertis, ni réémis. Il n'y a pas de « nouvel ETH ». Ceux qui doivent agir avant le 6 octobre sont ceux qui font tourner des nœuds Sepolia.

## Comment fonctionnent les arnaques à la mise à niveau ?

Elles empruntent la date. Un message arrive — un e-mail, une réponse, une fenêtre surgissante sur un site qui a l'air correct — disant que votre portefeuille doit être « mis à niveau » ou « synchronisé » avant le fork, avec un lien. Le lien demande une signature ou votre phrase de récupération. C'est un [drainer](/fr/blog/wallet-drainers/) ordinaire, habillé de l'actualité du mois.

- Aucune mise à niveau du réseau ne vous a jamais demandé de saisir une phrase de récupération.
- Aucune mise à niveau du réseau n'exige une signature de votre portefeuille.
- Si votre application de portefeuille a besoin d'une mise à jour, elle arrive par la voie que ses mises à jour ont toujours prise.

Nura est un portefeuille Ethereum, c'est donc le réseau auquel il envoie ses transactions. La mise à niveau change ce réseau, pas la phrase sur votre appareil — qui reste là où elle était, chiffrée avec AES-GCM, sans serveur qui en détienne une copie.

Le fork a lieu sur la chaîne. Tout ce qui arrive dans votre boîte de réception est autre chose.

## Sources

- [Ethereum will test a major speed upgrade on Oct. 6 — crypto.news, 29 septembre 2026](https://crypto.news/ethereum-will-test-a-major-speed-upgrade-on-oct-6/)
