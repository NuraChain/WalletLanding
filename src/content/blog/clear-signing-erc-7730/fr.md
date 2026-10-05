---
title: La signature en clair (ERC-7730) arrive chez Trezor
description: Trezor a activé en septembre 2026 la signature en clair ERC-7730, qui montre ce que fait une transaction au lieu de données brutes. Ce qu'elle couvre, où elle s'arrête.
date: 2026-10-05
tags: actualités, signature
---

Le 9 septembre 2026, Trezor a activé la signature en clair sur ses appareils Safe 3, Safe 5, Safe 7 et Model T, a rapporté Cryptonomist. Au lieu d'un écran d'hexadécimal, l'appareil montre ce que fait une transaction : l'action, les jetons et les montants, et leur destination. Il suit ERC-7730, un standard d'abord développé chez Ledger, formalisé en 2024 et désormais placé sous la garde de l'Ethereum Foundation.

Le plus gros vol de 2026 à ce jour n'impliquait pas de clé volée. Il impliquait une signature correcte sur des données au sujet desquelles le signataire avait été trompé. Ce standard vise cet écart-là.

## Qu'est-ce que la signature à l'aveugle ?

Signer des données que vous ne pouvez pas interpréter. Un appel de contrat est une suite d'octets : un sélecteur de fonction et ses arguments. Un portefeuille incapable de le décoder affiche les octets, ou leur empreinte, et demande l'approbation. Vous approuvez quelque chose, sans pouvoir dire quoi. [C'est ainsi que fonctionne un drainer](/fr/blog/wallet-drainers/) — la demande est réelle, et illisible.

## Comment fonctionne la signature en clair ?

Ceux qui écrivent un contrat publient une description de ses fonctions dans un registre partagé : ce sélecteur veut dire « échange », cet argument est le montant, celui-ci le destinataire. Un portefeuille qui prend en charge le standard va chercher la description et restitue l'appel sous forme de phrase. La signature ne change pas. [Ce qui est signé](/fr/blog/how-transactions-are-signed/), ce sont les mêmes octets ; ce que vous voyez, c'est enfin ce qu'ils veulent dire.

## Quelles sont les limites de la signature en clair ?

- **La couverture.** Un contrat sans description publiée retombe sur un avertissement de signature à l'aveugle. Au lancement chez Trezor, les protocoles couverts étaient 1inch, Aave, Lido, Tether, LiFi et Hyperliquid — un début, pas la chaîne entière.
- **La description est une affirmation.** Elle est aussi honnête que le registre qui la contient, et elle dit comment s'appelle une fonction, pas tout ce que le code du contrat fait ensuite.
- **Une autorisation lisible reste une autorisation.** « Autoriser ce contrat à dépenser des USDT sans limite », en toutes lettres, est [la même permission](/fr/blog/token-approvals/) qu'en hexadécimal.
- **Elle n'aide que si vous la lisez.**

Nura signe sur votre appareil, comme tout portefeuille non custodial, et quoi qu'un portefeuille vous montre, la règle est la même : si vous ne pouvez pas dire ce que fait une demande, ne l'approuvez pas. Son code est sous licence MIT, si bien que l'écran qu'il construit est quelque chose que vous pouvez lire plutôt que croire sur parole.

La signature en clair ne rend pas une transaction sûre. Elle la rend lisible, et lire est la partie qui vous a toujours incombé.

## Sources

- [Trezor ERC-7730 signing enhances hardware wallet security — Cryptonomist, 9 septembre 2026](https://en.cryptonomist.ch/2026/09/09/trezor-erc-7730-signing/)
