---
title: L'ordinateur quantique et votre portefeuille en 2026
description: En septembre 2026, les superviseurs financiers de l'UE ont cité le calcul quantique comme risque pour la cryptographie des blockchains. Ce qui est exposé aujourd'hui, ou non.
date: 2026-10-05
tags: actualités, clés
---

Dans leur rapport sur les risques de l'automne 2026, les trois superviseurs financiers de l'UE — les autorités de la banque, des marchés et des assurances, écrivant conjointement — ont indiqué qu'un ordinateur quantique avancé « pourrait fragiliser certains systèmes cryptographiques largement utilisés pour sécuriser les communications, les transactions, les bases de données et les blockchains », et que de telles menaces « pourraient se concrétiser avant toute application commerciale viable ». Cryptonomist a rapporté le passage le 24 septembre 2026. La feuille de route de la Commission européenne elle-même demande aux États membres de commencer à passer à la cryptographie post-quantique d'ici la fin de 2026, les usages à haut risque devant être protégés d'ici 2030.

Ce sont des régulateurs qui ajoutent un risque à une liste. Ce n'est pas une machine qui casse une clé. Les deux constats comptent.

## Un ordinateur quantique peut-il voler de la crypto aujourd'hui ?

Non. Aucune machine existante ne peut déduire une clé privée d'une clé publique. L'inquiétude porte sur une machine future, et sur le temps que prend un changement de cette ampleur — c'est pourquoi ceux qui planifient sur des décennies soulèvent la question maintenant.

## Quels portefeuilles seraient exposés ?

Les signatures qu'utilisent Ethereum et Bitcoin reposent sur un problème qu'un ordinateur quantique assez grand pourrait résoudre : remonter d'une clé publique à la clé privée. Une adresse est une empreinte de la clé publique, ce qui la cache. Mais la clé publique est révélée quand vous signez. [Chaque transaction que vous envoyez porte une signature](/fr/blog/how-transactions-are-signed/) à partir de laquelle on peut retrouver la clé publique, de sorte qu'un compte Ethereum qui a déjà envoyé une transaction a sa clé publique sur la chaîne pour toujours. Sur Bitcoin, il en va de même des adresses anciennes et réutilisées.

## Qu'est-ce que « récolter maintenant, déchiffrer plus tard » ?

Collecter des données aujourd'hui pour les casser une fois que les outils existeront. Pour les blockchains, il n'y a rien à récolter en secret. Les clés publiques sont publiques, et elles seront toujours là.

## Que peut faire dès maintenant le détenteur d'un portefeuille ?

Très peu, et c'est la réponse honnête. Le remède est un changement des réseaux eux-mêmes : de nouveaux schémas de signature, et un moyen pour les comptes existants d'y passer. Des propositions existent pour Bitcoin comme pour Ethereum, et aucun des deux réseaux n'en a adopté. Quand ils le feront, migrer voudra dire une nouvelle clé.

- N'achetez pas un produit parce qu'il se dit « résistant au quantique ». C'est la chaîne qui décide des signatures qu'elle accepte, pas le portefeuille.
- Ignorez tout message vous disant de déplacer vos fonds en urgence à cause de l'informatique quantique.
- Gardez une phrase de récupération qui se restaure dans des portefeuilles standard, pour pouvoir suivre la migration, quelle qu'elle soit.

Nura n'affirme rien au sujet de la résistance au quantique. C'est un portefeuille Ethereum et il signe de la façon qu'Ethereum exige ; quand le réseau changera ses signatures, tous les portefeuilles devront suivre. Le code est sous licence MIT et ouvert, ce changement sera donc de ceux que vous pouvez lire.

## Sources

- [Quantum computing blockchain threat: EU regulators warn — Cryptonomist, 24 septembre 2026](https://en.cryptonomist.ch/2026/09/24/quantum-computing-blockchain-threat/)
