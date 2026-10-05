---
title: Vazaram dados de clientes da Trezor, mas nenhuma chave
description: Uma invasão na parceira de envios da Trezor expôs nomes, endereços e telefones de mais de 80.000 compradores em 2026. Nenhum dispositivo foi tocado e ainda assim importa.
date: 2026-10-05
tags: notícias, golpes
---

Em agosto de 2026, a Trezor disse que uma invasão na ShipMonk, empresa que despacha os pedidos dela, havia exposto os dados de 13.689 clientes. Em 5 de setembro, acrescentou cerca de 67.000 clientes nos Estados Unidos, de registros de pedidos de 2019 a 2021, noticiou o The Hacker News. O que vazou foram nomes, endereços de e-mail, números de telefone, endereços de entrega e números de pedido. A invasão não afetou a segurança das carteiras de hardware da Trezor, e nenhuma semente de recuperação nem chave privada foi envolvida.

Seria fácil arquivar isso em "não aconteceu nada". A invasão não abriu uma única carteira. O que ela produziu foi uma lista.

## O que foi exposto no vazamento da Trezor?

Uma lista de pessoas que compraram uma carteira de hardware, com onde moram e como contatá-las. Os invasores entraram por uma falha em uma ferramenta de análise usada pela empresa de envios — nada a ver com criptografia. O ponto mais fraco na segurança de uma fabricante de carteiras acabou sendo um banco de dados em um parceiro.

## Por que um endereço vazado importa se as chaves estão seguras?

Porque ele diz duas coisas a um estranho: que você provavelmente tem cripto, e como entrar em contato com você. Tudo o que vem depois usa isso.

- **Phishing que sabe o seu nome e o seu pedido.** E-mails, ligações e cartas se passando pela fabricante, pedindo que você "verifique" ou "proteja" o seu dispositivo. A Trezor avisou os clientes para esperarem exatamente isso.
- **Substituições falsas.** Um dispositivo que você não pediu chegando pelo correio, ou instruções para digitar a sua semente em um site.
- **O tipo físico.** Um endereço residencial ligado à compra de uma carteira é o ponto de partida para [coerção em vez de invasão](/pt/blog/wrench-attacks-crypto-2026/).

## O que fazer se os meus dados vazaram?

- Trate toda mensagem não solicitada sobre a sua carteira como hostil, por mais que ela saiba sobre você.
- A sua semente vai no seu dispositivo e em nenhum outro lugar. Nenhum processo de suporte precisa dela.
- Não use um dispositivo que chegue sem ter sido pedido.
- Veja o que mais está ligado a esse endereço e a esse número de telefone, e separe isso da sua cripto onde puder.

## A autocustódia protege a privacidade?

Ela protege chaves. A privacidade depende do que você teve de entregar pelo caminho. [A sua frase de recuperação é a carteira](/pt/blog/recovery-phrase-security/) — mas o seu nome em uma lista de clientes é outra exposição, e nenhuma cifra a cobre.

A Nura é um download, não uma entrega: não há conta para criar, nem endereço de entrega para informar, nem servidor guardando a sua frase. Isso reduz uma exposição. Não esconde você — redes públicas são públicas, e o lugar onde você compra cripto ainda sabe quem você é.

## Fontes

- [Trezor says ShipMonk breach exposed 67,000 U.S. customers' data it said was deleted — The Hacker News, 5 de setembro de 2026](https://thehackernews.com/2026/09/trezor-says-shipmonk-breach-exposed.html)
