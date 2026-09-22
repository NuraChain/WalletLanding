---
title: En réalité rien ne traverse un pont
description: Les jetons ne voyagent pas d'un réseau à l'autre. Un côté verrouille quelque chose, l'autre en émet, et la confiance tient les deux ensemble.
date: 2026-09-10
tags: ponts, réseaux
---

Le mot pont donne l'impression que vos jetons marchent d'une chaîne à l'autre. Ils ne le peuvent pas. Un réseau ne connaît que son propre état, et aucun contrat sur une chaîne ne peut lire ni écrire le registre d'une autre.

## Ce qui se passe à la place

Vous envoyez des jetons à un contrat sur le premier réseau, qui les verrouille ou les détruit. Un système qui surveille ce réseau le signale au second, où un autre contrat libère ou émet un montant équivalent vers votre adresse là-bas.

Deux événements séparés sur deux registres séparés, reliés par ce qui les surveille. La nature de ce surveillant est tout le modèle de sécurité.

## C'est pourquoi les pertes arrivent sur les ponts

Certains des plus gros vols de la crypto ont été des vols de ponts, et pas parce que la cryptographie a cédé. Un pont détient une large réserve d'actifs verrouillés d'un côté et peut émettre des actifs de l'autre : qui contrôle le signalement contrôle l'émission. Compromettez les signataires, ou trouvez un défaut dans la vérification, et vous émettez contre rien.

Avant d'en utiliser un, il est légitime de demander qui atteste le transfert : un comité de signataires, un ensemble de validateurs, ou une preuve que la chaîne de destination vérifie elle-même.

## Notes pratiques

- **Le jeton que vous recevez est un autre jeton.** Un actif ponté est son propre contrat sur le réseau de destination, et sa valeur dépend de la solvabilité du pont.
- **Vérifiez le réseau de destination avant de signer**, pas après. Un transfert vers la bonne adresse sur le mauvais réseau est rarement réversible.
- **Il vous faut la monnaie native des deux côtés.** Arriver avec des jetons et sans gaz, c'est rester bloqué.
- **Les routes officielles d'abord.** L'essentiel de l'hameçonnage de ponts est une interface sosie, pas un pont cassé.

Changer de réseau dans un portefeuille est gratuit et instantané. Déplacer de la valeur entre eux n'est ni l'un ni l'autre.
