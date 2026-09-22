---
title: Contas inteligentes e o que elas realmente movem
description: Uma conta que é um contrato pode ter regras — recuperação, limites, agrupamento. O que ela não pode é eliminar a chave que está embaixo.
date: 2026-09-14
tags: contas inteligentes, chaves
---

Existem dois tipos de conta no Ethereum. A comum é um par de chaves: um endereço derivado de uma chave privada, sem código e sem regra além de "uma assinatura válida move os fundos". A outra é um contrato, e a um contrato se pode dizer o que conta como válido.

## O que as regras compram

Como uma conta inteligente decide sozinha quando aceitar uma instrução, ela pode oferecer coisas que uma chave simples não oferece:

- **Recuperação** — indicar guardiões que possam, em conjunto, designar uma nova chave de assinatura se a antiga se perder. A conta sobrevive à chave.
- **Limites** — um teto diário, um atraso em transferências grandes, uma lista de destinos permitidos.
- **Agrupamento** — aprovar e trocar em uma única confirmação, o que elimina toda uma classe de estados pela metade.
- **Taxas pagas por outra pessoa**, ou em um token, já que a conta pode aceitar uma transação patrocinada.

## O que não muda

A conta continua executando o que os signatários autorizarem. Se você assinar uma aprovação maliciosa a partir de uma conta inteligente, ela passa; ao contrato foi dito para aceitar a sua assinatura, e ele aceitou. Guardiões e limites reduzem o estrago de uma chave perdida. Não fazem nada contra uma assinatura errada.

E ainda há uma chave. Ela pode estar no elemento seguro do seu celular em vez de derivada de doze palavras, mas alguma coisa assina, e o que assina é o que precisa ser protegido.

## Onde isso deixa uma carteira simples

Uma conta de par de chaves não tem custo de implantação, nem contrato em que confiar, nem caminho de atualização controlado por outra pessoa, e se comporta igual em todas as redes. Essas são propriedades reais, não apenas a ausência de recursos.

A Nura é uma carteira para esse tipo de conta: chaves derivadas e guardadas no dispositivo, transações assinadas ali, frase de recuperação criptografada com AES-GCM antes de ser armazenada. Simples no sentido de ter menos lugares para dar errado.
