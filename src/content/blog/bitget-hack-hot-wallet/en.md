---
title: In the Bitget hack, no key was stolen
description: On 24 September 2026 about $350 million left Bitget's hot wallets. The exchange says no key was taken — its signer was shown false data. Why that matters.
date: 2026-10-05
tags: news, signing
---

At 18:31 UTC on 24 September 2026, Bitget detected transfers it had not intended leaving its hot and warm wallets. The exchange put the loss at $351.6 million; later reporting put it nearer $387 million. It paused withdrawals and said the loss fell within its $464 million User Protection Fund. Those details are from TRM Labs' account of 25 September, which also noted that Bitget's chief executive called North Korean involvement "very likely", while TRM itself stopped short of attributing the attack.

It is the largest crypto theft of 2026 so far. The detail that deserves the attention is how it was done.

## How was Bitget hacked?

By Bitget's account, nobody stole a private key. Attackers got into a backend system connected to its wallet infrastructure, spoofed the transaction data, and triggered the exchange's own approval process. The keys did their job perfectly. They signed what they were given.

This is the shape of a [wallet drainer](/blog/wallet-drainers/) at institutional scale. The cryptography holds; what fails is the gap between what the signer is shown and what the signature authorises. [A signature approves a message](/blog/how-transactions-are-signed/), not an intention.

## Are funds on an exchange safe?

Bitget says customers are covered by its fund. Notice what kind of safety that is: a company deciding to cover a loss out of its own reserves. It works when the fund is bigger than the hole. A balance on an exchange is a claim on the exchange, and the withdrawal button is a service it can pause — which it did.

## What does this change if you hold your own keys?

Nothing about the arrangement, and a good deal about the habit.

- Your wallet has the same weakness in miniature: it signs what you approve. Read the prompt as if it were the transfer, because it is.
- A hot wallet is hot whoever runs it. [Keys on a machine that goes online](/blog/hot-vs-cold-wallets/) are exposed to whatever that machine is exposed to.
- Keep on an exchange what you are trading. Hold the rest yourself.

Nura is the other arrangement. Keys are derived and held on your device and transactions are signed there; there is no account and no server holding your phrase. There is also no protection fund. What you sign is final, and it is yours to read.

## Sources

- [Bitget loses USD 351.6 million in hot wallet breach in likely North Korea attack — TRM Labs, 25 September 2026](https://www.trmlabs.com/resources/blog/bitget-loses-usd-3516-million-in-hot-wallet-breach-in-likely-north-korea-attack)
- [Circle and Tether freeze stablecoins tied to Bitget hack, but most funds slip away — Decrypt, 25 September 2026](https://decrypt.co/379365/circle-tether-freeze-stablecoins-bitget-hack)
