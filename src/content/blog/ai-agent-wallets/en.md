---
title: AI agent wallets. Who signs when a bot pays?
description: Wallets built for AI agents arrived in 2026, and so did research on attacking them. What it means to give software spending power, and how to limit it.
date: 2026-10-05
tags: news, signing
---

In February 2026 Coinbase launched what it calls Agentic Wallets: wallets meant to be operated by AI agents rather than people, with spending caps per session and per transaction. They work with x402, a protocol that lets a piece of software pay for an API call or a web resource as part of the request. By May, researchers were publishing attacks. One paper, "Five Attacks on x402 Agentic Payment Protocol" (Li, Wang and Wang, 12 May 2026), describes five practical attacks revealing "weaknesses in authorization, binding, replay protection, and web-layer handling", tested against live endpoints, with outcomes ranging from service obtained without paying to payment taken without service.

This is new enough that the vocabulary is still settling. The underlying question is old.

## What is an AI agent wallet?

A key that software is allowed to use without asking you each time. That is the entire novelty. A wallet has always been a key plus a person who decides what it signs. Here the deciding is done by a program, inside limits someone set beforehand.

## Why is that risky?

Every safeguard in self-custody assumes a person reads the prompt. [Reading the prompt is the defence](/blog/wallet-drainers/) — and an agent does not read, it processes. Text on a web page can be written to instruct it. It can be quoted a price no person would accept. It can be made to pay twice, or pay the wrong party, and it will not feel that anything is off.

The limits are therefore the whole design. A cap per transaction and per day is the difference between an agent that can lose its allowance and one that can lose everything.

## How should you give software access to funds?

The way you would give a stranger a card.

- **A separate wallet with its own key.** Never the key that holds your savings, and never your recovery phrase — not pasted into a prompt, a config file, or an agent's memory.
- **Only what it can afford to lose.** Fund it for the task, top it up, and assume the balance is at risk.
- **Limits enforced outside the agent.** A rule in a [smart account](/blog/smart-accounts-explained/) or in the wallet service holds. An instruction in the agent's prompt does not.
- **No standing approvals.** [A permission that keeps acting](/blog/token-approvals/) is worse in the hands of something that can be talked into using it.
- **Read the log.** The agent will not tell you it was fooled.

Nura is a wallet for a person. Keys are derived and held on your device, and transactions are signed there when you approve them. If you experiment with agents, the most useful thing a wallet like that can be is the one they have no access to.

## Sources

- [Five Attacks on x402 Agentic Payment Protocol — Li, Wang and Wang, arXiv, 12 May 2026](https://arxiv.org/abs/2605.11781)
- [Coinbase Unveils Wallet Infrastructure for AI Agents — ForkLog, 12 February 2026](https://forklog.com/en/coinbase-unveils-wallet-infrastructure-for-ai-agents/)
