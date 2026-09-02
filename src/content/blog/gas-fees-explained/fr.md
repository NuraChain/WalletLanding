---
title: Le gas, en clair
description: Pourquoi un transfert coûte ce qu’il coûte, et ce que vous payez réellement en payant des frais.
date: 2026-07-07
tags: gas, frais
---

Chaque transaction demande à des milliers d’ordinateurs d’effectuer le même travail et de s’accorder sur le résultat. Le gas est la façon de mesurer ce travail et de le payer.

## Trois nombres

- **Gas consommé** — la quantité de travail que demande la transaction. Un simple transfert de la pièce native est fixé à 21 000 unités. Un transfert de jeton coûte davantage ; un échange, davantage encore.
- **Prix du gas** — ce que vous payez par unité, en gwei, un milliardième de la pièce native. C’est la part qui bouge avec la demande.
- **Limite de gas** — le plafond que vous fixez. Le dépasser fait échouer la transaction, et le travail déjà effectué est payé quand même.

Les frais valent le gas consommé multiplié par le prix du gas. Le premier nombre dépend de ce que vous faites. Le second, du moment où vous le faites.

## Pourquoi le prix bouge

L’espace de bloc est fini et mis aux enchères en continu. Quand beaucoup veulent entrer en même temps, le prix de l’inclusion monte ; quand la file se vide, il redescend. Rien n’a changé dans votre transaction — c’est la file qui a changé.

## Conséquences pratiques

- Les transferts simples sont bon marché et prévisibles. Les appels de contrat ne sont ni l’un ni l’autre.
- Une transaction échouée coûte quand même du gas. Le réseau a fait le travail avant de découvrir l’échec.
- Attendre est une vraie stratégie. Le même transfert à une heure creuse peut coûter une fraction.
- Les frais se paient dans la pièce native du réseau, jamais dans le jeton que vous déplacez.

Ce dernier point piège tout le monde : un compte qui ne contient que des jetons ne peut pas les déplacer, faute de pouvoir payer le travail. Gardez un peu de pièce native sur tout compte que vous comptez utiliser. C’est le carburant, et rien ne bouge sans lui.
