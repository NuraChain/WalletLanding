---
title: What self-custody actually means
description: Custody comes down to one question — who holds the private key — and everything else follows from the answer.
date: 2026-04-14
tags: self-custody, keys
---

Every wallet answers one question: who holds the private key. Everything people argue about afterwards — exchanges, seed phrases, hardware devices — is downstream of that single answer.

## Two answers

When an exchange or a hosted wallet holds the key, your balance is a row in their database. It is a claim on them. It behaves like a bank balance: they can freeze it, they can lose it, and they can be compelled to hand it over. In return you get a password reset and someone to call.

When you hold the key, the balance is on the chain and the key is on your device. Nobody can move it without that key. There is also nobody to call.

## What actually changes

- **Recovery.** There is no reset. A recovery phrase you cannot produce is a wallet nobody can open — including you.
- **Approval.** Nothing moves without a signature made by your key. A site can ask; only you can sign.
- **Exposure.** Your risk moves from _their_ security to _your_ backup.

That last one is the trade people underestimate. Self-custody does not remove risk. It relocates it, from a company's balance sheet to a piece of paper in your drawer.

## Why it is still worth it

Because the failure modes become ones you can see and act on. An exchange's insolvency is invisible until the withdrawals stop. Your own backup is a thing you can check tonight.

Nura is self-custodial: the recovery phrase is encrypted with AES-GCM before it is stored, the passphrase that unlocks it is hashed with Argon2id, and transactions are signed on the device. No account, no custody, no server holding your phrase.

Which means the rest of these notes are about the part that is now yours — the key, the phrase, and what happens when you sign.
