---
title: Glamsterdam and what your wallet has to do
description: Ethereum's Glamsterdam upgrade reaches the Sepolia testnet on 6 October 2026. What changes, what does not, and why any "upgrade your ETH" message is a scam.
date: 2026-10-05
tags: news, gas
---

Ethereum's next upgrade, Glamsterdam, activates on the Sepolia test network on 6 October 2026 at 13:53 UTC, according to the Ethereum Foundation's announcement as reported by crypto.news on 29 September. A second testnet, Hoodi, is pencilled in for 27 October. There is no mainnet date yet: ethereum.org lists the fourth quarter of 2026 as a target and marks it unconfirmed.

Every upgrade produces two things — a change to the network, and a wave of messages telling you to do something about it. Only the first is real.

## What does Glamsterdam change?

Three things, none of them in your wallet:

- **Block building moves into the protocol.** Today specialised builders assemble most blocks through an arrangement outside the chain's own rules. Glamsterdam writes that arrangement into the protocol (EIP-7732).
- **Blocks declare what they touch.** Block-level access lists (EIP-7928) record which accounts and storage a block uses, which lets nodes process transactions in parallel.
- **Gas is repriced.** Several operations change cost. The Foundation has warned that applications relying on hard-coded gas limits may need changes — a note for developers, not for holders. [What a fee actually pays for](/blog/gas-fees-explained/) stays the same.

## Do I need to upgrade my wallet or my ETH?

No. A network upgrade changes the rules that nodes follow. Your address, your key and your balance are not migrated, converted or reissued. There is no "new ETH". The people who have to act before 6 October are those running Sepolia nodes.

## How do upgrade scams work?

They borrow the date. A message arrives — an email, a reply, a pop-up on a site that looks right — saying your wallet must be "upgraded" or "synchronised" before the fork, with a link. The link asks for a signature or for your recovery phrase. It is an ordinary [drainer](/blog/wallet-drainers/) wearing this month's news.

- No network upgrade has ever required you to enter a recovery phrase.
- No network upgrade requires a signature from your wallet.
- If your wallet app needs an update, it arrives the way its updates always have.

Nura is an Ethereum wallet, so this is the network it sends transactions to. The upgrade changes that network, not the phrase on your device — which stays where it was, encrypted with AES-GCM, with no server holding a copy.

The fork happens on the chain. Anything that arrives in your inbox is something else.

## Sources

- [Ethereum will test a major speed upgrade on Oct. 6 — crypto.news, 29 September 2026](https://crypto.news/ethereum-will-test-a-major-speed-upgrade-on-oct-6/)
