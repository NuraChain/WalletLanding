---
title: O que autocustódia significa de verdade
description: A custódia se resume a uma pergunta — quem guarda a chave privada — e todo o resto decorre da resposta.
date: 2026-04-14
tags: autocustódia, chaves
---

Toda carteira responde a uma pergunta: quem guarda a chave privada. Tudo o que se discute depois — corretoras, frases semente, dispositivos de hardware — decorre dessa única resposta.

## Duas respostas

Quando uma corretora ou uma carteira hospedada guarda a chave, o seu saldo é uma linha no banco de dados deles. É um direito contra eles. Comporta-se como um saldo bancário: podem congelá-lo, podem perdê-lo e podem ser obrigados a entregá-lo. Em troca, você tem redefinição de senha e alguém para acionar.

Quando você guarda a chave, o saldo está na rede e a chave está no seu dispositivo. Ninguém consegue movê-lo sem essa chave. E também não há ninguém para acionar.

## O que muda de fato

- **Recuperação.** Não existe redefinição. Uma frase de recuperação que você não consegue apresentar é uma carteira que ninguém abre — inclusive você.
- **Aprovação.** Nada se move sem uma assinatura feita pela sua chave. Um site pode pedir; só você pode assinar.
- **Exposição.** Seu risco sai da segurança _deles_ e passa para o seu backup.

Esse último é o trade que as pessoas subestimam. A autocustódia não elimina o risco. Ela o desloca: do balanço de uma empresa para um papel na sua gaveta.

## Por que ainda assim vale a pena

Porque os modos de falha passam a ser coisas que você enxerga e resolve. A insolvência de uma corretora é invisível até os saques pararem. Seu próprio backup é algo que você pode conferir hoje à noite.

A Nura é de autocustódia: a frase de recuperação é criptografada com AES-GCM antes de ser armazenada, a senha que a destrava passa por Argon2id e as transações são assinadas no dispositivo. Sem conta, sem custódia, sem servidor guardando a sua frase.

Ou seja, o resto destas notas trata da parte que agora é sua — a chave, a frase e o que acontece quando você assina.
