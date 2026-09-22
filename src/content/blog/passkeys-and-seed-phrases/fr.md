---
title: Ce qu'une passkey remplace, et ce qu'elle ne remplace pas
description: Les passkeys sont une meilleure façon de garder une clé que la mémoire d'une personne. Ce n'est pas une façon de ne plus en avoir besoin.
date: 2026-09-17
tags: passkeys, phrase de récupération
---

Les passkeys sont arrivées dans les portefeuilles, généralement présentées comme la fin de la phrase de récupération. Le mécanisme est réellement bon, et cette description est légèrement fausse d'une manière qui mérite d'être démêlée.

## Ce qu'est une passkey

Une passkey est une paire de clés créée par votre appareil et conservée dans son matériel sécurisé, déverrouillée par une empreinte, un visage ou un code. La moitié privée est conçue pour ne jamais sortir. Surtout, elle est liée à un seul domaine : un site sosie ne peut donc pas la demander — le navigateur ne proposera tout simplement pas une passkey pour un domaine pour lequel elle n'a pas été créée. Cela ferme l'hameçonnage d'identifiants de façon structurelle, et non en vous avertissant.

## Ce qui change dans un portefeuille

Utilisée comme clé de signature d'un compte intelligent, une passkey supprime l'étape que les gens ratent le plus : noter douze mots et les garder en sécurité pendant des années. Rien à recopier à la main, rien à capturer en photo, rien à taper dans un chat d'assistance.

## Ce qu'elle ne supprime pas

- **Une clé existe toujours.** Elle est passée de votre écriture à une puce. C'est un meilleur endroit, et cela reste une chose unique qui peut se perdre.
- **La récupération devient le choix de conception de quelqu'un d'autre.** Perdez tous les appareils qui portent la passkey et la suite dépend du dispositif : des gardiens, une copie synchronisée dans un compte de plateforme, une issue de secours. Une phrase de récupération, au moins, est explicite sur qui en est responsable.
- **Une passkey synchronisée n'est privée que dans la mesure où le compte qui la synchronise l'est.** Confort et garde tirent ici en sens inverse.
- **Signer reste signer.** Une passkey approuve une transaction malveillante aussi facilement qu'une honnête.

La phrase n'est pas le problème. Mal ranger un secret est le problème, et il y a plus d'une façon de le résoudre. Choisissez celle dont vous préférez vivre le mode de défaillance — et sachez lequel c'est avant d'en avoir besoin.
