---
title: Pourquoi vos jetons ne sont pas dans votre portefeuille
description: Un solde ERC-20 est une ligne dans un contrat. Ce que votre portefeuille détient, c’est la clé qui peut la modifier.
date: 2026-08-11
tags: ERC-20, jetons
---

Votre portefeuille affiche un solde de jetons, on a donc l’impression qu’ils sont dedans. Ils n’y sont pas, et ne l’ont jamais été.

## Où vit le solde d’un jeton

Un jeton ERC-20 est un contrat intelligent, et ce contrat tient un registre d’adresses et de montants. Posséder 100 unités d’un jeton signifie que le contrat contient une ligne disant que votre adresse en détient 100. Votre portefeuille lit cette ligne et l’affiche.

Ce que le portefeuille détient réellement, c’est la clé privée de cette adresse — la seule clé capable d’autoriser une modification de la ligne.

C’est pourquoi :

- **Un jeton peut apparaître sans que vous fassiez rien.** N’importe qui peut inscrire votre adresse dans le registre de son propre contrat. Les jetons non sollicités ne sont pas une intrusion. Ignorez-les.
- **Ajouter un jeton est un changement d’affichage.** Le solde existait avant que l’application ne le liste, et le masquer ne déplace rien.
- **Une adresse, plusieurs réseaux.** La même adresse fonctionne sur chacun, mais un solde sur un réseau n’est pas un solde sur un autre. Le contrat appartient à un seul réseau.

## Les autorisations, voilà ce qu’il faut surveiller

Pour qu’un contrat puisse déplacer vos jetons, vous lui accordez une allocation. Cette permission reste en place après la transaction qui l’a créée, souvent pour un montant illimité, jusqu’à ce que vous la révoquiez. La plupart des pertes de jetons qui ne sont pas des pertes de phrase sont des pertes par autorisation.

Lisez les autorisations avec autant d’attention que les transferts. C’est la seule chose que vous signez et qui continue d’agir ensuite.

## Ce que cela signifie pour le portefeuille

Nura envoie et reçoit des pièces natives et des jetons ERC-20, et passe d’un réseau à l’autre. Ce qu’il garde, c’est la clé ; ce que la chaîne garde, c’est le solde. L’écran est une vue du registre, pas un contenant.

Une fois cela clair, le reste suit — y compris pourquoi rien ne bouge sans une signature de la clé qui se trouve sur votre appareil.
