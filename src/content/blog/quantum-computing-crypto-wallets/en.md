---
title: Quantum computers and your wallet in 2026
description: In September 2026 the EU's financial supervisors named quantum computing as a risk to the cryptography behind blockchains. What is exposed today, and what is not.
date: 2026-10-05
tags: news, keys
---

In their Autumn 2026 risk report, the EU's three financial supervisors — the banking, markets and insurance authorities, writing jointly — said an advanced quantum computer "could undermine some cryptography systems widely used to secure communications, transactions, databases and blockchains", and that such threats "could materialize earlier than any viable commercial application". Cryptonomist reported the passage on 24 September 2026. The European Commission's own roadmap asks member states to begin moving to post-quantum cryptography by the end of 2026, with high-risk uses protected by 2030.

That is regulators adding a risk to a list. It is not a machine breaking a key. Both statements matter.

## Can a quantum computer steal crypto today?

No. No machine that exists can derive a private key from a public one. The concern is a future machine, and how long a change of this size takes to make — which is why people who plan in decades are raising it now.

## Which wallets would be exposed?

The signatures Ethereum and Bitcoin use rest on a problem a large enough quantum computer could solve: working back from a public key to the private key. An address is a hash of the public key, which hides it. But the public key is revealed when you sign. [Every transaction you send carries a signature](/blog/how-transactions-are-signed/) from which the public key can be recovered, so an Ethereum account that has ever sent a transaction has its public key on the chain permanently. On Bitcoin the same is true of old and reused addresses.

## What is "harvest now, decrypt later"?

Collecting data today to break once the tools exist. For blockchains there is nothing to harvest in secret. The public keys are public, and they will still be there.

## What can a wallet holder do now?

Very little, and that is the honest answer. The fix is a change to the networks themselves: new signature schemes, and a way for existing accounts to move to them. Proposals exist for both Bitcoin and Ethereum, and neither network has adopted one. When they do, moving will mean a new key.

- Do not buy a product because it says "quantum-safe". The chain decides which signatures it accepts, not the wallet.
- Ignore any message telling you to move funds urgently because of quantum computing.
- Keep a recovery phrase that restores in standard wallets, so you can follow whatever migration comes.

Nura makes no claim about quantum resistance. It is an Ethereum wallet and signs the way Ethereum requires; when the network changes its signatures, every wallet will have to follow. The code is MIT licensed and open, so that change will be one you can read.

## Sources

- [Quantum computing blockchain threat: EU regulators warn — Cryptonomist, 24 September 2026](https://en.cryptonomist.ch/2026/09/24/quantum-computing-blockchain-threat/)
