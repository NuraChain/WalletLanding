---
title: Ce qui se passe quand vous signez une transaction
description: Une signature prouve que votre clé a approuvé un message — sans que la clé aille nulle part.
date: 2026-06-09
tags: signature, transactions
---

« Signer » sonne comme une formalité en bas d’un formulaire. C’est en réalité tout le modèle de sécurité.

## Les étapes

1. **Un message est construit.** Destinataire, montant, réseau, frais, et un nonce pour qu’une même transaction ne puisse pas être rejouée.
2. **Il est haché.** Le message est réduit à une courte empreinte de longueur fixe.
3. **La clé signe l’empreinte.** Les mathématiques des courbes elliptiques produisent une signature qui ne pouvait venir que de cette clé privée.
4. **La signature est diffusée.** Les nœuds la vérifient face à votre adresse publique et, si elle tient, incluent la transaction dans un bloc.

L’étape trois est la plus intéressante. Vérifier une signature ne demande que la clé publique. En produire une demande la clé privée — et la clé n’a jamais besoin de quitter l’appareil pour cela. Ce qui part vers le réseau, c’est le message signé, pas le secret qui l’a signé.

## Pourquoi cela compte en pratique

La frontière est nette. Une dApp peut préparer une transaction, un nœud la relayer, un explorateur l’afficher — aucun ne touche jamais votre clé. Le seul moment qui compte est celui où vous approuvez, sur votre propre appareil.

Cela signifie aussi qu’une signature vaut exactement ce que vaut votre lecture de ce que vous avez signé. La chaîne ne vérifie pas l’intention. Elle vérifie des mathématiques.

- Lisez le destinataire, pas seulement le montant.
- Vérifiez sur quel réseau vous êtes.
- Traitez une autorisation de jetons pour ce qu’elle est : une permission qui survit à la transaction.

Dans Nura, les transactions sont signées sur l’appareil et c’est le résultat signé qui part vers le réseau. La clé privée reste là où elle a été dérivée.

C’est la ligne que trace l’auto-conservation, et la signature est l’endroit où on la voit vraiment.
