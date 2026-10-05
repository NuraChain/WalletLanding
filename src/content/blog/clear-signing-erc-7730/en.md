---
title: Clear signing (ERC-7730) reaches Trezor
description: Trezor switched on ERC-7730 clear signing in September 2026, showing what a transaction does instead of raw data. What clear signing covers, and where it stops.
date: 2026-10-05
tags: news, signing
---

On 9 September 2026 Trezor switched on clear signing for its Safe 3, Safe 5, Safe 7 and Model T devices, Cryptonomist reported. Instead of a screen of hexadecimal, the device shows what a transaction does: the action, the tokens and amounts, and where they are going. It follows ERC-7730, a standard first developed at Ledger, formalised in 2024, and now stewarded by the Ethereum Foundation.

The largest theft of 2026 so far did not involve a stolen key. It involved a correct signature on data the signer had been misled about. This is the standard aimed at that gap.

## What is blind signing?

Signing data you cannot interpret. A contract call is a string of bytes: a function selector and its arguments. A wallet that cannot decode it shows the bytes, or a hash of them, and asks for approval. You are approving something, and you cannot tell what. [That is how a drainer works](/blog/wallet-drainers/) — the prompt is real, and unreadable.

## How does clear signing work?

The people who write a contract publish a description of its functions in a shared registry: this selector means "swap", this argument is the amount, this one the recipient. A wallet that supports the standard looks the description up and renders the call as a sentence. The signature is unchanged. [What is signed](/blog/how-transactions-are-signed/) is the same bytes; what you see is, finally, what they mean.

## What are the limits of clear signing?

- **Coverage.** A contract with no published description falls back to a blind-signing warning. At Trezor's launch the covered protocols were 1inch, Aave, Lido, Tether, LiFi and Hyperliquid — a start, not the whole chain.
- **The description is a claim.** It is as honest as the registry that holds it, and it says what a function is called, not everything the contract's code goes on to do.
- **A readable approval is still an approval.** "Allow this contract to spend unlimited USDT" in plain words is [the same permission](/blog/token-approvals/) it was in hex.
- **It only helps if you read it.**

Nura signs on your device, as every self-custodial wallet does, and whatever a wallet shows you the rule is the same: if you cannot say what a prompt does, do not approve it. Its code is MIT licensed, so the screen it builds is something you can read rather than take on trust.

Clear signing does not make a transaction safe. It makes it legible, which is the part you were always supposed to be doing.

## Sources

- [Trezor ERC-7730 signing enhances hardware wallet security — Cryptonomist, 9 September 2026](https://en.cryptonomist.ch/2026/09/09/trezor-erc-7730-signing/)
