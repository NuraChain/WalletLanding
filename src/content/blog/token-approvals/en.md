---
title: The permission that keeps acting
description: A transfer happens once. An approval stays switched on, often for an unlimited amount, until you go back and turn it off.
date: 2026-08-22
tags: approvals, tokens
---

Most token losses that are not phrase losses are approval losses. It is worth knowing exactly what an approval is, because it is the only thing you sign that keeps working after the transaction confirms.

## What you are granting

A token contract keeps a ledger of balances. It also keeps a second ledger: who is allowed to move whose tokens. When a swap asks you to approve first, it is asking for a row in that second ledger — permission for its contract to move your token on your behalf.

The transfer itself comes after. The approval is the door; the transfer is walking through it.

## Why unlimited is the default

Many dApps request the maximum possible allowance rather than the amount you are about to trade. It saves you a second approval later, and it is cheaper in fees over time. It also means that if that contract is ever exploited — or was malicious from the start — it can move your entire balance of that token, at any point in the future, without touching your recovery phrase.

## What to do about it

- **Approve the amount, not the maximum**, where the interface lets you choose.
- **Revoke what you are finished with.** An allowance to a protocol you used once last year is pure exposure with no upside.
- **Read the token name on the approval screen.** The dangerous part of a phishing site is not the transfer it shows you, it is the approval underneath it.
- **Remember it is per token, per contract, per network.** Revoking on one network does nothing on another.

An approval is not a setting inside your wallet. It is a fact recorded on the chain, next to your balance, and it outlives the app you granted it from.
