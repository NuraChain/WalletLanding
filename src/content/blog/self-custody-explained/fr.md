---
title: Ce que veut vraiment dire l’auto-conservation
description: La conservation tient à une seule question — qui détient la clé privée — et tout le reste en découle.
date: 2026-04-14
tags: auto-conservation, clés
---

Tout portefeuille répond à une question : qui détient la clé privée. Tout ce dont on discute ensuite — plateformes d’échange, phrases de récupération, appareils matériels — découle de cette unique réponse.

## Deux réponses

Quand une plateforme ou un portefeuille hébergé détient la clé, votre solde est une ligne dans leur base de données. C’est une créance sur eux. Il se comporte comme un solde bancaire : ils peuvent le geler, ils peuvent le perdre, et on peut les contraindre à le remettre. En échange, vous obtenez une réinitialisation de mot de passe et quelqu’un à appeler.

Quand c’est vous qui détenez la clé, le solde est sur la chaîne et la clé sur votre appareil. Personne ne peut le déplacer sans elle. Et il n’y a personne à appeler non plus.

## Ce qui change réellement

- **Récupération.** Il n’y a pas de réinitialisation. Une phrase de récupération que vous ne pouvez pas produire, c’est un portefeuille que personne n’ouvre — vous compris.
- **Approbation.** Rien ne bouge sans une signature faite par votre clé. Un site peut demander ; vous seul pouvez signer.
- **Exposition.** Votre risque passe de _leur_ sécurité à _votre_ sauvegarde.

C’est ce dernier point que l’on sous-estime. L’auto-conservation ne supprime pas le risque : elle le déplace, du bilan d’une entreprise vers un papier dans votre tiroir.

## Pourquoi cela en vaut quand même la peine

Parce que les modes de défaillance deviennent des choses que vous voyez et sur lesquelles vous pouvez agir. L’insolvabilité d’une plateforme reste invisible jusqu’à l’arrêt des retraits. Votre propre sauvegarde, elle, se vérifie ce soir.

Nura est en auto-conservation : la phrase de récupération est chiffrée en AES-GCM avant d’être stockée, le mot de passe qui la déverrouille est haché avec Argon2id, et les transactions sont signées sur l’appareil. Pas de compte, pas de garde, pas de serveur qui conserve votre phrase.

Autrement dit, la suite de ces notes porte sur la partie qui vous revient désormais : la clé, la phrase, et ce qui se passe au moment de signer.
