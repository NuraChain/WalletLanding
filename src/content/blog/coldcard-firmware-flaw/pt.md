---
title: A falha da Coldcard, ou quando os dados estão viciados
description: Um erro de firmware de 2021 deixou algumas sementes da Coldcard com só 40 bits de aleatoriedade. Em 2026, uns 1.816 BTC foram levados. Qual é a força real de uma semente.
date: 2026-10-05
tags: notícias, frase de recuperação
---

Entre 30 de julho e 4 de agosto de 2026, atacantes levaram cerca de 1.816 BTC — por volta de US$ 116 milhões — de mais de 5.200 endereços cujas chaves haviam sido geradas em carteiras de hardware Coldcard. A TRM Labs, em seu relato de 5 de agosto, atribuiu a causa à versão 4.0.1 do firmware, lançada em março de 2021: um erro de configuração de compilação fez alguns dispositivos trocarem a fonte de números aleatórios do hardware por uma fonte fraca, em software. Sementes projetadas para carregar 128 bits de aleatoriedade podiam ter apenas 40.

Nenhum dispositivo foi tocado. Nenhuma frase foi vista. Os atacantes adivinharam.

## O que deu errado no firmware da Coldcard?

Uma frase de recuperação é um número aleatório grande escrito em palavras. Toda a sua força está em que o número poderia ter sido qualquer um de um conjunto astronomicamente grande. Se o gerador que o produz é fraco, o conjunto é pequeno, e um conjunto pequeno pode ser vasculhado. Quarenta bits são cerca de um trilhão de possibilidades — ao alcance de hardware comum. A primeira onda levou 594 BTC em 25 minutos.

## Por que atualizar o firmware não resolve?

Porque a falha estava em como as sementes eram criadas, não em como o dispositivo funciona. Como diz a TRM, atualizar corrige o problema para carteiras criadas depois, mas não protege carteiras cujas sementes foram geradas sob o firmware vulnerável. Uma semente assim continua sendo o mesmo número fraco — em qualquer dispositivo, em qualquer carteira em que você a restaure. A única correção é uma semente nova, e mover os fundos para ela.

## As carteiras de hardware ainda são seguras?

[A distinção que importa](/pt/blog/hot-vs-cold-wallets/) — se a chave já esteve em uma máquina que se conecta à internet — está intacta. Esta foi uma falha diferente: a chave era adivinhável antes mesmo de ser armazenada. Um dispositivo pode guardar um segredo perfeitamente e, ainda assim, ter recebido um segredo ruim.

## O que tirar disso

- Uma semente é tão forte quanto a aleatoriedade do momento em que foi criada. Nada depois disso a melhora.
- [A frase é a carteira](/pt/blog/recovery-phrase-security/), falhas incluídas. Restaurar uma frase fraca em outro lugar restaura a fraqueza.
- Uma frase padrão também é o que permite que você saia. Mudar para uma semente nova não exige nada além de uma carteira compatível.
- A falha ficou cinco anos em um firmware publicado antes de ser explorada. Código disponível para leitura não é o mesmo que código que foi lido.

A Nura é uma carteira Ethereum, e esta nota não faz nenhuma afirmação sobre a fonte de números aleatórios dela. Confira — é para isso que serve um repositório sob licença MIT. O que a Nura declara é o que acontece depois que uma frase existe: ela é criptografada com AES-GCM antes de ser armazenada, e a senha que a desbloqueia passa pelo hash Argon2id.

## Fontes

- [The largest hardware wallet exploit of 2026: inside the USD 116 million Coldcard hack — TRM Labs, 5 de agosto de 2026](https://www.trmlabs.com/resources/blog/the-largest-hardware-wallet-exploit-of-2026-inside-the-usd-116-million-coldcard-hack)
