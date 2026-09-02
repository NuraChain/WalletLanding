---
title: Gas, in plain terms
description: Why a transfer costs what it costs, and what you are actually paying for when you pay a fee.
date: 2026-07-07
tags: gas, fees
---

Every transaction asks thousands of computers to do the same work and agree on the result. Gas is how that work is measured and paid for.

## Three numbers

- **Gas used** — how much work the transaction takes. A plain transfer of the native coin is fixed at 21,000 units. A token transfer costs more; a swap, more again.
- **Gas price** — what you pay per unit, quoted in gwei, a billionth of the native coin. This is the part that moves with demand.
- **Gas limit** — the ceiling you set. Run past it and the transaction fails, and the work already done is still paid for.

The fee is gas used multiplied by gas price. The first number is a property of what you are doing. The second is a property of when you do it.

## Why the price moves

Block space is finite and auctioned continuously. When many people want in at once, the price of being included rises; when the queue empties, it falls. Nothing about your transaction changed — the queue did.

## Practical consequences

- Simple transfers are cheap and predictable. Contract calls are neither.
- A failed transaction still costs gas. The network did the work before discovering the failure.
- Waiting is a real strategy. The same transfer at a quiet hour can cost a fraction.
- Fees are paid in the network's native coin, never in the token you are moving.

That last point catches people constantly: an account holding only tokens cannot move them, because it cannot pay for the work. Keep a little of the native coin in any account you intend to use. It is the fuel, and nothing moves without it.
