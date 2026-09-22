---
title: O que conferir antes de confiar em uma carteira
description: Não é um ranking. É uma lista curta de perguntas cujas respostas são fatos, e que a maioria das páginas de produto nunca chega a declarar.
date: 2026-09-21
tags: carteiras, checklist
---

Toda carteira diz ser segura. Essa afirmação não é verificável, então não serve. Estas são as perguntas que têm resposta.

## Onde a chave mora?

A primeira pergunta e a maior parte da resposta. A chave privada é derivada e guardada no seu dispositivo, ou um servidor guarda ela, ou um pedaço dela? "Não custodial" é usado de forma bastante solta, então vale procurar a frase que diz claramente onde a chave está e o que sai do dispositivo.

## Você pode ler o código?

Um repositório aberto não garante que alguém tenha auditado. O que ele garante é que a afirmação sobre a chave pode ser verificada por alguém que não seja quem a faz. Uma carteira fechada pede que você aceite a mesma afirmação por fé.

## O que protege o segredo armazenado?

Alguma coisa em disco guarda a sua frase. Procure os detalhes: qual cifra a criptografa e como é feito o hash da senha que a abre. Uma função de memória dura como Argon2id encarece o chute; um hash simples não. Vagueza aqui já é uma resposta.

## O que acontece quando você perde o dispositivo?

Descubra antes que isso importe. Uma frase de recuperação padrão também restaura em outras carteiras, o que significa que você não fica preso a este aplicativo. Um esquema exclusivo de um fornecedor pode ser mais conveniente e vale entender por inteiro com antecedência.

## Ela faz o que você precisa sem extras?

Enviar e receber, trocar de rede, conectar a uma dApp. Produtos extras pendurados — cartões, rendimento, trading — são código extra perto da sua chave e, com frequência, contrapartes extras.

A Nura responde a isso do mesmo jeito em todos os idiomas: chaves no dispositivo, frase criptografada com AES-GCM, senha com hash Argon2id, licença MIT, sem conta e sem servidor guardando nada. Você não precisa aceitar isso por confiança — o repositório está ali.
