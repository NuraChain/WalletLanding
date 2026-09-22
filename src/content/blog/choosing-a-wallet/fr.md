---
title: Ce qu'il faut vérifier avant de confier ses clés
description: Pas un classement. Une courte liste de questions dont les réponses sont des faits, et que la plupart des pages produit n'énoncent jamais vraiment.
date: 2026-09-21
tags: portefeuilles, checklist
---

Tous les portefeuilles se disent sûrs. Cette affirmation n'est pas vérifiable, donc elle ne sert à rien. Voici les questions qui, elles, ont une réponse.

## Où vit la clé ?

La première question, et l'essentiel de la réponse. La clé privée est-elle dérivée et gardée sur votre appareil, ou un serveur la détient-il, ou en détient-il une part ? « Non dépositaire » est employé assez librement pour qu'il vaille la peine de chercher la phrase qui dit clairement où est la clé et ce qui quitte l'appareil.

## Pouvez-vous lire le code ?

Un dépôt ouvert ne garantit pas qu'on l'ait audité. Ce qu'il garantit, c'est que l'affirmation sur la clé peut être vérifiée par quelqu'un d'autre que ceux qui la formulent. Un portefeuille fermé vous demande d'accepter la même affirmation par confiance.

## Qu'est-ce qui protège le secret stocké ?

Quelque chose, sur le disque, contient votre phrase. Cherchez les détails : quel chiffrement la protège, et comment est hachée la phrase secrète qui l'ouvre. Une fonction à mémoire dure comme Argon2id rend le devinage coûteux ; un simple hachage non. Le flou, ici, est déjà une réponse.

## Que se passe-t-il si vous perdez l'appareil ?

Renseignez-vous avant que cela compte. Une phrase de récupération standard se restaure aussi dans d'autres portefeuilles, ce qui veut dire que vous n'êtes pas prisonnier de cette application. Un dispositif propre à un seul éditeur peut être plus pratique et mérite d'être compris entièrement à l'avance.

## Fait-il ce dont vous avez besoin, sans extras ?

Envoyer et recevoir, changer de réseau, se connecter à une dApp. Les produits ajoutés — cartes, rendement, trading — sont du code supplémentaire près de votre clé et, souvent, des contreparties supplémentaires.

Nura répond à tout cela de la même façon dans toutes les langues : clés sur l'appareil, phrase chiffrée avec AES-GCM, phrase secrète hachée avec Argon2id, licence MIT, aucun compte et aucun serveur qui garde quoi que ce soit. Vous n'avez pas à le croire sur parole — le dépôt est là.
