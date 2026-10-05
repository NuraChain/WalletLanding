---
title: Piratage de Bitget, aucune clé n'a été volée
description: Le 24 septembre 2026, environ 350 millions de dollars ont quitté les portefeuilles chauds de Bitget. Aucune clé volée selon elle, son signataire a vu de fausses données.
date: 2026-10-05
tags: actualités, signature
---

Le 24 septembre 2026 à 18 h 31 UTC, Bitget a détecté des transferts qu'elle n'avait pas voulus au départ de ses portefeuilles chauds et tièdes. La plateforme a chiffré la perte à 351,6 millions de dollars ; des informations ultérieures l'ont située plus près de 387 millions de dollars. Elle a suspendu les retraits et déclaré que la perte restait dans les limites de son fonds de protection des utilisateurs, doté de 464 millions de dollars. Ces détails viennent du compte rendu de TRM Labs du 25 septembre, qui notait aussi que la direction générale de Bitget jugeait une implication nord-coréenne « très probable », alors que TRM s'est gardé d'attribuer l'attaque.

C'est le plus gros vol de crypto de 2026 à ce jour. Le détail qui mérite l'attention, c'est la façon dont il a été commis.

## Comment Bitget a-t-elle été piratée ?

D'après Bitget, personne n'a volé de clé privée. Les attaquants ont pénétré un système back-end relié à son infrastructure de portefeuilles, falsifié les données de transaction et déclenché le processus d'approbation de la plateforme elle-même. Les clés ont fait leur travail à la perfection. Elles ont signé ce qu'on leur a donné.

C'est la forme d'un [drainer de portefeuille](/fr/blog/wallet-drainers/) à l'échelle d'une institution. La cryptographie tient ; ce qui cède, c'est l'écart entre ce qu'on montre au signataire et ce que la signature autorise. [Une signature approuve un message](/fr/blog/how-transactions-are-signed/), pas une intention.

## Les fonds sur une plateforme d'échange sont-ils en sécurité ?

Bitget dit que ses clients sont couverts par son fonds. Remarquez de quel genre de sécurité il s'agit : une entreprise qui décide de couvrir une perte sur ses propres réserves. Cela marche quand le fonds est plus grand que le trou. Un solde sur une plateforme est une créance sur la plateforme, et le bouton de retrait est un service qu'elle peut suspendre — ce qu'elle a fait.

## Qu'est-ce que cela change si vous détenez vos propres clés ?

Rien au dispositif, et beaucoup à l'habitude.

- Votre portefeuille a la même faiblesse en miniature : il signe ce que vous approuvez. Lisez la demande comme si c'était le transfert, parce que c'est le cas.
- Un portefeuille chaud est chaud, quel que soit celui qui l'exploite. [Des clés sur une machine qui se connecte à internet](/fr/blog/hot-vs-cold-wallets/) sont exposées à tout ce à quoi cette machine est exposée.
- Gardez sur une plateforme ce que vous êtes en train de négocier. Détenez le reste vous-même.

Nura, c'est l'autre dispositif. Les clés sont dérivées et conservées sur votre appareil et les transactions y sont signées ; il n'y a ni compte ni serveur qui détienne votre phrase. Il n'y a pas non plus de fonds de protection. Ce que vous signez est définitif, et c'est à vous de le lire.

## Sources

- [Bitget loses USD 351.6 million in hot wallet breach in likely North Korea attack — TRM Labs, 25 septembre 2026](https://www.trmlabs.com/resources/blog/bitget-loses-usd-3516-million-in-hot-wallet-breach-in-likely-north-korea-attack)
- [Circle and Tether freeze stablecoins tied to Bitget hack, but most funds slip away — Decrypt, 25 septembre 2026](https://decrypt.co/379365/circle-tether-freeze-stablecoins-bitget-hack)
