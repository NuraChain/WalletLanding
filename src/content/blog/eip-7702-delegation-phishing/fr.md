---
title: Hameçonnage EIP-7702, un compte vidé en une signature
description: En août 2026, une étude a lié 63 % des autorisations EIP-7702 d'un échantillon à des contrats malveillants. Comment une seule signature de délégation livre tout un compte.
date: 2026-10-05
tags: actualités, comptes intelligents
---

EIP-7702 est arrivé sur Ethereum en 2025. Il permet à un compte ordinaire de pointer vers un morceau de code de contrat et de se comporter comme lui — regroupement, frais parrainés, les commodités d'[un compte intelligent](/fr/blog/smart-accounts-explained/) sans passer à une nouvelle adresse. En août 2026, une recherche présentée à l'USENIX Security Symposium a établi que 63 % des transactions d'autorisation EIP-7702 de son échantillon étaient liées à des contrats malveillants, avec plus de 2,3 millions de dollars de vols confirmés, comme l'a rapporté CryptBull le 21 août.

Un échantillon n'est pas le réseau entier, et le chiffre en dit autant sur ceux qui ont adopté la fonction les premiers que sur la fonction elle-même. Il reste un avertissement légitime au sujet d'une signature bien précise.

## Qu'est-ce qu'une délégation EIP-7702 ?

Un message signé qui dit : désormais, exécutez le code de ce contrat en tant que mon compte. Tant que cette délégation n'est ni remplacée ni effacée, chaque appel à votre adresse exécute ce code, avec vos soldes.

Utilisé honnêtement, ce code est une implémentation de portefeuille bien connue. Utilisé malhonnêtement, c'est un sweeper — un code dont la seule fonction est d'envoyer à quelqu'un d'autre tout ce que le compte détient, et tout ce qui arrivera plus tard.

## En quoi est-ce différent d'un drainer ordinaire ?

Une [autorisation](/fr/blog/token-approvals/) cède un jeton. Une délégation cède le compte. [L'ancienne ruse](/fr/blog/wallet-drainers/) exigeait une signature distincte pour chaque actif. Celle-ci n'en demande qu'une, et elle continue d'agir : les fonds envoyés ensuite à une adresse déléguée peuvent être pris dès leur arrivée.

## À quoi ressemble la demande ?

À une mise à niveau. « Activer les fonctions de compte intelligent. » « Activer les transactions sans gas. » « Réclamer avec gas parrainé. » La demande a la même structure qu'une demande légitime. La seule chose qui diffère est l'adresse vers laquelle on délègue, soit quarante caractères hexadécimaux.

## Comment protéger un compte

- Traitez toute demande d'un site web de déléguer, de mettre à niveau ou d'« activer les fonctions intelligentes » comme vous traiteriez une demande de votre phrase de récupération. La mise à niveau propre à un portefeuille commence dans le portefeuille, pas sur une page vers laquelle on vous a envoyé.
- Si votre portefeuille affiche l'adresse du délégataire, lisez-la. S'il ne montre pas ce que vous autorisez, ne signez pas.
- Une délégation se remplace ou s'efface en en signant une nouvelle. Si vous avez signé quelque chose dont vous doutez, faites-le d'abord, avant d'envoyer quoi que ce soit au compte.
- Si une délégation est apparue parce que votre clé ou votre phrase a fuité, l'effacer ne change rien. Ce compte est perdu pour de bon et ne doit plus jamais recevoir de fonds.

Nura est un portefeuille Ethereum non custodial : la clé est sur votre appareil et signe ce que vous approuvez. Cette note n'affirme rien sur les types de signature qu'il prend en charge. La règle ne dépend pas du portefeuille — une signature que vous ne pouvez pas lire est un transfert que vous n'avez pas vérifié.

## Sources

- [EIP-7702 wallet delegation faces scrutiny after phishing research — CryptBull, 21 août 2026](https://www.cryptbull.net/2026/08/21/eip-7702-wallet-delegation-faces-scrutiny-after-phishing-research/)
