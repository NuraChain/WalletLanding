---
title: The MetaMask incident and where the keys are
description: On 1 October 2026 MetaMask disclosed a security incident in part of its infrastructure. Why a breach around a self-custodial wallet is not a breach of its keys.
date: 2026-10-05
tags: news, self-custody
---

On 1 October 2026 MetaMask said it was dealing with a security incident affecting part of its infrastructure. As BleepingComputer reported the same day, the company said there was "no immediate threat to MetaMask wallets" and that it was exiting the affected validators in its staking operations as a precaution. Lido, the staking protocol those validators serve, expected the exits to be complete by the end of 7 October.

As of 5 October 2026 MetaMask has not said which systems were reached or how. That is worth stating plainly, because much of what is being repeated online goes further than what has been disclosed.

## Were MetaMask wallets hacked?

Nothing published so far says so. The company's statement draws the line at its staking operations, which it describes as non-custodial: it runs validators, and says it does not manage withdrawal keys.

## How can a wallet company be breached without the wallets being breached?

Because of where the key is. In a self-custodial wallet the recovery phrase is generated and stored on your device. The company that writes the software runs other things around it — servers that relay transactions, price feeds, a staking service, a website. Those can fail, and it can matter: a service goes down, rewards are missed, a compromised page serves something it should not. But none of those machines holds your phrase, so none of them can sign for you. That is [what self-custody actually means](/blog/self-custody-explained/), and an incident like this is the day the definition gets tested.

## What should you do after a wallet security incident?

- Read the company's own statement before anyone's summary of it.
- Do not "migrate", "revalidate" or "secure" your wallet through a link. Incidents are followed within hours by messages offering exactly that, and [that prompt is the attack](/blog/wallet-drainers/).
- Never type your recovery phrase anywhere in response to news.
- Update the app only from the place you originally installed it.

Nura draws the same line and says where it is: the recovery phrase is encrypted with AES-GCM and stored on your device, with no account and no server holding a copy. That is not a claim that nothing around a wallet can go wrong. It is a statement of where the phrase is, so you know what to ask when something does.

## Sources

- [MetaMask discloses security incident affecting its infrastructure — BleepingComputer, 1 October 2026](https://www.bleepingcomputer.com/news/security/metamask-discloses-security-incident-affecting-its-infrastructure/)
- [MetaMask responds to security incident, exits Ethereum validators as precaution — teiss, 2 October 2026](https://www.teiss.co.uk/news/metamask-responds-to-security-incident-exits-ethereum-validators-as-precaution-18251)
