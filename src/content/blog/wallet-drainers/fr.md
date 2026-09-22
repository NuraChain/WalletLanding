---
title: Comment un drainer vide réellement un portefeuille
description: Rien n'est forcé. On vous montre une demande, vous l'approuvez, et l'approbation fait exactement ce qu'elle annonçait.
date: 2026-08-26
tags: arnaques, signature
---

Un drainer de portefeuille n'est pas une faille exploitée contre votre portefeuille. C'est un site web qui vous amène à signer quelque chose, et ce quelque chose est réel. La cryptographie fonctionne parfaitement du début à la fin. C'est sur ce point qu'il faut s'arrêter.

## La forme que ça prend

Vous arrivez sur un site — depuis une publicité, une réponse, un message au sujet d'un mint, d'un airdrop ou d'un remboursement. Il ressemble au vrai, souvent au point que le domaine ne diffère que d'un caractère. Vous connectez votre portefeuille, ce qui en soi ne cède rien. Puis on vous demande de signer.

Ce qui est demandé est en général l'une de trois choses :

- **Une autorisation**, donnant à son contrat la permission de déplacer l'un de vos jetons.
- **Une signature hors chaîne**, comme un permit ou une permission groupée, qui ne coûte pas de gaz et n'affiche donc aucuns frais — et qui accorde le même pouvoir.
- **Un transfert**, déguisé en réclamation ou en étape de vérification.

Vous approuvez. Le contrat fait alors ce pour quoi il a été autorisé, tout de suite ou des semaines plus tard.

## Pourquoi cela marche sur des gens prudents

Se connecter est inoffensif, donc la première étape paraît sûre. La demande de signature est l'étape dangereuse, et c'est aussi la plus difficile à lire — un bloc opaque d'hexadécimal, ou un message présenté comme « vérifier la propriété ». Une signature sans frais semble moins engageante qu'une transaction. Elle ne l'est pas.

## Les habitudes qui tiennent

- Traitez toute demande de signature comme un transfert tant que vous ne l'avez pas lue.
- Accédez aux dApps par un favori que vous avez enregistré, pas par un lien qu'on vous a envoyé.
- Ne laissez pas l'urgence raccourcir la lecture. Tout drainer est pressé.
- Passez vos autorisations en revue après une visite sur un site nouveau, et révoquez ce que vous ne reconnaissez pas.

Aucun portefeuille ne peut refuser une signature que vous avez choisi de donner. Lire la demande est la défense.
