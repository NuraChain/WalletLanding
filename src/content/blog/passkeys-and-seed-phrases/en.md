---
title: What a passkey replaces, and what it does not
description: Passkeys are a better way to hold a key than a person's memory. They are not a way to stop needing one.
date: 2026-09-17
tags: passkeys, recovery phrase
---

Passkeys have arrived in wallets, usually described as the end of the recovery phrase. The mechanism is genuinely good, and the description is slightly wrong in a way worth untangling.

## What a passkey is

A passkey is a key pair created by your device and kept in its secure hardware, unlocked by a fingerprint, a face or a PIN. The private half is designed never to leave. Crucially it is bound to a single domain, so a lookalike site cannot ask for it — the browser simply will not offer a passkey for a domain it was not created for. That closes off ordinary credential phishing structurally, not by warning you.

## What changes in a wallet

Used as the signing key for a smart account, a passkey removes the step people fail at most: writing down twelve words and keeping them safe for years. Nothing to copy by hand, nothing to screenshot, nothing to type into a support chat.

## What it does not remove

- **A key still exists.** It moved from your handwriting into a chip. That is a better place for it, and it is still a single thing that can be lost.
- **Recovery becomes someone's design decision.** Lose every device holding the passkey and what happens next depends on the scheme — guardians, a synced copy in a platform account, an escape hatch. A recovery phrase is at least explicit about who is responsible.
- **A synced passkey is only as private as the account syncing it.** Convenience and custody pull in opposite directions here.
- **Signing is still signing.** A passkey approves a malicious transaction as smoothly as an honest one.

The phrase is not the problem. Storing a secret badly is the problem, and there is more than one way to solve it. Pick the one whose failure mode you would rather live with — and know what it is before you need it.
