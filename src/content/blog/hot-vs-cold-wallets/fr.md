---
title: Chaud, froid, et ce qui change vraiment
description: La différence ne tient pas à la sécurité apparente d'un portefeuille. Elle tient à savoir si la clé s'est déjà trouvée sur une machine connectée.
date: 2026-08-18
tags: stockage, clés
---

On range les portefeuilles en chauds et froids comme si ces étiquettes disaient à quel point le logiciel est prudent. Elles disent quelque chose de bien plus étroit : où se trouve la clé privée au moment où elle signe.

## La vraie ligne

Un portefeuille **chaud** garde la clé sur un appareil connecté à internet — un téléphone, un ordinateur portable. Un portefeuille **froid** la garde sur un appareil qui ne l'est pas, y signe, et ne rend que la signature terminée.

Tout le reste de ce qu'on associe à ces mots découle de ce seul fait. Un portefeuille froid n'est pas plus difficile à voler parce qu'il serait hors ligne par principe ; il l'est parce qu'un logiciel malveillant sur votre ordinateur ne peut pas lire une clé qui n'y a jamais été.

## À quoi chacun sert

- **Le chaud sert à utiliser.** La signature est immédiate, les dApps se connectent, et le prix de ce confort est que la clé partage sa machine avec tout ce que vous exécutez par ailleurs.
- **Le froid sert à conserver.** Chaque signature coûte un geste physique délibéré, ce qui le rend adapté aux montants auxquels vous ne toucherez pas cette semaine.
- **La plupart des gens finissent avec les deux.** Un portefeuille de dépense et un portefeuille de conservation, avec des phrases distinctes, est un partage plus utile que de choisir un camp.

## Ce contre quoi aucun des deux ne protège

Un portefeuille froid signe ce que vous approuvez. Si vous approuvez une transaction malveillante, la clé hors ligne la signe hors ligne et les jetons partent quand même. Le stockage à froid défend la clé, pas votre jugement sur ce qu'il faut signer.

Il en va de même d'un portefeuille chaud qui chiffre ce qu'il stocke. Nura chiffre la phrase de récupération avec AES-GCM et hache la phrase secrète avec Argon2id, ce qui défend la copie présente sur le disque. Cela ne peut pas défendre une signature que vous avez choisi de donner.

Choisissez le stockage en fonction de la menace. Puis lisez ce que vous signez, dans tous les cas.
