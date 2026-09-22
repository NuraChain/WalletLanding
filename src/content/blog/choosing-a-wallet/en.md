---
title: What to check before you trust a wallet
description: Not a ranking. A short list of questions whose answers are facts, and which most marketing pages never quite state.
date: 2026-09-21
tags: wallets, checklist
---

Every wallet says it is secure. That claim is not checkable, so it is not useful. These are the questions that have answers.

## Where does the key live?

The first question and most of the answer. Is the private key derived and held on your device, or does a server hold it, or a share of it? "Non-custodial" is used loosely enough that it is worth finding the sentence that says plainly where the key is and what leaves the device.

## Can you read the code?

An open repository does not guarantee anyone has audited it. What it does guarantee is that the claim about the key can be checked by someone other than the people making it. A closed wallet asks you to take the same claim on faith.

## What protects the stored secret?

Something on disk holds your phrase. Look for the specifics: which cipher encrypts it, and how the passphrase that unlocks it is hashed. A memory-hard function like Argon2id makes guessing expensive; a plain hash does not. Vagueness here is itself an answer.

## What happens when you lose the device?

Find out before it matters. A standard recovery phrase restores into other wallets too, which means you are not locked to this app. A scheme unique to one vendor might be more convenient and is worth understanding fully in advance.

## Does it do what you need without extras?

Send and receive, switch networks, connect to a dApp. Extra products bolted on — cards, yield, trading — are extra code near your key and, often, extra counterparties.

Nura answers these the same way in every language: keys on the device, the phrase encrypted with AES-GCM, the passphrase hashed with Argon2id, MIT licensed, no account and no server holding anything. You do not have to take that on trust — the repository is right there.
