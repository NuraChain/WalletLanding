---
title: What happens when you sign a transaction
description: A signature proves your key approved a message — without the key itself going anywhere.
date: 2026-06-09
tags: signing, transactions
---

"Signing" sounds like a formality at the end of a form. It is the entire security model.

## The steps

1. **A message is built.** Recipient, amount, network, fee, and a nonce so the same transaction cannot be replayed.
2. **It is hashed.** The message is reduced to a short fixed-length fingerprint.
3. **The key signs the hash.** Elliptic-curve maths produces a signature that could only have come from that private key.
4. **The signature is broadcast.** Nodes check it against your public address and, if it holds, include the transaction in a block.

Step three is the interesting one. Verifying a signature needs only the public key. Producing one needs the private key — and the key never has to leave the device to do it. What travels to the network is the signed message, not the secret that signed it.

## Why that matters in practice

The boundary is sharp. A dApp can prepare a transaction, a node can relay it, an explorer can display it — none of them ever touch your key. The only moment that matters is the moment you approve, on your own device.

It also means a signature is exactly as trustworthy as your reading of what you signed. The chain does not check intent. It checks maths.

- Read the recipient, not only the amount.
- Check which network you are on.
- Treat a token approval as what it is: permission that outlives the transaction.

In Nura, transactions are signed on the device and the signed result is what goes to the network. The private key stays where it was derived.

That is the line self-custody draws, and signing is the place you can actually see it.
