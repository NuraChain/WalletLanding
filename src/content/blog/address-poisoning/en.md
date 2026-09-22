---
title: The address that looks like yours
description: A scam that takes nothing, signs nothing and breaks nothing. It just puts a lookalike address into your history and waits.
date: 2026-08-31
tags: scams, addresses
---

Address poisoning is the cheapest attack in crypto, and it works on the one habit almost everyone has: copying an address out of your own transaction history.

## How it is set up

Someone watches a transfer you made. They generate an address whose first four characters and last four characters match the one you sent to — that is easy, it only takes grinding through candidates until two short fragments line up. Then they send you something worthless from it: a dust amount, or a token nobody asked for.

Now your history contains two entries that look identical at a glance, because a wallet shows an address abbreviated. One of them is the person you paid. The other is waiting.

## What goes wrong next

The next time you pay that person, you scroll back, find the familiar shape, copy it, and send. The funds arrive exactly where the address said they would. Nothing was hacked, nothing was signed in error, and nothing can be reversed.

## What actually prevents it

- **Never copy an address out of a received transaction.** Incoming entries are attacker-controlled. Outgoing ones you made are not.
- **Keep the addresses you use in a saved list**, entered once from the source and checked then.
- **Compare the middle, not the ends.** The ends are what was copied deliberately.
- **Send a small amount first** when the amount is large enough for the extra fee to be worth it.
- **Ignore unsolicited tokens.** A token that appears from nowhere is a message, not a gift, and interacting with it is how the follow-up starts.

An unexpected incoming transfer is not good news. Most of the time it is bait, and the whole attack is completed by your own copy-paste a week later.
