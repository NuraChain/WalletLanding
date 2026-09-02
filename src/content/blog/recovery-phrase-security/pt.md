---
title: Sua frase de recuperação é a carteira
description: Doze palavras não são uma senha. Elas são a própria carteira, e precisam ser tratadas assim.
date: 2026-05-12
tags: frase de recuperação, backup
---

Uma senha protege uma conta que existe em outro lugar. Uma frase de recuperação não protege nada — ela _é_ a coisa. Com essas palavras, qualquer aplicativo de carteira em qualquer dispositivo reconstrói todas as chaves que você já usou naquela carteira.

## De onde vêm as palavras

A frase é um jeito compacto de escrever um número aleatório muito grande. A carteira escolhe esse número, mapeia para palavras de uma lista fixa e deriva dele as suas chaves privadas — as mesmas chaves, na mesma ordem, sempre. É por isso que a frase restaura uma carteira, em vez de apenas destravá-la.

Também significa que as palavras não são uma dica nem um apelido. São o segredo em si, escrito num formato que você copia à mão sem errar.

## O que decorre disso

- **Anote fora da internet.** Uma captura de tela é um arquivo, e arquivos sincronizam.
- **Nunca digite em um site.** Nenhum suporte legítimo pede a frase, em hipótese alguma.
- **Teste o backup uma vez.** Restaure numa instalação nova antes de haver algo em jogo.
- **Duas cópias, dois lugares.** A perda comum não é roubo: é uma cópia só, numa gaveta só.

## O que um aplicativo pode e não pode fazer

No dispositivo, a Nura criptografa a frase de recuperação com AES-GCM antes de armazená-la e aplica Argon2id à senha que a destrava — uma função deliberadamente lenta e pesada em memória, para tornar a adivinhação cara.

O que nenhum aplicativo pode fazer é proteger uma frase que você já entregou, ou reproduzir uma que você nunca anotou. A criptografia no dispositivo defende a cópia do dispositivo. A cópia escrita à mão é defendida pelo lugar onde você a guarda.

Trate essas palavras como trataria a escritura de um imóvel. Elas estão muito mais perto disso do que de uma senha.
