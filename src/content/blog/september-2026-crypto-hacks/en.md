---
title: September 2026 crypto hacks, taken apart
description: September 2026 was the year's worst month for crypto theft, at more than $766 million. Two incidents made up over 90% of it, and neither was a user losing a key.
date: 2026-10-05
tags: news, self-custody
---

September 2026 was the worst month of the year for crypto theft. PeckShield counted 55 incidents and $766.5 million lost; CertiK counted 97 incidents and $768.4 million, as Cryptonomist reported on 1 October. Two trackers, counting differently, landed within two million dollars of each other. CertiK's running total for the year stood at $2.68 billion across 656 incidents.

A number that large reads like a reason to trust nothing. It is more useful taken apart.

## What were the biggest crypto hacks of September 2026?

Two events account for about $708 million of the total:

- **Bitget, 24 September.** About $388 million by these trackers' count, from the exchange's hot and warm wallets.
- **Liquid Network, 6 September.** About $320 million from a Bitcoin sidechain, most of it later returned.

Everything else that month — dozens of incidents — came to roughly $60 million together. The three largest of those were between $5.9 million and $7.8 million each.

## What do the two big ones have in common?

Neither was a person losing their key. One was an exchange's own signing process [approving transfers it had been shown false data about](/blog/bitget-hack-hot-wallet/). The other was a flaw in the software that a federation of companies runs to [hold bitcoin on its users' behalf](/blog/liquid-network-exploit/). In both, people had handed custody to a system, and the system was what failed.

That is the pattern in most months. The headline figure is dominated by a few large pools of other people's assets, because that is where a single success pays most.

## Does that make self-custody safer?

It makes the risks different, and the statistics only show one kind well. Losses from [signing something you should not have](/blog/wallet-drainers/), or from a recovery phrase kept badly, are small individually, rarely reported, and do not make a monthly chart. They are real, and they are the ones you personally control.

- Money held by a system is exposed to that system's worst day.
- Money held by a key is exposed to how the key is kept and what it signs.
- Choosing self-custody is choosing the second list. It is shorter, and all of it is yours.

Nura is on the second list. The recovery phrase is encrypted with AES-GCM and stays on your device; the passphrase that unlocks it is hashed with Argon2id; there is no account and no server holding a copy. None of that reads a prompt for you.

## Sources

- [September 2026 crypto hacks cost $766 million, the year's worst month — Cryptonomist, 1 October 2026](https://en.cryptonomist.ch/2026/10/01/crypto-hacks-september-2026/)
