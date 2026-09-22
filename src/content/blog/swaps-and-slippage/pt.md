---
title: Para que serve de verdade a tolerância a slippage
description: O preço que você recebe é decidido quando a transação entra em um bloco, não quando você aperta o botão. Slippage é a folga que você aceita.
date: 2026-09-03
tags: swaps, slippage
---

A cotação de um swap é uma previsão. Entre o momento em que sua carteira a mostra e o momento em que a transação entra em um bloco, outras pessoas negociam contra o mesmo pool e o preço se move. A tolerância a slippage é você dizendo o quanto ele pode se mover antes de o swap falhar em vez de executar.

## Por que existe essa folga

Um swap on-chain negocia contra um pool de dois tokens. A taxa vem da proporção entre eles, então cada negociação — inclusive a de todo mundo — desloca essa proporção. Sua transação fica na fila enquanto isso acontece.

Coloque a tolerância em zero e quase nada confirma. Coloque alta demais e você já concordou de antemão com um preço ruim.

## O custo de deixá-la alta

Uma tolerância ampla é um convite. Quem observa a fila pode colocar uma negociação à frente da sua para empurrar o preço até o limite do que você disse que aceitaria, deixar seu swap executar ali e desfazer a posição. Você recebe o pior preço que autorizou, e parece oscilação normal de mercado.

É por isso que 1% em um par profundo e líquido e 1% em um par raso não são a mesma decisão.

## Lendo a tela de um swap

- **Taxa** — a previsão.
- **Mínimo recebido** — o único número que é uma promessa. É a taxa depois da sua tolerância. Julgue a operação por ele.
- **Impacto no preço** — o quanto a sua própria operação move o pool. Impacto grande significa que o pool é raso demais para o tamanho que você está negociando, e nenhuma tolerância resolve isso.
- **Taxa de rede** — paga na moeda nativa da rede, e paga tanto se o swap der certo quanto se reverter.

Deixe a tolerância no menor número que permita a operação passar, e olhe o mínimo recebido antes de assinar. É com esse valor que você está de fato concordando.
