---
title: Nothing actually crosses a bridge
description: Tokens do not travel between networks. One side locks something, the other side issues something, and the two are held together by trust.
date: 2026-09-10
tags: bridges, networks
---

The word bridge makes it sound like your tokens walk from one chain to another. They cannot. A network only knows about its own state, and no contract on one chain can read or write the ledger of another.

## What happens instead

You send tokens to a contract on the first network, which locks or burns them. A system watching that network reports it to the second, where a second contract releases or mints an equivalent amount to your address there.

Two separate events on two separate ledgers, joined by whatever is doing the watching. The nature of that watcher is the entire security model.

## Which is why bridges are where losses happen

Some of the largest thefts in crypto have been bridge thefts, and not because the cryptography failed. A bridge holds a large pool of locked assets on one side and can issue assets on the other, so whoever controls the reporting controls the issuance. Compromise the signers, or find a flaw in the verification, and you mint against nothing.

Before using one, it is fair to ask who is attesting to the transfer: a committee of signers, a set of validators, or a proof the destination chain verifies itself.

## Practical notes

- **The token you receive is a different token.** A bridged asset is its own contract on the destination network, and its value depends on the bridge staying solvent.
- **Check the destination network before you sign**, not after. A transfer to the right address on the wrong network usually cannot be undone.
- **You need the native coin on both sides.** Arriving with tokens and no gas leaves you stuck.
- **Official routes first.** Most bridge phishing is a lookalike front end, not a broken bridge.

Switching networks in a wallet is free and instant. Moving value between them is neither.
