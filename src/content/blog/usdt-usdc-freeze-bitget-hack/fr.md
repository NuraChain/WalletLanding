---
title: Circle et Tether ont gelé 318 000 $. Le reste a filé
description: Après le piratage de Bitget, Circle et Tether ont gelé environ 318 000 $ en stablecoins, plus de 63 000 ETH restant hors d'atteinte. Ce qu'est un gel, et qui peut y recourir.
date: 2026-10-05
tags: actualités, stablecoins
---

Le lendemain matin du piratage de Bitget, le 25 septembre 2026 à 05 h 00 UTC, Circle a inscrit l'une des adresses du voleur sur la liste de blocage du contrat USDC. Tether a suivi environ sept heures plus tard. À eux deux, ils ont gelé 99 990 USDC et 218 023 USDT — environ 318 000 dollars — dans un seul portefeuille, comme l'a rapporté Decrypt ce jour-là. Dans d'autres adresses liées au même attaquant se trouvaient plus de 63 000 ETH que personne ne pouvait geler du tout.

Les deux moitiés de cette histoire méritent d'être comprises. C'est le même fait vu de deux côtés.

## Comment peut-on geler un stablecoin ?

L'USDC et l'USDT sont des contrats, et chaque contrat a un propriétaire. Parmi les fonctions que le propriétaire peut appeler, il y en a une qui marque une adresse comme bloquée. Après cela, les jetons à cette adresse apparaissent toujours comme un solde, et toute tentative de les déplacer échoue. Aucun tribunal ne siège entre la décision et son effet. L'émetteur appelle une fonction.

[Un stablecoin est la promesse de quelqu'un](/fr/blog/stablecoins-explained/), et ceci est l'autre clause de la promesse. La partie qui s'engage à rembourser votre jeton est aussi capable de l'empêcher de bouger.

## Pourquoi la plupart des fonds volés se sont-ils échappés ?

Parce que l'attaquant savait tout cela. Decrypt décrit une course pour convertir en ETH les actifs gelables avant que les émetteurs n'interviennent. Un émetteur peut geler son propre jeton. Il ne peut pas geler la monnaie native d'Ethereum, parce qu'il n'y a pas de propriétaire à qui le demander. Ce qu'il restait à geler, c'était ce qui n'avait pas encore été converti.

## Mes propres USDT ou USDC peuvent-ils être gelés ?

Oui — sur un compte de plateforme d'échange comme dans un portefeuille que vous seul contrôlez. L'auto-conservation décide de qui peut signer pour une adresse. Elle ne change pas les règles inscrites dans le contrat d'un jeton, qui s'appliquent à tous les détenteurs de la même façon. En pratique, les émetteurs agissent contre des adresses liées à des vols, des sanctions et des enquêtes, pas au hasard. L'essentiel est que cette capacité existe, et que détenir la clé ne la supprime pas.

- Sachez lesquels de vos actifs ont un administrateur et lesquels n'en ont pas.
- Un solde ERC-20 est [une ligne dans le contrat de quelqu'un](/fr/blog/erc20-tokens-explained/). Renseignez-vous sur ce que ce contrat permet à son propriétaire.
- Faites attention à ce que vous acceptez. Une adresse qui reçoit des jetons volés peut finir sur la même liste.

Nura garde la clé sur votre appareil et s'en sert pour envoyer et recevoir des jetons ERC-20. C'est la totalité de ce qu'un portefeuille contrôle. Le contrat derrière un jeton répond à son émetteur — dans Nura comme dans tout autre portefeuille.

## Sources

- [Circle and Tether freeze stablecoins tied to Bitget hack, but most funds slip away — Decrypt, 25 septembre 2026](https://decrypt.co/379365/circle-tether-freeze-stablecoins-bitget-hack)
