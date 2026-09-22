---
title: À quoi sert vraiment la tolérance au slippage
description: Le prix que vous obtenez se décide quand votre transaction entre dans un bloc, pas quand vous appuyez sur le bouton. Le slippage est l'écart que vous acceptez.
date: 2026-09-03
tags: échanges, slippage
---

Le cours affiché pour un échange est une prédiction. Entre le moment où votre portefeuille l'affiche et celui où la transaction est incluse dans un bloc, d'autres échangent contre la même réserve, et le prix bouge. La tolérance au slippage, c'est vous qui dites de combien il peut bouger avant que l'échange doive échouer plutôt que s'exécuter.

## Pourquoi cet écart existe

Un échange en chaîne se fait contre une réserve de deux jetons. Le taux vient du rapport entre les deux, donc chaque transaction — y compris celle des autres — le déplace. La vôtre patiente dans la file pendant ce temps.

Mettez la tolérance à zéro et presque rien ne se confirme. Mettez-la trop haut et vous avez accepté d'avance un mauvais prix.

## Le coût d'une tolérance élevée

Une tolérance large est une invitation. Quiconque surveille la file peut placer une transaction devant la vôtre pour pousser le prix jusqu'à la limite de ce que vous avez accepté, laisser votre échange s'exécuter là, puis revenir en arrière. Vous obtenez le pire prix que vous aviez autorisé, et cela ressemble à un mouvement de marché ordinaire.

C'est pourquoi 1 % sur une paire profonde et liquide et 1 % sur une paire étroite ne sont pas la même décision.

## Lire un écran d'échange

- **Taux** — la prédiction.
- **Minimum reçu** — le seul chiffre qui soit une promesse. C'est le taux après application de votre tolérance. Jugez l'opération là-dessus.
- **Impact sur le prix** — de combien votre propre transaction déplace la réserve. Un impact important signifie que la réserve est trop étroite pour la taille échangée, et aucun réglage de tolérance n'y remédie.
- **Frais** — payés dans la monnaie native du réseau, et payés que l'échange réussisse ou échoue.

Réglez la tolérance au plus petit nombre qui laisse passer l'opération, et regardez le minimum reçu avant de signer. C'est ce chiffre-là que vous acceptez réellement.
