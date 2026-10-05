---
title: La fuite de données clients Trezor n'a pris aucune clé
description: En 2026, une brèche chez le partenaire logistique de Trezor a exposé noms, adresses et téléphones de plus de 80 000 acheteurs. Aucun appareil touché, pourtant cela compte.
date: 2026-10-05
tags: actualités, arnaques
---

En août 2026, Trezor a indiqué qu'une brèche chez ShipMonk, une société qui expédie ses commandes, avait exposé les données de 13 689 clients. Le 5 septembre, l'entreprise y a ajouté environ 67 000 clients aux États-Unis, issus de registres de commandes datant de 2019 à 2021, a rapporté The Hacker News. Ont fuité des noms, des adresses e-mail, des numéros de téléphone, des adresses de livraison et des numéros de commande. La brèche n'a pas affecté la sécurité des portefeuilles matériels de Trezor, et aucune seed de récupération ni clé privée n'était en cause.

Il serait facile de classer cela sous « il ne s'est rien passé ». La brèche n'a ouvert aucun portefeuille. Ce qu'elle a produit, c'est une liste.

## Qu'est-ce qui a été exposé dans la brèche Trezor ?

Une liste de personnes ayant acheté un portefeuille matériel, avec l'endroit où elles vivent et le moyen de les joindre. Les attaquants sont entrés par une faille dans un outil d'analyse utilisé par la société d'expédition — rien à voir avec la cryptographie. Le point le plus faible de la sécurité d'un fabricant de portefeuilles s'est révélé être une base de données chez un partenaire.

## Pourquoi une adresse qui a fuité compte-t-elle si les clés sont en sécurité ?

Parce qu'elle apprend deux choses à un inconnu : que vous détenez probablement de la crypto, et comment vous contacter. Tout ce qui suit s'en sert.

- **Un hameçonnage qui connaît votre nom et votre commande.** Des e-mails, des appels et des courriers se faisant passer pour le fabricant, vous demandant de « vérifier » ou de « sécuriser » votre appareil. Trezor a averti ses clients de s'attendre exactement à cela.
- **De faux remplacements.** Un appareil que vous n'avez pas commandé et qui arrive par la poste, ou des instructions pour saisir votre seed sur un site web.
- **Le genre physique.** Une adresse de domicile attachée à l'achat d'un portefeuille est le point de départ de [la contrainte plutôt que du piratage](/fr/blog/wrench-attacks-crypto-2026/).

## Que faire si mes données ont fuité ?

- Traitez tout message non sollicité au sujet de votre portefeuille comme hostile, quoi qu'il sache de vous.
- Votre seed va dans votre appareil et nulle part ailleurs. Aucune procédure d'assistance n'en a besoin.
- N'utilisez pas un appareil qui arrive sans que vous l'ayez demandé.
- Regardez ce qui d'autre est lié à cette adresse et à ce numéro de téléphone, et séparez-le de votre crypto là où vous le pouvez.

## L'auto-conservation protège-t-elle la vie privée ?

Elle protège les clés. La vie privée dépend de ce que vous avez dû céder en chemin. [Votre phrase de récupération est le portefeuille](/fr/blog/recovery-phrase-security/) — mais votre nom sur une liste de clients est une autre exposition, et aucun chiffrement ne la couvre.

Nura est un téléchargement, pas une livraison : il n'y a aucun compte à créer, aucune adresse de livraison à donner, et aucun serveur qui détienne votre phrase. Cela réduit une exposition. Cela ne vous cache pas — les chaînes publiques sont publiques, et l'endroit où vous achetez de la crypto sait toujours qui vous êtes.

## Sources

- [Trezor says ShipMonk breach exposed 67,000 U.S. customers' data it said was deleted — The Hacker News, 5 septembre 2026](https://thehackernews.com/2026/09/trezor-says-shipmonk-breach-exposed.html)
