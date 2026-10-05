---
title: La faille Coldcard, ou quand les dés sont faussés
description: Une erreur de firmware de 2021 n'a laissé à certaines seeds Coldcard que 40 bits d'aléa. En 2026, environ 1 816 BTC ont été pris. Ce qu'est vraiment la force d'une seed.
date: 2026-10-05
tags: actualités, phrase de récupération
---

Entre le 30 juillet et le 4 août 2026, des attaquants ont pris environ 1 816 BTC — quelque 116 millions de dollars — sur plus de 5 200 adresses dont les clés avaient été générées sur des portefeuilles matériels Coldcard. TRM Labs, dans son compte rendu du 5 août, en a fait remonter la cause à la version 4.0.1 du firmware, publiée en mars 2021 : une erreur de configuration de compilation a conduit certains appareils à se rabattre de la source matérielle de nombres aléatoires sur une source logicielle faible. Des seeds conçues pour porter 128 bits d'aléa pouvaient n'en avoir que 40.

Aucun appareil n'a été touché. Aucune phrase n'a été vue. Les attaquants ont deviné.

## Qu'est-ce qui a mal tourné dans le firmware de Coldcard ?

Une phrase de récupération est un grand nombre aléatoire écrit sous forme de mots. Toute sa force tient à ce que ce nombre aurait pu être n'importe lequel d'un ensemble astronomiquement grand. Si le générateur qui le produit est faible, l'ensemble est petit, et un petit ensemble se parcourt. Quarante bits, c'est environ mille milliards de possibilités — à la portée d'un matériel ordinaire. La première vague a pris 594 BTC en 25 minutes.

## Pourquoi la mise à jour du firmware ne corrige-t-elle pas le problème ?

Parce que la faille était dans la façon dont les seeds étaient fabriquées, pas dans la façon dont l'appareil fonctionne. Comme le dit TRM, la mise à jour corrige le problème pour les portefeuilles créés ensuite, mais ne protège pas ceux dont la seed a été générée sous le firmware vulnérable. Une telle seed reste le même nombre faible — sur n'importe quel appareil, dans n'importe quel portefeuille où vous la restaurez. Le seul remède est de créer une nouvelle seed et d'y déplacer les fonds.

## Les portefeuilles matériels sont-ils encore sûrs ?

[La distinction qui compte](/fr/blog/hot-vs-cold-wallets/) — savoir si une clé s'est déjà trouvée sur une machine qui se connecte à internet — reste intacte. Ici, la défaillance était autre : la clé était devinable avant même d'être stockée. Un appareil peut garder un secret à la perfection alors qu'on lui en a confié un mauvais.

## Ce qu'il faut en retenir

- Une seed n'est jamais plus forte que l'aléa du moment où elle a été créée. Rien ne l'améliore ensuite.
- [La phrase est le portefeuille](/fr/blog/recovery-phrase-security/), défauts compris. Restaurer ailleurs une phrase faible, c'est restaurer la faiblesse.
- Une phrase standard est aussi ce qui vous permet de partir. Passer à une seed neuve ne demande rien d'autre qu'un portefeuille compatible.
- La faille est restée cinq ans dans un firmware publié avant d'être exploitée. Qu'un code soit disponible à la lecture ne veut pas dire qu'il a été lu.

Nura est un portefeuille Ethereum, et cette note n'affirme rien au sujet de sa source de nombres aléatoires. Vérifiez-la — c'est à cela que sert un dépôt sous licence MIT. Ce que Nura énonce, en revanche, c'est ce qui se passe une fois qu'une phrase existe : elle est chiffrée avec AES-GCM avant d'être stockée, et la phrase secrète qui la déverrouille est hachée avec Argon2id.

## Sources

- [The largest hardware wallet exploit of 2026: inside the USD 116 million Coldcard hack — TRM Labs, 5 août 2026](https://www.trmlabs.com/resources/blog/the-largest-hardware-wallet-exploit-of-2026-inside-the-usd-116-million-coldcard-hack)
