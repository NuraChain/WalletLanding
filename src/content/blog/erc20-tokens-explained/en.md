---
title: Why your tokens are not in your wallet
description: An ERC-20 balance is a row in a contract. What your wallet holds is the key that can change it.
date: 2026-08-11
tags: erc-20, tokens
---

Your wallet shows a token balance, so it feels as though the tokens are inside it. They are not, and they never were.

## Where a token balance lives

An ERC-20 token is a smart contract, and that contract keeps a ledger of addresses and amounts. Owning 100 of a token means the contract holds a row saying your address holds 100. Your wallet reads that row and displays it.

What the wallet actually holds is the private key for that address — the only key that can authorise a change to the row.

This is why:

- **A token can appear without you doing anything.** Anyone can write your address into their own contract's ledger. Unsolicited tokens are not a break-in. Ignore them.
- **Adding a token is a display change.** The balance existed before the app listed it, and hiding it again moves nothing.
- **One address, many networks.** The same address works on each, but a balance on one network is not a balance on another. The contract belongs to a single network.

## Approvals are the part to watch

To let a contract move your tokens, you grant it an allowance. That permission stays in place after the transaction that created it, often for an unlimited amount, until you revoke it. Most token losses that are not phrase losses are approval losses.

Read approvals as carefully as transfers. They are the one thing you sign that keeps acting afterwards.

## What this means for the wallet

Nura sends and receives native coins and ERC-20 tokens, and moves between networks. What it keeps is the key; what the chain keeps is the balance. The screen is a view of the ledger, not a container.

Once that is clear, the rest follows — including why nothing moves without a signature from the key on your device.
