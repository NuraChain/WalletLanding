---
title: EIP-7702 phishing and the one-signature drain
description: Research presented in August 2026 linked 63% of sampled EIP-7702 authorizations to malicious contracts. How one delegation signature hands over a whole account.
date: 2026-10-05
tags: news, smart accounts
---

EIP-7702 arrived on Ethereum in 2025. It lets an ordinary account point at a piece of contract code and behave like it — batching, sponsored fees, the conveniences of [a smart account](/blog/smart-accounts-explained/) without moving to a new address. In August 2026, research presented at the USENIX Security Symposium found that 63% of the EIP-7702 authorization transactions in its sample were connected to malicious contracts, with more than $2.3 million in confirmed thefts, as CryptBull reported on 21 August.

A sample is not the whole network, and the figure says as much about who adopted the feature first as about the feature. It is still a fair warning about one specific signature.

## What is an EIP-7702 delegation?

A signed message that says: from now on, run this contract's code as my account. Until you replace or clear it, every call to your address executes that code, with your balances.

Used honestly, the code is a well-known wallet implementation. Used dishonestly, it is a sweeper — code whose only function is to send everything the account holds, and everything that arrives later, to someone else.

## How is it different from an ordinary drainer?

An [approval](/blog/token-approvals/) hands over one token. A delegation hands over the account. [The older trick](/blog/wallet-drainers/) needed a separate signature for each asset. This needs one, and it keeps working: funds sent to a delegated address afterwards can be taken as they land.

## What does the prompt look like?

Like an upgrade. "Enable smart account features." "Activate gasless transactions." "Claim with sponsored gas." The request has the same structure as a legitimate one. The only thing that differs is the address being delegated to, which is forty hexadecimal characters.

## How to protect an account

- Treat any request from a website to delegate, upgrade or "enable smart features" as you would a request for your recovery phrase. A wallet's own upgrade starts inside the wallet, not on a page you were sent to.
- If your wallet shows the delegate address, read it. If it does not show what you are authorising, do not sign.
- A delegation can be replaced or cleared by signing a new one. If you signed something you doubt, do that first, before sending the account anything.
- If a delegation appeared because your key or phrase leaked, clearing it changes nothing. That account is lost for good and should never receive funds again.

Nura is a self-custodial Ethereum wallet: the key is on your device and signs what you approve. This note makes no claim about which signature types it supports. The rule does not depend on the wallet — a signature you cannot read is a transfer you have not checked.

## Sources

- [EIP-7702 wallet delegation faces scrutiny after phishing research — CryptBull, 21 August 2026](https://www.cryptbull.net/2026/08/21/eip-7702-wallet-delegation-faces-scrutiny-after-phishing-research/)
