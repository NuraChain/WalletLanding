---
title: Circle and Tether froze $318K. The rest moved
description: After the Bitget hack, Circle and Tether froze about $318,000 in stablecoins while over 63,000 ETH sat out of reach. What a freeze is, and who can use it.
date: 2026-10-05
tags: news, stablecoins
---

The morning after the Bitget hack, Circle blacklisted one of the thief's addresses in the USDC contract, at 05:00 UTC on 25 September 2026. Tether followed about seven hours later. Between them they froze 99,990 USDC and 218,023 USDT — roughly $318,000 — in a single wallet, as Decrypt reported that day. In other addresses linked to the same attacker sat more than 63,000 ETH that nobody could freeze at all.

Both halves of that are worth understanding. They are the same fact seen from two sides.

## How can a stablecoin be frozen?

USDC and USDT are contracts, and each contract has an owner. Among the functions the owner can call is one that marks an address as blocked. After that the tokens at that address still show as a balance, and every attempt to move them fails. No court sits between the decision and its effect. The issuer calls a function.

[A stablecoin is somebody's promise](/blog/stablecoins-explained/), and this is the promise's other clause. The party that undertakes to redeem your token is also able to stop it moving.

## Why did most of the stolen funds escape?

Because the attacker knew all of this. Decrypt describes a race to convert freezable assets into ETH before the issuers intervened. An issuer can freeze its own token. It cannot freeze Ethereum's native coin, because there is no owner to ask. What was left to freeze was what had not yet been converted.

## Can my own USDT or USDC be frozen?

Yes — in an exchange account, or in a wallet only you control. Self-custody decides who can sign for an address. It does not change the rules inside a token's contract, which apply to every holder alike. In practice issuers act against addresses tied to thefts, sanctions and investigations, not at random. The point is that the ability exists, and holding the key does not remove it.

- Know which of your assets have an administrator and which do not.
- An ERC-20 balance is [a row in someone's contract](/blog/erc20-tokens-explained/). Find out what that contract lets its owner do.
- Be careful what you accept. An address that receives stolen tokens can end up on the same list.

Nura holds the key on your device and sends and receives ERC-20 tokens with it. That is the whole of what a wallet controls. The contract behind a token answers to its issuer — in Nura as in every other wallet.

## Sources

- [Circle and Tether freeze stablecoins tied to Bitget hack, but most funds slip away — Decrypt, 25 September 2026](https://decrypt.co/379365/circle-tether-freeze-stablecoins-bitget-hack)
