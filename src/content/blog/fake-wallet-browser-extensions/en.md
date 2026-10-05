---
title: Fake wallet extensions, 59 found in stores
description: In August 2026 researchers at Socket reported 40 malicious Firefox add-ons and 19 for Chrome and Edge posing as crypto wallets, all in the official stores.
date: 2026-10-05
tags: news, scams
---

In August 2026 the security firm Socket disclosed two campaigns of malicious browser extensions, as CryptoTicker reported on 31 August. On Firefox there were 77 linked extensions, 40 of them confirmed malicious, imitating wallets including OKX, Rabby and TronLink. On Chrome and Edge there were 19 more, some mimicking the interfaces of Ledger and Trezor. All of them were in the official extension stores. Mozilla removed the reported add-ons after the report.

A browser extension is one of the most convenient places to keep a wallet and one of the most exposed. This is what the exposure looks like.

## How do fake wallet extensions steal a recovery phrase?

Three ways, in these campaigns alone:

- **A real wallet, rebuilt.** Some were altered builds of the Rabby wallet that intercepted the keys before they were encrypted. They looked and worked like the original, because they mostly were the original.
- **A collector.** Others gathered access credentials and the contents of the clipboard.
- **A drainer.** The Chrome and Edge set removed a security header from every page, stole session tokens and exchange logins, and targeted Ethereum, Solana and Tron wallets.

## How did they get into the official stores?

Nine of the malicious extensions began life as harmless sports apps. They passed review, gathered users, and were later updated with wallet-stealing code. Review looks at a version. An extension is a stream of versions, and your browser installs the next one without asking.

## How to install a wallet extension safely

- Get the link from the wallet's own site or repository, not from a store search. Searching for the name is how you meet the imitations.
- Check the publisher and the exact spelling, character by character.
- Never import an existing recovery phrase into an extension you found, were sent, or were told to try. [That phrase is the wallet](/blog/recovery-phrase-security/).
- Keep the number of extensions small in the browser that holds your wallet. Each one is code running next to it.
- [Ask of an extension what you would ask of any wallet](/blog/choosing-a-wallet/): where the key lives, and whether you can read the code.

Nura's browser extension is listed with its other builds in the project's own repository, which is MIT licensed and open to read. That is the place to get it from. Being open source is not a shield — these attackers used an existing wallet as their raw material. It is what makes the real one checkable.

## Sources

- [Malicious browser extensions steal crypto wallets — CryptoTicker, 31 August 2026](https://cryptoticker.io/en/browser-extensions-wallet-theft/)
