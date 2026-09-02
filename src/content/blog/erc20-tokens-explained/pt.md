---
title: Por que seus tokens não estão na sua carteira
description: Um saldo ERC-20 é uma linha em um contrato. O que a sua carteira guarda é a chave capaz de alterá-la.
date: 2026-08-11
tags: ERC-20, tokens
---

Sua carteira mostra um saldo de tokens, então parece que os tokens estão dentro dela. Não estão, e nunca estiveram.

## Onde o saldo de um token vive

Um token ERC-20 é um contrato inteligente, e esse contrato mantém um livro de endereços e quantidades. Ter 100 de um token significa que o contrato guarda uma linha dizendo que o seu endereço tem 100. Sua carteira lê essa linha e a exibe.

O que a carteira realmente guarda é a chave privada daquele endereço — a única chave que pode autorizar uma mudança na linha.

É por isso que:

- **Um token pode aparecer sem você fazer nada.** Qualquer pessoa pode escrever o seu endereço no livro do próprio contrato. Tokens não solicitados não são invasão. Ignore-os.
- **Adicionar um token é uma mudança de exibição.** O saldo existia antes de o aplicativo listá-lo, e escondê-lo não move nada.
- **Um endereço, várias redes.** O mesmo endereço funciona em cada uma, mas saldo em uma rede não é saldo em outra. O contrato pertence a uma única rede.

## As aprovações são a parte a vigiar

Para deixar um contrato mover seus tokens, você concede a ele uma permissão de gasto. Essa permissão continua valendo depois da transação que a criou, muitas vezes sem limite de valor, até você revogá-la. A maior parte das perdas de token que não são perdas da frase são perdas por aprovação.

Leia as aprovações com o mesmo cuidado das transferências. São a única coisa que você assina e que continua agindo depois.

## O que isso significa para a carteira

A Nura envia e recebe moedas nativas e tokens ERC-20, e alterna entre redes. O que ela guarda é a chave; o que a rede guarda é o saldo. A tela é uma visão do livro, não um recipiente.

Uma vez claro isso, o resto se encaixa — inclusive por que nada se move sem uma assinatura da chave que está no seu dispositivo.
