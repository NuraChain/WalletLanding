---
title: What slippage tolerance is really for
description: The number you get is decided when your transaction is mined, not when you press the button. Slippage is the gap you agree to accept.
date: 2026-09-03
tags: swaps, slippage
---

A swap quote is a prediction. Between the moment your wallet shows it and the moment the transaction is included in a block, other people trade against the same pool, and the price moves. Slippage tolerance is you saying how far it may move before the swap should fail instead.

## Why there is a gap at all

An on-chain swap trades against a pool of two tokens. The rate comes from the ratio between them, so every trade — including everyone else's — shifts it. Your transaction sits in the queue while that happens.

Set the tolerance to zero and almost nothing confirms. Set it too high and you have pre-agreed to a bad price.

## The cost of setting it high

A wide tolerance is an invitation. Anyone watching the queue can place a trade ahead of yours to push the price to the edge of what you said you would accept, let your swap execute there, and trade back. You get the worst price you authorised, and it looks like ordinary market movement.

This is why a 1% tolerance on a deep, liquid pair and a 1% tolerance on a thin one are not the same decision.

## Reading a swap screen

- **Rate** — the prediction.
- **Minimum received** — the only number that is a promise. It is the rate after your tolerance. Judge the trade on this.
- **Price impact** — how much your own trade moves the pool. Large impact means the pool is too thin for the size you are trading, and no tolerance setting fixes that.
- **Fee** — paid in the network's native coin, and paid whether the swap succeeds or reverts.

Set the tolerance to the smallest number that lets the trade go through, and look at the minimum received before you sign. That figure is what you are actually agreeing to.
