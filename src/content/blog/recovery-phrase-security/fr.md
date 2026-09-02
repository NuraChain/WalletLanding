---
title: Votre phrase de récupération est le portefeuille
description: Douze mots ne sont pas un mot de passe. Ils sont le portefeuille lui-même, et doivent être traités comme tel.
date: 2026-05-12
tags: phrase de récupération, sauvegarde
---

Un mot de passe protège un compte qui existe ailleurs. Une phrase de récupération ne protège rien : elle _est_ la chose. Avec ces mots, n’importe quelle application de portefeuille, sur n’importe quel appareil, reconstruit toutes les clés que vous avez utilisées dans ce portefeuille.

## D’où viennent ces mots

La phrase est une façon compacte d’écrire un très grand nombre aléatoire. Le portefeuille choisit ce nombre, le fait correspondre à des mots d’une liste fixe, puis en dérive vos clés privées — les mêmes clés, dans le même ordre, à chaque fois. C’est pourquoi la phrase restaure un portefeuille au lieu de simplement le déverrouiller.

Cela veut aussi dire que ces mots ne sont ni un indice ni un surnom. Ils sont le secret lui-même, écrit sous une forme que l’on recopie à la main sans faute de frappe.

## Ce qui en découle

- **Notez-la hors ligne.** Une capture d’écran est un fichier, et les fichiers se synchronisent.
- **Ne la saisissez jamais sur un site web.** Aucun support légitime ne la demande, jamais.
- **Testez la sauvegarde une fois.** Restaurez-la sur une installation neuve avant qu’il n’y ait quoi que ce soit en jeu.
- **Deux copies, deux endroits.** La perte courante n’est pas le vol : c’est une seule copie dans un seul tiroir.

## Ce qu’une application peut et ne peut pas faire

Sur l’appareil, Nura chiffre la phrase de récupération en AES-GCM avant de la stocker, et hache avec Argon2id le mot de passe qui la déverrouille — une fonction délibérément lente et gourmande en mémoire, pour rendre la devinette coûteuse.

Ce qu’aucune application ne peut faire, c’est protéger une phrase que vous avez déjà donnée, ou reproduire celle que vous n’avez jamais notée. Le chiffrement sur l’appareil défend la copie qui s’y trouve. Votre copie manuscrite, elle, est défendue par l’endroit où vous la rangez.

Traitez ces mots comme vous traiteriez un titre de propriété. Ils en sont bien plus proches que d’un mot de passe.
