---
title: A assinatura clara (ERC-7730) chega à Trezor
description: A Trezor ativou a assinatura clara do ERC-7730 em setembro de 2026 e passou a mostrar o que uma transação faz, em vez de dados brutos. O que ela cobre e onde termina.
date: 2026-10-05
tags: notícias, assinatura
---

Em 9 de setembro de 2026, a Trezor ativou a assinatura clara nos dispositivos Safe 3, Safe 5, Safe 7 e Model T, noticiou o Cryptonomist. Em vez de uma tela de hexadecimal, o dispositivo mostra o que a transação faz: a ação, os tokens e os valores, e para onde vão. O recurso segue o ERC-7730, um padrão desenvolvido inicialmente na Ledger, formalizado em 2024 e hoje sob os cuidados da Ethereum Foundation.

O maior roubo de 2026 até agora não envolveu uma chave roubada. Envolveu uma assinatura correta sobre dados a respeito dos quais o signatário havia sido enganado. Este é o padrão que mira essa lacuna.

## O que é assinatura cega?

Assinar dados que você não consegue interpretar. Uma chamada de contrato é uma sequência de bytes: um seletor de função e seus argumentos. Uma carteira que não consegue decodificá-la mostra os bytes, ou um hash deles, e pede aprovação. Você está aprovando alguma coisa e não tem como saber o quê. [É assim que um drainer funciona](/pt/blog/wallet-drainers/) — o pedido é real, e ilegível.

## Como funciona a assinatura clara?

Quem escreve um contrato publica uma descrição das suas funções em um registro compartilhado: este seletor significa "swap", este argumento é o valor, este outro o destinatário. Uma carteira que suporta o padrão busca a descrição e apresenta a chamada como uma frase. A assinatura não muda. [O que é assinado](/pt/blog/how-transactions-are-signed/) são os mesmos bytes; o que você vê é, enfim, o que eles significam.

## Quais são os limites da assinatura clara?

- **Cobertura.** Um contrato sem descrição publicada volta a um aviso de assinatura cega. No lançamento da Trezor, os protocolos cobertos eram 1inch, Aave, Lido, Tether, LiFi e Hyperliquid — um começo, não a rede inteira.
- **A descrição é uma afirmação.** Ela é tão honesta quanto o registro que a guarda, e diz como uma função se chama, não tudo o que o código do contrato faz em seguida.
- **Uma aprovação legível continua sendo uma aprovação.** "Permitir que este contrato gaste USDT ilimitado" em palavras simples é [a mesma permissão](/pt/blog/token-approvals/) que era em hexadecimal.
- **Só ajuda se você ler.**

A Nura assina no seu dispositivo, como toda carteira de autocustódia, e, mostre a carteira o que mostrar, a regra é a mesma: se você não consegue dizer o que um pedido faz, não aprove. O código dela está sob licença MIT, então a tela que ela monta é algo que você pode ler, em vez de aceitar por confiança.

A assinatura clara não torna uma transação segura. Ela a torna legível, que é a parte que sempre coube a você fazer.

## Fontes

- [Trezor ERC-7730 signing enhances hardware wallet security — Cryptonomist, 9 de setembro de 2026](https://en.cryptonomist.ch/2026/09/09/trezor-erc-7730-signing/)
