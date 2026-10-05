---
title: Circle e Tether congelaram US$ 318 mil. O resto fugiu
description: Após o hack da Bitget, Circle e Tether congelaram uns US$ 318.000 em stablecoins, e mais de 63.000 ETH ficaram fora de alcance. O que é um congelamento e quem pode usar.
date: 2026-10-05
tags: notícias, stablecoins
---

Na manhã seguinte ao hack da Bitget, a Circle colocou um dos endereços do ladrão na lista de bloqueio do contrato do USDC, às 05:00 UTC de 25 de setembro de 2026. A Tether fez o mesmo cerca de sete horas depois. Juntas, congelaram 99.990 USDC e 218.023 USDT — cerca de US$ 318.000 — em uma única carteira, como noticiou o Decrypt naquele dia. Em outros endereços ligados ao mesmo atacante havia mais de 63.000 ETH que ninguém tinha como congelar.

Vale entender as duas metades disso. São o mesmo fato visto de dois lados.

## Como uma stablecoin pode ser congelada?

USDC e USDT são contratos, e cada contrato tem um dono. Entre as funções que o dono pode chamar há uma que marca um endereço como bloqueado. Depois disso, os tokens naquele endereço continuam aparecendo como saldo, e toda tentativa de movê-los falha. Nenhum tribunal fica entre a decisão e o seu efeito. O emissor chama uma função.

[Uma stablecoin é a promessa de alguém](/pt/blog/stablecoins-explained/), e esta é a outra cláusula da promessa. A parte que se compromete a resgatar o seu token também é capaz de impedir que ele se mova.

## Por que a maior parte dos fundos roubados escapou?

Porque o atacante sabia de tudo isso. O Decrypt descreve uma corrida para converter ativos congeláveis em ETH antes que os emissores interviessem. Um emissor pode congelar o próprio token. Não pode congelar a moeda nativa do Ethereum, porque não há dono a quem pedir. O que sobrou para congelar foi o que ainda não tinha sido convertido.

## O meu USDT ou USDC pode ser congelado?

Sim — em uma conta de corretora, ou em uma carteira que só você controla. A autocustódia decide quem pode assinar por um endereço. Não muda as regras dentro do contrato de um token, que valem igualmente para todos os detentores. Na prática, os emissores agem contra endereços ligados a roubos, sanções e investigações, não ao acaso. O ponto é que a capacidade existe, e guardar a chave não a remove.

- Saiba quais dos seus ativos têm um administrador e quais não têm.
- Um saldo ERC-20 é [uma linha no contrato de alguém](/pt/blog/erc20-tokens-explained/). Descubra o que esse contrato permite ao dono fazer.
- Cuidado com o que você aceita. Um endereço que recebe tokens roubados pode acabar na mesma lista.

A Nura guarda a chave no seu dispositivo e envia e recebe tokens ERC-20 com ela. Isso é tudo o que uma carteira controla. O contrato por trás de um token responde ao seu emissor — na Nura como em qualquer outra carteira.

## Fontes

- [Circle and Tether freeze stablecoins tied to Bitget hack, but most funds slip away — Decrypt, 25 de setembro de 2026](https://decrypt.co/379365/circle-tether-freeze-stablecoins-bitget-hack)
