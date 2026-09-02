---
title: Gás, em termos simples
description: Por que uma transferência custa o que custa, e o que você paga de fato ao pagar uma taxa.
date: 2026-07-07
tags: gás, taxas
---

Cada transação pede que milhares de computadores façam o mesmo trabalho e concordem com o resultado. Gás é como esse trabalho é medido e pago.

## Três números

- **Gás usado** — quanto trabalho a transação exige. Uma transferência simples da moeda nativa é fixa em 21.000 unidades. Transferir um token custa mais; um swap, mais ainda.
- **Preço do gás** — o que você paga por unidade, em gwei, um bilionésimo da moeda nativa. É a parte que se move com a demanda.
- **Limite de gás** — o teto que você define. Se passar dele, a transação falha, e o trabalho já feito é pago mesmo assim.

A taxa é o gás usado multiplicado pelo preço do gás. O primeiro número é uma propriedade do que você faz. O segundo, de quando você faz.

## Por que o preço se move

O espaço de bloco é finito e leiloado continuamente. Quando muita gente quer entrar ao mesmo tempo, o preço da inclusão sobe; quando a fila esvazia, ele cai. Nada mudou na sua transação — a fila mudou.

## Consequências práticas

- Transferências simples são baratas e previsíveis. Chamadas de contrato não são nem uma coisa nem outra.
- Uma transação que falha também custa gás. A rede fez o trabalho antes de descobrir a falha.
- Esperar é uma estratégia real. A mesma transferência em um horário calmo pode custar uma fração.
- As taxas são pagas na moeda nativa da rede, nunca no token que você está movendo.

Esse último ponto pega as pessoas o tempo todo: uma conta que só tem tokens não consegue movê-los, porque não consegue pagar pelo trabalho. Mantenha um pouco da moeda nativa em qualquer conta que pretenda usar. É o combustível, e nada anda sem ele.
