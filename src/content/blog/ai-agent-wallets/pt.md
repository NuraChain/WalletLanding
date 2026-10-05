---
title: Carteiras de agentes de IA. Quem assina se o bot paga?
description: Carteiras feitas para agentes de IA chegaram em 2026, e as pesquisas sobre como atacá-las também. O que significa dar poder de gasto a um software e como limitá-lo.
date: 2026-10-05
tags: notícias, assinatura
---

Em fevereiro de 2026, a Coinbase lançou o que chama de Agentic Wallets: carteiras pensadas para serem operadas por agentes de IA, e não por pessoas, com limites de gasto por sessão e por transação. Elas funcionam com o x402, um protocolo que permite a um software pagar por uma chamada de API ou por um recurso da web como parte da própria requisição. Em maio, pesquisadores já publicavam ataques. Um artigo, "Five Attacks on x402 Agentic Payment Protocol" (Li, Wang e Wang, 12 de maio de 2026), descreve cinco ataques práticos que revelam "fraquezas em autorização, vinculação, proteção contra replay e tratamento na camada web", testados contra endpoints em produção, com resultados que vão de serviço obtido sem pagar a pagamento levado sem serviço.

Isso é novo a ponto de o vocabulário ainda estar se assentando. A pergunta de fundo é antiga.

## O que é uma carteira de agente de IA?

Uma chave que um software pode usar sem perguntar a você a cada vez. Essa é toda a novidade. Uma carteira sempre foi uma chave mais uma pessoa que decide o que ela assina. Aqui quem decide é um programa, dentro de limites que alguém definiu de antemão.

## Por que isso é arriscado?

Toda salvaguarda da autocustódia pressupõe que uma pessoa lê o pedido. [Ler o pedido é a defesa](/pt/blog/wallet-drainers/) — e um agente não lê, processa. O texto de uma página web pode ser escrito para instruí-lo. Podem apresentar a ele um preço que nenhuma pessoa aceitaria. Podem fazê-lo pagar duas vezes, ou pagar à parte errada, e ele não vai sentir que há algo errado.

Os limites são, portanto, o projeto inteiro. Um teto por transação e por dia é a diferença entre um agente que pode perder a mesada e um que pode perder tudo.

## Como dar a um software acesso a fundos?

Do jeito que você daria um cartão a um estranho.

- **Uma carteira separada, com chave própria.** Nunca a chave que guarda as suas economias, e nunca a sua frase de recuperação — nem colada em um prompt, nem em um arquivo de configuração, nem na memória de um agente.
- **Só o que dá para perder.** Abasteça a carteira para a tarefa, vá recarregando e presuma que o saldo está em risco.
- **Limites impostos fora do agente.** Uma regra em uma [conta inteligente](/pt/blog/smart-accounts-explained/) ou no serviço de carteira se sustenta. Uma instrução no prompt do agente, não.
- **Nada de aprovações permanentes.** [Uma permissão que continua agindo](/pt/blog/token-approvals/) é pior nas mãos de algo que pode ser convencido a usá-la.
- **Leia o log.** O agente não vai avisar que foi enganado.

A Nura é uma carteira para uma pessoa. As chaves são derivadas e guardadas no seu dispositivo, e as transações são assinadas ali quando você as aprova. Se você experimentar com agentes, a coisa mais útil que uma carteira assim pode ser é aquela à qual eles não têm acesso.

## Fontes

- [Five Attacks on x402 Agentic Payment Protocol — Li, Wang e Wang, arXiv, 12 de maio de 2026](https://arxiv.org/abs/2605.11781)
- [Coinbase Unveils Wallet Infrastructure for AI Agents — ForkLog, 12 de fevereiro de 2026](https://forklog.com/en/coinbase-unveils-wallet-infrastructure-for-ai-agents/)
