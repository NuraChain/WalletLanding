---
title: The Coldcard flaw, or when the dice are wrong
description: A 2021 firmware error left some Coldcard seeds with as little as 40 bits of randomness. In 2026 about 1,816 BTC was taken. What a seed's strength really is.
date: 2026-10-05
tags: news, recovery phrase
---

Between 30 July and 4 August 2026, attackers took roughly 1,816 BTC — about $116 million — from more than 5,200 addresses whose keys had been generated on Coldcard hardware wallets. TRM Labs, in its account of 5 August, traced the cause to firmware version 4.0.1, released in March 2021: a build configuration error caused some devices to fall back from the hardware random number source to a weak software one. Seeds designed to carry 128 bits of randomness could have as little as 40.

Nobody's device was touched. Nobody's phrase was seen. The attackers guessed.

## What went wrong in the Coldcard firmware?

A recovery phrase is a large random number written as words. Its whole strength is that the number could have been any one of an astronomically large set. If the generator producing it is weak, the set is small, and a small set can be searched. Forty bits is about a trillion possibilities — within reach of ordinary hardware. The first wave took 594 BTC in 25 minutes.

## Why does updating the firmware not fix it?

Because the flaw was in how seeds were made, not in how the device runs. As TRM puts it, updating fixes the issue for wallets created afterwards but does not protect wallets whose seeds were generated under the vulnerable firmware. Such a seed is still the same weak number — on any device, in any wallet you restore it to. The only fix is a new seed, and moving the funds to it.

## Are hardware wallets still safe?

[The distinction that matters](/blog/hot-vs-cold-wallets/) — whether a key has ever been on a machine that goes online — is intact. This was a different failure: the key was guessable before it was ever stored. A device can keep a secret perfectly and still have been handed a bad one.

## What to take from it

- A seed is only as strong as the randomness at the moment it was made. Nothing afterwards improves it.
- [The phrase is the wallet](/blog/recovery-phrase-security/), flaws included. Restoring a weak phrase somewhere else restores the weakness.
- A standard phrase is also what lets you leave. Moving to a fresh seed needs nothing but a compatible wallet.
- The flaw sat in released firmware for five years before it was exploited. Code being available to read is not the same as code having been read.

Nura is an Ethereum wallet, and this note makes no claim about its random number source. Check it — that is what an MIT-licensed repository is for. What Nura does state is what happens once a phrase exists: it is encrypted with AES-GCM before it is stored, and the passphrase that unlocks it is hashed with Argon2id.

## Sources

- [The largest hardware wallet exploit of 2026: inside the USD 116 million Coldcard hack — TRM Labs, 5 August 2026](https://www.trmlabs.com/resources/blog/the-largest-hardware-wallet-exploit-of-2026-inside-the-usd-116-million-coldcard-hack)
