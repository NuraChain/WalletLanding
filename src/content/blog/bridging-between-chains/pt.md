---
title: Na verdade nada atravessa uma ponte
description: Tokens não viajam entre redes. Um lado trava alguma coisa, o outro emite alguma coisa, e os dois são mantidos juntos por confiança.
date: 2026-09-10
tags: pontes, redes
---

A palavra ponte faz parecer que os seus tokens caminham de uma blockchain para outra. Eles não podem. Uma rede só conhece o próprio estado, e nenhum contrato em uma blockchain consegue ler ou escrever o registro de outra.

## O que acontece em vez disso

Você envia tokens a um contrato na primeira rede, que os trava ou queima. Um sistema que observa essa rede relata o fato à segunda, onde um segundo contrato libera ou emite uma quantidade equivalente para o seu endereço lá.

Dois eventos separados em dois registros separados, unidos por aquilo que estiver observando. A natureza desse observador é o modelo de segurança inteiro.

## E é por isso que as perdas acontecem em pontes

Alguns dos maiores roubos de cripto foram roubos de pontes, e não porque a criptografia falhou. Uma ponte mantém um grande estoque de ativos travados de um lado e pode emitir ativos do outro, então quem controla o relato controla a emissão. Comprometa os signatários, ou encontre uma falha na verificação, e você emite contra nada.

Antes de usar uma, é justo perguntar quem atesta a transferência: um comitê de signatários, um conjunto de validadores, ou uma prova que a própria rede de destino verifica.

## Notas práticas

- **O token que você recebe é outro token.** Um ativo em ponte é o próprio contrato dele na rede de destino, e o valor depende de a ponte continuar solvente.
- **Confira a rede de destino antes de assinar**, não depois. Uma transferência para o endereço certo na rede errada em geral não pode ser desfeita.
- **Você precisa da moeda nativa dos dois lados.** Chegar com tokens e sem gás é ficar preso.
- **Rotas oficiais primeiro.** Quase todo phishing de ponte é uma interface falsa, não uma ponte quebrada.

Trocar de rede em uma carteira é grátis e instantâneo. Mover valor entre elas não é nem uma coisa nem outra.
