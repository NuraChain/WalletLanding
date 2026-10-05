---
title: MetaMask 事件，以及密钥在哪里
description: 2026 年 10 月 1 日，MetaMask 披露其部分基础设施发生安全事件。为什么自托管钱包周边被攻破，不等于它的密钥被攻破。
date: 2026-10-05
tags: 新闻, 自我保管
---

2026 年 10 月 1 日，MetaMask 表示它正在处理一起影响其部分基础设施的安全事件。据 BleepingComputer 当天报道，该公司称“MetaMask 钱包没有面临直接威胁”，并且作为预防措施，正在让其质押业务中受影响的验证者退出。这些验证者所服务的质押协议 Lido 预计退出将在 10 月 7 日结束前完成。

截至 2026 年 10 月 5 日，MetaMask 还没有说明哪些系统被侵入，以及是如何被侵入的。这一点值得直说，因为网上流传的许多说法，已经超出了已披露的内容。

## MetaMask 钱包被黑了吗？

迄今公布的内容里没有这样的说法。该公司的声明把界线划在它的质押业务上，并称这项业务是非托管的：它运行验证者，并表示自己不管理提款密钥。

## 钱包公司被攻破，钱包怎么会没被攻破？

因为密钥所在的位置。在自托管钱包里，助记词是在你的设备上生成并保存的。编写这个软件的公司在它周围还运行着别的东西——转发交易的服务器、价格数据源、质押服务、一个网站。这些都可能出问题，而且可能确实要紧：某项服务宕机，奖励错过了，一个被攻陷的页面提供了它不该提供的东西。但这些机器没有一台保存着你的助记词，所以没有一台能替你签名。这就是[自我保管到底意味着什么](/zh/blog/self-custody-explained/)，而这样的事件，正是这个定义接受检验的日子。

## 钱包出了安全事件之后该做什么？

- 先读公司自己的声明，再读别人对它的概括。
- 不要通过链接去“迁移”、“重新验证”或“加固”你的钱包。事件发生后几小时内，就会有恰好提供这些服务的消息跟上来，而[那个请求就是攻击本身](/zh/blog/wallet-drainers/)。
- 永远不要因为一条新闻，就在任何地方输入你的助记词。
- 只从你最初安装应用的地方更新它。

Nura 划的是同一条线，并且说明了这条线在哪里：助记词用 AES-GCM 加密并保存在你的设备上，没有账户，也没有任何服务器保存副本。这并不是在声称钱包周围的东西都不会出问题。这是在说明助记词在哪里，好让你在真出了问题时知道该问什么。

## 资料来源

- [MetaMask discloses security incident affecting its infrastructure — BleepingComputer，2026 年 10 月 1 日](https://www.bleepingcomputer.com/news/security/metamask-discloses-security-incident-affecting-its-infrastructure/)
- [MetaMask responds to security incident, exits Ethereum validators as precaution — teiss，2026 年 10 月 2 日](https://www.teiss.co.uk/news/metamask-responds-to-security-incident-exits-ethereum-validators-as-precaution-18251)
