---
title: How a drainer actually empties a wallet
description: Nothing is broken into. You are shown a prompt, you approve it, and the approval does exactly what it said it would.
date: 2026-08-26
tags: scams, signing
---

A wallet drainer is not an exploit against your wallet. It is a website that gets you to sign something, and the something is real. The cryptography works perfectly the whole time. That is the point worth sitting with.

## The shape of it

You arrive at a site — from an ad, a reply, a message about a mint or an airdrop or a refund. It looks like the real thing, often down to the domain being one character off. You connect your wallet, which by itself gives away nothing. Then it asks you to sign.

What it asks for is usually one of three things:

- **An approval**, granting its contract permission to move one of your tokens.
- **An off-chain signature**, such as a permit or a batched permission, which costs no gas and therefore shows no fee — and which grants the same power.
- **A transfer**, dressed as a claim or a verification step.

You approve it. The contract then does what it was authorised to do, immediately or weeks later.

## Why it works on careful people

Connecting is harmless, so the first step feels safe. The signature request is the dangerous one, and it is also the one that is hardest to read — an opaque blob of hex, or a message framed as "verify ownership". A signature with no fee attached feels like less of a commitment than a transaction. It is not.

## The habits that hold

- Treat any signature request as a transfer until you have read it.
- Reach dApps by a bookmark you saved, not a link you were sent.
- Never let urgency compress the reading. Every drainer is in a hurry.
- Check your approvals after visiting somewhere new, and revoke what you do not recognise.

No wallet can refuse a signature you chose to give. Reading the prompt is the defence.
