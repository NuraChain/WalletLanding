---
title: A stablecoin is still somebody's promise
description: Holding dollars on a chain is not the same as holding dollars. The token is a claim, and the claim has an issuer.
date: 2026-09-07
tags: stablecoins, tokens
---

Stablecoins are the part of crypto most people actually use, because they solve an obvious problem: moving value without watching it change price on the way. It is worth being exact about what they are.

## The mechanics

A fiat-backed stablecoin is an ERC-20 token like any other — a row in a contract's ledger saying your address holds an amount. What makes it hold its price is off the chain entirely: a company holds reserves and promises to redeem one token for one dollar.

So the token tracks a dollar for the same reason a banknote is worth a dollar. Someone is good for it, and everyone believes they are.

## What that implies

- **The issuer is a counterparty.** Your key still controls the token, but the value behind it depends on a balance sheet you do not control and generally cannot inspect directly.
- **Many can freeze.** Most large fiat-backed stablecoins include a blocklist the issuer can use. That is a real difference from the network's native coin, which nobody can freeze.
- **The same name is many tokens.** A stablecoin exists separately on each network, at a different contract address. Sending to the right address on the wrong network is one of the most common ways people lose funds.
- **You still need the native coin.** Fees are never paid in the stablecoin. An account holding nothing but stablecoins cannot move them.

## Algorithmic ones are a different thing

A stablecoin backed by reserves fails if the issuer fails. One that holds its price through a mechanism — minting and burning against another token — can fail on its own, and has, quickly.

Self-custody gives you control of the key. It does not give you control of whatever the token is a claim on. Knowing which one you are holding is the whole of it.
