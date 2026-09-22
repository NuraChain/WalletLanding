---
title: Les comptes intelligents, et ce qu'ils déplacent vraiment
description: Un compte qui est un contrat peut avoir des règles — récupération, plafonds, regroupement. Ce qu'il ne peut pas faire, c'est supprimer la clé en dessous.
date: 2026-09-14
tags: comptes intelligents, clés
---

Il existe deux sortes de comptes sur Ethereum. L'ordinaire est une paire de clés : une adresse dérivée d'une clé privée, sans code et sans autre règle que « une signature valide déplace les fonds ». L'autre est un contrat, et à un contrat on peut dire ce qui compte comme valide.

## Ce que les règles achètent

Parce qu'un compte intelligent décide lui-même quand accepter une instruction, il peut offrir ce qu'une simple clé ne peut pas :

- **Récupération** — désigner des gardiens qui peuvent, ensemble, attribuer une nouvelle clé de signature si l'ancienne est perdue. Le compte survit à la clé.
- **Plafonds** — une limite quotidienne, un délai sur les gros transferts, une liste de destinations autorisées.
- **Regroupement** — autoriser et échanger en une seule confirmation, ce qui supprime toute une classe d'états à moitié faits.
- **Frais payés par un tiers**, ou en jeton, puisque le compte peut accepter une transaction parrainée.

## Ce que cela ne change pas

Le compte exécute toujours ce que ses signataires autorisent. Si vous signez une autorisation malveillante depuis un compte intelligent, elle passe ; on avait dit au contrat d'accepter votre signature, il l'a fait. Gardiens et plafonds réduisent les dégâts d'une clé perdue. Ils ne font rien contre une mauvaise signature.

Et il y a toujours une clé. Elle est peut-être gardée dans l'élément sécurisé de votre téléphone plutôt que dérivée de douze mots, mais quelque chose signe, et ce qui signe est ce qu'il faut protéger.

## Ce qu'il reste d'un portefeuille simple

Un compte à paire de clés n'a pas de coût de déploiement, pas de contrat à qui faire confiance, pas de chemin de mise à jour contrôlé par un tiers, et il se comporte à l'identique sur tous les réseaux. Ce sont de vraies propriétés, pas seulement l'absence de fonctionnalités.

Nura est un portefeuille pour ce type de compte : clés dérivées et gardées sur l'appareil, transactions signées là, phrase de récupération chiffrée avec AES-GCM avant d'être stockée. Simple au sens où il y a moins d'endroits où cela peut mal tourner.
