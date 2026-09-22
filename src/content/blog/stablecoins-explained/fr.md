---
title: Un stablecoin reste la promesse de quelqu'un
description: Détenir des dollars sur une chaîne n'est pas détenir des dollars. Le jeton est une créance, et cette créance a un émetteur.
date: 2026-09-07
tags: stablecoins, jetons
---

Les stablecoins sont la partie de la crypto que les gens utilisent vraiment, parce qu'ils résolvent un problème évident : déplacer de la valeur sans la voir changer de prix en chemin. Il vaut la peine d'être exact sur ce qu'ils sont.

## La mécanique

Un stablecoin adossé à une monnaie fiduciaire est un jeton ERC-20 comme un autre — une ligne dans le registre d'un contrat disant que votre adresse détient un montant. Ce qui maintient son prix est entièrement hors chaîne : une société détient des réserves et promet d'échanger un jeton contre un dollar.

Le jeton suit donc le dollar pour la même raison qu'un billet vaut un dollar. Quelqu'un en répond, et tout le monde croit qu'il en répondra.

## Ce que cela implique

- **L'émetteur est une contrepartie.** Votre clé contrôle toujours le jeton, mais la valeur qui le soutient dépend d'un bilan que vous ne contrôlez pas et que vous ne pouvez généralement pas inspecter directement.
- **Beaucoup peuvent geler.** La plupart des grands stablecoins adossés au fiat intègrent une liste de blocage que l'émetteur peut utiliser. C'est une différence réelle avec la monnaie native du réseau, que personne ne peut geler.
- **Un même nom, plusieurs jetons.** Un stablecoin existe séparément sur chaque réseau, à une adresse de contrat différente. Envoyer à la bonne adresse sur le mauvais réseau est l'une des façons les plus courantes de perdre des fonds.
- **Il vous faut toujours la monnaie native.** Les frais ne sont jamais payés dans le stablecoin. Un compte qui ne détient que cela ne peut rien déplacer.

## Les algorithmiques sont autre chose

Un stablecoin adossé à des réserves tombe si l'émetteur tombe. Celui qui tient son prix par un mécanisme — émission et destruction contre un autre jeton — peut tomber tout seul, et l'a fait, vite.

L'auto-conservation vous donne le contrôle de la clé. Elle ne vous donne pas le contrôle de ce sur quoi le jeton est une créance. Savoir lequel des deux vous détenez, c'est toute l'affaire.
