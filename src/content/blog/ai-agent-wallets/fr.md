---
title: Portefeuilles d'agents IA. Qui signe si un bot paie ?
description: Les portefeuilles pour agents IA sont arrivés en 2026, les travaux pour les attaquer aussi. Ce que signifie laisser un logiciel dépenser, et comment le limiter.
date: 2026-10-05
tags: actualités, signature
---

En février 2026, Coinbase a lancé ce qu'elle appelle les Agentic Wallets : des portefeuilles destinés à être pilotés par des agents IA plutôt que par des personnes, avec des plafonds de dépense par session et par transaction. Ils fonctionnent avec x402, un protocole qui permet à un logiciel de payer un appel d'API ou une ressource web dans le cadre même de la requête. En mai, des chercheurs publiaient déjà des attaques. Un article, « Five Attacks on x402 Agentic Payment Protocol » (Li, Wang et Wang, 12 mai 2026), décrit cinq attaques pratiques révélant « des faiblesses dans l'autorisation, la liaison, la protection contre le rejeu et le traitement au niveau de la couche web », testées sur des points de terminaison en service, avec des résultats allant du service obtenu sans payer au paiement encaissé sans service.

C'est assez nouveau pour que le vocabulaire ne soit pas encore fixé. La question de fond, elle, est ancienne.

## Qu'est-ce qu'un portefeuille pour agent IA ?

Une clé qu'un logiciel a le droit d'utiliser sans vous demander à chaque fois. Toute la nouveauté est là. Un portefeuille a toujours été une clé, plus une personne qui décide de ce qu'elle signe. Ici, c'est un programme qui décide, dans des limites que quelqu'un a fixées au préalable.

## Pourquoi est-ce risqué ?

Toutes les protections de l'auto-conservation supposent qu'une personne lit la demande. [Lire la demande est la défense](/fr/blog/wallet-drainers/) — et un agent ne lit pas, il traite. Le texte d'une page web peut être écrit pour lui donner des instructions. On peut lui annoncer un prix qu'aucune personne n'accepterait. On peut lui faire payer deux fois, ou payer le mauvais destinataire, et il ne sentira pas que quelque chose cloche.

Les limites sont donc toute la conception. Un plafond par transaction et par jour fait la différence entre un agent qui peut perdre son enveloppe et un agent qui peut tout perdre.

## Comment donner à un logiciel l'accès à des fonds ?

Comme vous donneriez une carte à un inconnu.

- **Un portefeuille séparé, avec sa propre clé.** Jamais la clé qui garde vos économies, et jamais votre phrase de récupération — ni collée dans un prompt, ni dans un fichier de configuration, ni dans la mémoire d'un agent.
- **Seulement ce qu'il peut se permettre de perdre.** Approvisionnez-le pour la tâche, rechargez-le, et considérez que le solde est exposé.
- **Des limites appliquées hors de l'agent.** Une règle dans un [compte intelligent](/fr/blog/smart-accounts-explained/) ou dans le service de portefeuille tient. Une instruction dans le prompt de l'agent ne tient pas.
- **Pas d'autorisations permanentes.** [Une permission qui continue d'agir](/fr/blog/token-approvals/) est pire entre les mains de quelque chose qu'on peut convaincre de s'en servir.
- **Lisez le journal.** L'agent ne vous dira pas qu'il s'est fait berner.

Nura est un portefeuille pour une personne. Les clés sont dérivées et conservées sur votre appareil, et les transactions y sont signées quand vous les approuvez. Si vous expérimentez avec des agents, ce qu'un tel portefeuille peut être de plus utile, c'est celui auquel ils n'ont aucun accès.

## Sources

- [Five Attacks on x402 Agentic Payment Protocol — Li, Wang et Wang, arXiv, 12 mai 2026](https://arxiv.org/abs/2605.11781)
- [Coinbase Unveils Wallet Infrastructure for AI Agents — ForkLog, 12 février 2026](https://forklog.com/en/coinbase-unveils-wallet-infrastructure-for-ai-agents/)
