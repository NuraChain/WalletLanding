---
title: Hacks de cripto de setembro de 2026, por partes
description: Setembro de 2026 foi o pior mês do ano em roubos de cripto, com mais de US$ 766 milhões. Dois incidentes somaram mais de 90% disso, e em nenhum um usuário perdeu a chave.
date: 2026-10-05
tags: notícias, autocustódia
---

Setembro de 2026 foi o pior mês do ano em roubos de cripto. A PeckShield contou 55 incidentes e US$ 766,5 milhões perdidos; a CertiK contou 97 incidentes e US$ 768,4 milhões, como noticiou o Cryptonomist em 1º de outubro. Dois rastreadores, contando de formas diferentes, ficaram a menos de dois milhões de dólares um do outro. O total acumulado da CertiK no ano estava em US$ 2,68 bilhões, em 656 incidentes.

Um número desse tamanho soa como motivo para não confiar em nada. Ele é mais útil visto por partes.

## Quais foram os maiores hacks de cripto de setembro de 2026?

Dois eventos respondem por cerca de US$ 708 milhões do total:

- **Bitget, 24 de setembro.** Cerca de US$ 388 milhões na conta desses rastreadores, das carteiras quentes e mornas da corretora.
- **Liquid Network, 6 de setembro.** Cerca de US$ 320 milhões de uma sidechain do Bitcoin, a maior parte devolvida depois.

Todo o resto naquele mês — dezenas de incidentes — somou, junto, cerca de US$ 60 milhões. Os três maiores entre eles ficaram entre US$ 5,9 milhões e US$ 7,8 milhões cada.

## O que os dois grandes têm em comum?

Nenhum foi uma pessoa perdendo a própria chave. Um foi o processo de assinatura da própria corretora [aprovando transferências sobre as quais lhe haviam mostrado dados falsos](/pt/blog/bitget-hack-hot-wallet/). O outro foi uma falha no software que uma federação de empresas opera para [guardar bitcoin em nome dos seus usuários](/pt/blog/liquid-network-exploit/). Nos dois, pessoas haviam entregado a custódia a um sistema, e foi o sistema que falhou.

Esse é o padrão na maioria dos meses. O número da manchete é dominado por alguns grandes estoques de ativos de outras pessoas, porque é ali que um único sucesso rende mais.

## Isso torna a autocustódia mais segura?

Torna os riscos diferentes, e as estatísticas só mostram bem um dos tipos. As perdas por [assinar algo que você não deveria](/pt/blog/wallet-drainers/), ou por uma frase de recuperação mal guardada, são pequenas individualmente, raramente relatadas e não entram em um gráfico mensal. São reais, e são as que você, pessoalmente, controla.

- O dinheiro guardado por um sistema está exposto ao pior dia desse sistema.
- O dinheiro guardado por uma chave está exposto a como a chave é guardada e ao que ela assina.
- Escolher a autocustódia é escolher a segunda lista. Ela é mais curta, e é toda sua.

A Nura está na segunda lista. A frase de recuperação é criptografada com AES-GCM e fica no seu dispositivo; a senha que a desbloqueia passa pelo hash Argon2id; não há conta nem servidor guardando uma cópia. Nada disso lê um pedido por você.

## Fontes

- [September 2026 crypto hacks cost $766 million, the year's worst month — Cryptonomist, 1º de outubro de 2026](https://en.cryptonomist.ch/2026/10/01/crypto-hacks-september-2026/)
