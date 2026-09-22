---
title: Hot, cold, and what actually changes
description: The distinction is not how safe a wallet feels. It is whether the key has ever been on a machine that goes online.
date: 2026-08-18
tags: storage, keys
---

Wallets get sorted into hot and cold as though the labels described how careful the software is. They describe something much narrower: where the private key is when it signs.

## The actual line

A **hot** wallet holds the key on a device that connects to the internet — a phone, a laptop. A **cold** wallet holds it on a device that does not, and signs there, handing back only the finished signature.

Everything else people attach to the words follows from that one fact. A cold wallet is not harder to steal because it is offline in spirit; it is harder to steal because malware on your laptop cannot read a key that was never on your laptop.

## What each one is good at

- **Hot wallets are for use.** Signing is immediate, dApps connect, and the cost of that convenience is that the key shares a machine with everything else you run.
- **Cold wallets are for holding.** Every signature costs a deliberate physical step, which is exactly why they suit amounts you are not touching this week.
- **Most people end up with both.** A spending wallet and a holding wallet, with different phrases, is a more useful split than picking a side.

## What neither one protects you from

A cold wallet signs whatever you approve. If you approve a malicious transaction, the offline key signs it offline and the tokens leave anyway. Cold storage defends the key, not your judgement about what to sign.

The same is true of a hot wallet that encrypts what it stores. Nura encrypts the recovery phrase with AES-GCM and hashes the passphrase with Argon2id, which defends the copy sitting on disk. It cannot defend a signature you chose to give.

Pick the storage for the threat. Then read what you sign regardless.
