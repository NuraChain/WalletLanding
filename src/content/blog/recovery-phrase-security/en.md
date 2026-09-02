---
title: Your recovery phrase is the wallet
description: Twelve words are not a password. They are the wallet itself, and they have to be treated like it.
date: 2026-05-12
tags: recovery phrase, backup
---

A password protects an account that lives somewhere else. A recovery phrase protects nothing — it _is_ the thing. Given those words, any wallet app on any device can rebuild every key you have ever used in that wallet.

## Where the words come from

The phrase is a compact way of writing down one very large random number. The wallet picks that number, maps it onto words from a fixed list, and derives your private keys from it — the same keys, in the same order, every time. That is why the phrase restores a wallet rather than merely unlocking one.

It also means the words are not a hint or a nickname. They are the secret itself, written in a form you can copy by hand without a typo.

## What follows from that

- **Write it down offline.** A screenshot is a file, and files sync.
- **Never type it into a website.** No legitimate support process asks for it, ever.
- **Test the backup once.** Restore it into a fresh install before there is anything at stake.
- **Two copies, two places.** The common loss is not theft. It is one copy in one drawer.

## What an app can and cannot do

On the device, Nura encrypts the recovery phrase with AES-GCM before storing it, and hashes the passphrase that unlocks it with Argon2id — a function deliberately slow and memory-hard, so guessing it is expensive.

What no app can do is protect a phrase you have already given away, or reproduce one you never wrote down. Encryption on the device defends the copy on the device. The copy in your handwriting is defended by where you keep it.

Treat those words the way you would treat the deed to something. They are much closer to that than to a password.
