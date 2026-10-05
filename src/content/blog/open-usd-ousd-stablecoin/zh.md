---
title: Open USD（OUSD）上线了，先核对什么
description: Open USD 于 2026 年 9 月 30 日上线，背后是 Coinbase、Mastercard、Shopify、Stripe 和 Visa。这份背书覆盖什么，又把什么留给你。
date: 2026-10-05
tags: 新闻, 稳定币
---

Open USD，代码 OUSD，于 2026 年 9 月 30 日上线。它的创始合作伙伴是 Coinbase、Mastercard、Shopify、Stripe 和 Visa。它由 Bridge 发行，Bridge 是 Stripe 在 2024 年收购的稳定币公司；它的储备存放在 BlackRock、Lead Bank 和 BNY Mellon；据 The Paypers 10 月 1 日报道，合作伙伴已承诺提供超过 10 亿美元的初始流动性。它运行在四条网络上：以太坊、Base、Solana 和 Tempo。

这份名单比大多数稳定币上线时的阵容都更有分量。它把一个问题回答得很好，却让另外两个问题原封不动地留在原处。

## 谁站在 OUSD 背后？

一种稳定币必须回答的问题，是谁欠你那一美元。在这里，答案清晰得少见：一个有名有姓的发行方，有名有姓的储备托管方，以及一比一的铸造与赎回。但要读清楚这是提供给谁的。铸造和赎回经由 Stripe、Visa 的稳定币平台、Mastercard 旗下的 BVNK 以及 Coinbase 进行。一个把 OUSD 放在自己钱包里的人，持有的是[对发行方的一项债权](/zh/blog/stablecoins-explained/)，要通过愿意为他兑换的那一方才能够得着。

## 把 OUSD 放在自托管钱包里安全吗？

自己持有，改变的是谁控制密钥。它不改变这个代币是什么。在以太坊和 Base 上，OUSD 是一个 ERC-20：[记在合约里的一笔余额](/zh/blog/erc20-tokens-explained/)，而这个合约由发行方部署并管理。你的密钥决定你的余额动不动。合约的所有者决定这笔余额要遵守的规则。

## 怎样避开假的 OUSD 代币？

每一次受到这么多关注的上线，后面都会跟来借用这个名字的代币。任何人都可以部署一个名叫“Open USD”的合约，而且这个代码也不是新的——一个更早的、与它无关的代币已经用了 OUSD 很多年。

- 从发行方自己的网站获取合约地址，绝不要从搜索结果、一条回复，或者一个出现在你钱包里的代币那里获取。
- 核对网络。同一个名字在四条链上，就是四个不同的合约。
- 一笔你没有预料到的 OUSD 余额，要当作广告看待，而不是当作钱。

Nura 在你切换的那些网络上收发 ERC-20 代币，所以这样一个代币对它来说只是又一个合约地址。它不为任何代币担保，而无论如何，控制你余额的助记词都加密留在你的设备上。

一长串支持者告诉你是谁作出了这个承诺。但仍然值得记住，它是一个承诺。

## 资料来源

- [Open Standard launches OUSD stablecoin with five founding partners — The Paypers，2026 年 10 月 1 日](https://thepaypers.com/crypto-web3-and-cbdc/news/open-standard-launches-ousd-stablecoin-with-five-founding-partners)
