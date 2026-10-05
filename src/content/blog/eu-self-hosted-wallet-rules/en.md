---
title: Is the EU banning self-custody wallets? No
description: EU rules make exchanges verify self-hosted wallets for transfers over €1,000, and tighten again in July 2027. What applies to you, and what is only a rumour.
date: 2026-10-05
tags: news, self-custody
---

Every few months a headline says the European Union is banning self-custody. It is not. What exists is narrower and worth knowing precisely, because it is the part you will actually meet — at the withdrawal screen of an exchange.

Three texts are involved. This summary follows the analysis published by the legal researcher Panayotis Yannakas in January 2026, and the regulation itself.

## What do EU rules require for self-hosted wallets?

The Transfer of Funds Regulation (2023/1113) applies to crypto-asset service providers — exchanges and custodians — not to you. When one of them sends to, or receives from, a self-hosted address and the amount is over €1,000, it has to take steps to check that its own customer controls that address. The accepted methods include a cryptographic signature from the wallet, a small test transaction, or an equivalent technical proof. Saying "it is mine" is not enough.

So a large withdrawal to your own wallet may come with a request to prove the wallet is yours.

## Is it safe to sign a message to prove I own a wallet?

It can be, and this is where care is needed. A plain text message signed with your key proves control and moves nothing — [a signature is not a payment](/blog/how-transactions-are-signed/) unless what you sign is one. But from a distance the request looks like every phishing prompt there is.

- Start the verification yourself, from the exchange's site, reached by your own bookmark.
- Read what you are asked to sign. It should be readable text naming the exchange and the purpose. It should never be [an approval](/blog/token-approvals/), a transaction, or an unreadable blob.
- No verification needs your recovery phrase.

## What changes in July 2027?

The Anti-Money Laundering Regulation (2024/1624) applies from then. It bars service providers from keeping anonymous accounts and from handling privacy-preserving crypto-assets. By Yannakas's reading it leaves users, and the makers of hardware and software wallets, outside its scope. Self-hosted wallets stay lawful; dealing with one triggers extra checks at the provider.

## Could the rules get stricter?

Possibly. The Transfer of Funds Regulation required the Commission to assess, by 1 July 2026, the risks of transfers involving self-hosted addresses and whether further measures are needed. This note does not report an outcome, because as of 5 October 2026 it has no published one to cite. If the rules move, that is where it will start — and it will again be a rule about what exchanges must do.

Nura is a self-hosted wallet in exactly the sense these texts use: the key is on your device, with no account and no server holding your phrase. That describes the software and is not legal advice. The obligations sit with the exchange you use, and it will tell you what it needs.

## Sources

- [Self-hosted wallets under EU law — Panayotis Yannakas, January 2026](https://blog.yannakas.me/2026/01/self-hosted-wallets-eu-law/)
- [Regulation (EU) 2023/1113 on information accompanying transfers of funds and certain crypto-assets — EUR-Lex](https://eur-lex.europa.eu/eli/reg/2023/1113/oj/eng)
