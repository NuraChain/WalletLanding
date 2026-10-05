---
title: SparkCat, the malware that reads screenshots
description: In April 2026 Kaspersky found a new SparkCat variant in App Store and Google Play apps, scanning photo galleries for recovery phrases. Why a screenshot is a leak.
date: 2026-10-05
tags: news, recovery phrase
---

On 2 April 2026 Kaspersky reported a new variant of SparkCat, a trojan that hides inside ordinary-looking apps and searches the phone's photo gallery for cryptocurrency recovery phrases. Its researchers found it in two apps on the App Store and one on Google Play — enterprise messengers and a food delivery app — a year after the first version was removed from both stores. The malicious code has since been taken out.

It did not attack a wallet. It did not need to.

## How does SparkCat steal a recovery phrase?

The app asks for access to your photos, which a messenger or a delivery app can plausibly want. It then runs optical character recognition over the images and looks for text that resembles a recovery phrase. On Android, Kaspersky found it searching for keywords in Japanese, Korean and Chinese. The iOS variant looks for the mnemonic words themselves, which are English — so it can reach anyone, anywhere.

The wallet is never touched. The phrase is read from a picture you took of it.

## Is it safe to screenshot a recovery phrase?

No, and this is why. A screenshot is an ordinary image file. It sits in a gallery that any app with photo permission can read. It is usually copied to a cloud account within minutes. It turns up in backups, and on other devices signed in to the same account. Each of those is a place the phrase now exists.

[The phrase is the wallet](/blog/recovery-phrase-security/). A picture of it is another copy of the wallet, kept in the least guarded place on the phone.

## How should a recovery phrase be stored instead?

- Write it on paper or stamp it in metal, and keep it where you would keep a document you could not replace.
- Never photograph it, type it into a notes app, email it to yourself or paste it into a chat.
- If you ever did, treat the phrase as exposed: make a new wallet and move the funds.
- Give apps access to individual photos rather than the whole gallery where your phone allows it, and be wary of any app that insists on everything.
- Official stores reduce risk. They do not remove it — these apps passed review.

Inside Nura, the recovery phrase is encrypted with AES-GCM before it is stored, and the passphrase that unlocks it is hashed with Argon2id. That protection ends at the edge of the app. A phrase copied out — onto paper, or into a photo — is as safe as wherever you put it, and nothing in the wallet can follow it there.

## Sources

- [Kaspersky discovers new SparkCat variant bypassing App Store and Google Play security — Kaspersky, 2 April 2026](https://www.kaspersky.com/about/press-releases/kaspersky-discovers-new-sparkcat-variant-bypassing-app-store-and-google-play-security)
