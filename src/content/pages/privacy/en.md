---
title: Privacy Policy
description: Nura Wallet collects no personal data. What the app keeps on your device, and what it sends to the networks it reads.
date: 2026-09-26
---

Nura Wallet is a self-custodial cryptocurrency wallet. This policy explains what happens to information when you use it.

## The short version

Nura Wallet has no accounts, no sign-up and no servers of our own that store your information. We do not collect or sell personal data. Your recovery phrase and private keys never leave your device.

## Information we collect

**None.**

We operate no analytics, no telemetry, no crash reporting and no advertising. The app contains no third-party tracking SDKs. We cannot see your balances, your addresses, your transactions or how you use the app.

## Information stored on your device

The app stores the following locally on your device, and nowhere else:

- Your recovery phrase and private keys, encrypted with **AES-GCM** using a key derived from your passphrase with **Argon2id**.
- Your passphrase verifier (a hash — the passphrase itself is never stored).
- Your settings: chosen networks, added tokens, language and display preferences.
- Your dApp browser data: bookmarks, history and open tabs.

This data is held in the app's own storage on your device. It is never uploaded to us.

**We cannot recover your wallet.** Because your passphrase and recovery phrase exist only on your device, nobody — including us — can restore access if you lose them. Keep your recovery phrase safe and offline.

## Services the app contacts

A wallet is not useful without reading the blockchain, so the app makes requests to services we do not operate. Each of them receives your device's **IP address**, as with any internet request, and sees the following:

- **Public network (RPC) nodes**, used to read balances and broadcast transactions: your wallet address and the transactions you broadcast.
- **Block explorer services**, used for transaction history and token data: the wallet address being looked up.
- **A token price service**, used to show prices: which tokens prices are requested for.
- **A search engine**, used for searches in the built-in dApp browser: your search terms.
- **NuraChain network nodes and explorer**, used to read the NuraChain network: your wallet address.

Requests are made only when needed for a feature you are using. You can change or replace the network endpoints in Settings.

Each of these services has its own privacy policy, which governs what it does with that information.

## The built-in dApp browser

The app includes a browser for visiting decentralised applications. Websites you open in it are third parties and can see the usual information a website sees, including your IP address and any wallet address you choose to connect.

A website can only interact with your wallet through an explicit request that you approve. Approving a connection shares your public wallet address with that site. Your recovery phrase and private keys are never shared with any website, and no transaction is ever signed without your confirmation.

Be careful which sites you connect to and which transactions you approve.

## Children

Nura Wallet is not directed to children, and we do not knowingly collect information from anyone.

## Your rights

Because we hold no personal data about you, there is nothing for us to access, correct, export or delete. Data held on your device is removed when you delete the app, along with your encrypted wallet — make sure you have your recovery phrase before doing so.

## Changes to this policy

If this policy changes, we will update the date at the top of this page and post the revised version here.

## More

For help with the app, see [Support](/support/). The terms for using it are in the [Terms of Use](/terms/).
