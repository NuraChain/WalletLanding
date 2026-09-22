---
title: A permissão que continua agindo
description: Uma transferência acontece uma vez. Uma aprovação fica ligada, muitas vezes por um valor ilimitado, até você voltar e desligá-la.
date: 2026-08-22
tags: aprovações, tokens
---

A maior parte das perdas de tokens que não são perdas da frase são perdas por aprovação. Vale saber exatamente o que é uma aprovação, porque é a única coisa que você assina que continua funcionando depois que a transação confirma.

## O que você está concedendo

Um contrato de token mantém um registro de saldos. Ele mantém também um segundo registro: quem pode mover os tokens de quem. Quando um swap pede que você aprove primeiro, ele está pedindo uma linha nesse segundo registro — permissão para o contrato dele mover o seu token em seu nome.

A transferência vem depois. A aprovação é a porta; a transferência é atravessá-la.

## Por que o ilimitado é o padrão

Muitas dApps pedem o valor máximo possível em vez do valor que você vai negociar agora. Isso poupa uma segunda aprovação depois e sai mais barato em taxas ao longo do tempo. Também significa que, se aquele contrato for explorado algum dia — ou já for malicioso desde o início — ele pode mover todo o seu saldo daquele token, em qualquer momento no futuro, sem tocar na sua frase de recuperação.

## O que fazer a respeito

- **Aprove o valor, não o máximo**, onde a interface deixar escolher.
- **Revogue o que você não usa mais.** Uma permissão a um protocolo que você usou uma vez no ano passado é exposição pura, sem nenhuma vantagem.
- **Leia o nome do token na tela de aprovação.** O perigoso em um site de phishing não é a transferência que ele mostra, é a aprovação embaixo dela.
- **Lembre que é por token, por contrato e por rede.** Revogar em uma rede não faz nada em outra.

Uma aprovação não é um ajuste dentro da sua carteira. É um fato registrado na blockchain, ao lado do seu saldo, e sobrevive ao aplicativo de onde você a concedeu.
