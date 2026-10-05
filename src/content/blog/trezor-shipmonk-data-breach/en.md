---
title: The Trezor customer data leak took no keys
description: A breach at Trezor's shipping partner exposed names, addresses and phone numbers of more than 80,000 buyers in 2026. No device was touched, and it still matters.
date: 2026-10-05
tags: news, scams
---

In August 2026 Trezor said a breach at ShipMonk, a company that ships its orders, had exposed the details of 13,689 customers. On 5 September it added roughly 67,000 customers in the United States, from order records dating from 2019 to 2021, The Hacker News reported. What leaked was names, email addresses, phone numbers, shipping addresses and order numbers. The breach did not affect the security of Trezor's hardware wallets, and no recovery seed or private key was involved.

It would be easy to file that under "nothing happened". The breach did not open a single wallet. What it produced is a list.

## What was exposed in the Trezor breach?

A list of people who bought a hardware wallet, with where they live and how to reach them. The attackers got in through a flaw in an analytics tool used by the shipping company — nothing to do with cryptography. The weakest point in a wallet maker's security turned out to be a database at a partner.

## Why does a leaked address matter if the keys are safe?

Because it tells a stranger two things: that you probably hold crypto, and how to contact you. Everything that follows uses that.

- **Phishing that knows your name and your order.** Emails, calls and letters posing as the manufacturer, asking you to "verify" or "secure" your device. Trezor warned customers to expect exactly this.
- **Fake replacements.** A device you did not order arriving by post, or instructions to enter your seed on a website.
- **The physical kind.** A home address attached to a wallet purchase is the starting point for [coercion rather than hacking](/blog/wrench-attacks-crypto-2026/).

## What should I do if my data was leaked?

- Treat every unprompted message about your wallet as hostile, however much it knows about you.
- Your seed goes into your device and nowhere else. No support process needs it.
- Do not use a device that arrives unrequested.
- Look at what else is tied to that address and phone number, and separate it from your crypto where you can.

## Does self-custody protect privacy?

It protects keys. Privacy depends on what you had to hand over on the way. [Your recovery phrase is the wallet](/blog/recovery-phrase-security/) — but your name on a customer list is a different exposure, and no cipher covers it.

Nura is a download, not a delivery: there is no account to create, no shipping address to give, and no server holding your phrase. That narrows one exposure. It does not hide you — public chains are public, and the place you buy crypto still knows who you are.

## Sources

- [Trezor says ShipMonk breach exposed 67,000 U.S. customers' data it said was deleted — The Hacker News, 5 September 2026](https://thehackernews.com/2026/09/trezor-says-shipmonk-breach-exposed.html)
