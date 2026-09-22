---
title: Smart accounts, and what they actually move
description: An account that is a contract can have rules — recovery, limits, batching. What it cannot do is remove the key underneath.
date: 2026-09-14
tags: smart accounts, keys
---

There are two kinds of account on Ethereum. The ordinary one is a key pair: an address derived from a private key, with no code and no rules beyond "a valid signature moves the funds". The other is a contract, and a contract can be told what counts as valid.

## What the rules buy you

Because a smart account decides for itself when to accept an instruction, it can offer things a plain key cannot:

- **Recovery** — nominate guardians who can, together, assign a new signing key if the old one is lost. The account survives the key.
- **Limits** — a daily cap, a delay on large transfers, an allowlist of destinations.
- **Batching** — approve and swap in one confirmation, which removes a whole class of half-finished states.
- **Fees paid by someone else**, or in a token, since the account can accept a sponsored transaction.

## What it does not change

The account still executes what its signers authorise. If you sign a malicious approval from a smart account, it goes through; the contract was told to accept your signature and it did. Guardians and limits reduce the damage a lost key does. They do nothing about a bad signature.

And there is still a key. It might be held in your phone's secure element rather than derived from twelve words, but something signs, and whatever signs is what has to be protected.

## Where this leaves a plain wallet

A key-pair account has no deployment cost, no contract to trust, no upgrade path someone else controls, and it behaves identically on every network. Those are real properties, not merely the absence of features.

Nura is a wallet for that kind of account: keys derived and held on the device, transactions signed there, the recovery phrase encrypted with AES-GCM before it is stored. Simple in the sense that has fewer places to go wrong.
