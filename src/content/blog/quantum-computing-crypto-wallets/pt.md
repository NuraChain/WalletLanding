---
title: Computadores quânticos e a sua carteira em 2026
description: Em setembro de 2026, os supervisores financeiros da UE citaram a computação quântica como risco à criptografia das blockchains. O que está exposto hoje e o que não está.
date: 2026-10-05
tags: notícias, chaves
---

No seu relatório de riscos do outono de 2026, os três supervisores financeiros da UE — as autoridades de bancos, de mercados e de seguros, escrevendo em conjunto — disseram que um computador quântico avançado "poderia minar alguns sistemas de criptografia amplamente usados para proteger comunicações, transações, bancos de dados e blockchains", e que tais ameaças "poderiam se materializar antes de qualquer aplicação comercial viável". O Cryptonomist noticiou o trecho em 24 de setembro de 2026. O roteiro da própria Comissão Europeia pede aos Estados-membros que comecem a migrar para a criptografia pós-quântica até o fim de 2026, com os usos de alto risco protegidos até 2030.

Isso são reguladores acrescentando um risco a uma lista. Não é uma máquina quebrando uma chave. As duas afirmações importam.

## Um computador quântico consegue roubar cripto hoje?

Não. Nenhuma máquina que existe consegue derivar uma chave privada a partir de uma pública. A preocupação é com uma máquina futura, e com quanto tempo leva para fazer uma mudança desse tamanho — e é por isso que quem planeja em décadas está levantando o assunto agora.

## Quais carteiras ficariam expostas?

As assinaturas que o Ethereum e o Bitcoin usam se apoiam em um problema que um computador quântico grande o bastante poderia resolver: partir de uma chave pública e chegar de volta à chave privada. Um endereço é um hash da chave pública, o que a esconde. Mas a chave pública é revelada quando você assina. [Toda transação que você envia carrega uma assinatura](/pt/blog/how-transactions-are-signed/) da qual a chave pública pode ser recuperada, então uma conta Ethereum que já enviou alguma transação tem a sua chave pública na blockchain para sempre. No Bitcoin, o mesmo vale para endereços antigos e reutilizados.

## O que é "colher agora, decifrar depois"?

Coletar dados hoje para quebrá-los quando as ferramentas existirem. No caso das blockchains, não há nada para colher em segredo. As chaves públicas são públicas, e continuarão lá.

## O que quem tem uma carteira pode fazer agora?

Muito pouco, e essa é a resposta honesta. A correção é uma mudança nas próprias redes: novos esquemas de assinatura e um jeito de as contas existentes migrarem para eles. Existem propostas tanto para o Bitcoin quanto para o Ethereum, e nenhuma das duas redes adotou uma. Quando adotarem, migrar vai significar uma chave nova.

- Não compre um produto porque ele diz "à prova de computação quântica". Quem decide quais assinaturas aceita é a rede, não a carteira.
- Ignore qualquer mensagem mandando você mover fundos com urgência por causa da computação quântica.
- Mantenha uma frase de recuperação que restaure em carteiras padrão, para poder acompanhar a migração que vier.

A Nura não faz nenhuma afirmação sobre resistência quântica. É uma carteira Ethereum e assina do jeito que o Ethereum exige; quando a rede mudar as suas assinaturas, toda carteira terá de acompanhar. O código tem licença MIT e é aberto, então essa mudança será uma que você poderá ler.

## Fontes

- [Quantum computing blockchain threat: EU regulators warn — Cryptonomist, 24 de setembro de 2026](https://en.cryptonomist.ch/2026/09/24/quantum-computing-blockchain-threat/)
