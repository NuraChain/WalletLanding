---
title: Support
description: Help with Nura Wallet — a forgotten passphrase, restoring a wallet, missing balances, stuck transactions, custom tokens and dApps.
date: 2026-09-26
---

Help with Nura Wallet, the self-custodial Ethereum wallet for Windows, macOS, Linux, Android and iOS.

## Getting help

Nura Wallet's community channels are linked at the bottom of this page. When you ask about a problem, it helps to include your platform and app version (Settings → About), what you were doing, and what happened instead.

**Never share your recovery phrase or passphrase with anyone, including us.** We will never ask for them. Anyone who does is trying to steal your funds.

## Common questions

### I forgot my passphrase. Can you reset it?

No. Nura Wallet is self-custodial: your passphrase and recovery phrase exist only on your device and are never sent to us. Nobody can reset or recover them.

If you have your 12 or 24-word recovery phrase, you can reinstall the app and restore your wallet with a new passphrase. Without the recovery phrase, funds in that wallet cannot be recovered by anyone.

### I lost my device or deleted the app. Are my funds gone?

Your funds live on the blockchain, not in the app. Install Nura Wallet on any device and restore with your recovery phrase to regain access.

### Where is my recovery phrase stored?

Encrypted on your device with AES-GCM, using a key derived from your passphrase with Argon2id. It is never uploaded anywhere. The [Privacy Policy](/privacy/) has the detail.

### My balance or transaction isn't showing

The app reads the blockchain through public network endpoints, which are occasionally slow or unavailable.

1. Check you are on the right network (top of the wallet screen).
2. Pull to refresh.
3. Try a different endpoint in Settings → Networks.
4. Look up your wallet address on a block explorer for that network.

A transaction that shows on the explorer but not in the app is a display issue, not a lost transaction.

### My token isn't listed

Add it manually: Settings → Tokens → Add, then paste the token's contract address. Take the address from a source you trust — a token that looks identical to a well-known one may be a fake.

### A transaction is stuck as pending

Pending transactions are waiting for network confirmation, usually because the gas fee was set too low. It will either confirm when the network quietens or eventually be dropped. Funds are not lost while a transaction is pending.

### Is Nura Wallet safe to use with dApps?

The built-in browser only lets a website interact with your wallet through requests you explicitly approve. No transaction is signed without your confirmation, and no website ever receives your recovery phrase or private keys.

Read what you are approving. A malicious site can ask for a transaction or token allowance that drains your wallet — the wallet will show you what is being requested, but only you can judge whether it is legitimate.

### Which networks are supported?

Ethereum, BNB Smart Chain, Arbitrum and NuraChain, plus any EVM-compatible network you add yourself in Settings → Networks.

### Is Nura Wallet open source?

Yes, under the MIT License. The source repository is linked at the bottom of this page.

## More

The rules for using the app are in the [Terms of Use](/terms/).
