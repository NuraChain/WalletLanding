---
title: Bitget 被盗事件里，没有一把密钥被偷
description: 2026 年 9 月 24 日，约 3.5 亿美元从 Bitget 的热钱包流出。交易所称没有密钥被盗——它的签名方看到的是假数据。这为什么重要。
date: 2026-10-05
tags: 新闻, 签名
---

2026 年 9 月 24 日 UTC 时间 18:31，Bitget 发现有并非它本意的转账正从它的热钱包和温钱包流出。交易所给出的损失是 3.516 亿美元；后来的报道认为更接近 3.87 亿美元。它暂停了提款，并表示这笔损失在其 4.64 亿美元的用户保护基金可以覆盖的范围之内。这些细节来自 TRM Labs 9 月 25 日的报告，报告还提到，Bitget 的首席执行官称朝鲜参与其中“非常可能”，而 TRM 自己并没有对这次攻击作出归因。

这是 2026 年迄今最大的一起加密货币盗窃案。值得注意的细节，是它的手法。

## Bitget 是怎么被攻破的？

按 Bitget 的说法，没有人偷走私钥。攻击者进入了一个与其钱包基础设施相连的后端系统，伪造了交易数据，并触发了交易所自己的审批流程。密钥把自己的工作做得完美无缺。交给它们什么，它们就签了什么。

这就是机构规模上的[钱包盗取器](/zh/blog/wallet-drainers/)。密码学没有失守；失守的是签名方看到的内容与签名实际授权的内容之间的那道缝隙。[签名批准的是一条消息](/zh/blog/how-transactions-are-signed/)，不是一个意图。

## 放在交易所的资金安全吗？

Bitget 说客户由它的基金兜底。留意这是哪一种安全：一家公司决定用自己的储备来填补损失。基金比窟窿大的时候，它才管用。交易所里的余额是对交易所的一项债权，提款按钮则是一项它可以暂停的服务——它也确实暂停了。

## 如果你自己保管密钥，这改变了什么？

对这种安排毫无改变，对习惯却改变不少。

- 你的钱包有同一个弱点的缩小版：你批准什么，它就签什么。把请求当作转账本身来读，因为它就是。
- 热钱包不管由谁运营都是热的。[放在一台会联网的机器上的密钥](/zh/blog/hot-vs-cold-wallets/)，那台机器面对什么，它就面对什么。
- 交易所里只留你正在交易的部分。其余的自己保管。

Nura 是另一种安排。密钥在你的设备上派生并保存，交易也在设备上签名；没有账户，也没有任何服务器保存你的助记词。同样没有保护基金。你签下的就是最终结果，而它要由你自己来读。

## 资料来源

- [Bitget loses USD 351.6 million in hot wallet breach in likely North Korea attack — TRM Labs，2026 年 9 月 25 日](https://www.trmlabs.com/resources/blog/bitget-loses-usd-3516-million-in-hot-wallet-breach-in-likely-north-korea-attack)
- [Circle and Tether freeze stablecoins tied to Bitget hack, but most funds slip away — Decrypt，2026 年 9 月 25 日](https://decrypt.co/379365/circle-tether-freeze-stablecoins-bitget-hack)
