---
title: Phishing de EIP-7702 e o dreno de uma só assinatura
description: Pesquisa apresentada em agosto de 2026 ligou 63% das autorizações EIP-7702 da amostra a contratos maliciosos. Como uma assinatura de delegação entrega uma conta inteira.
date: 2026-10-05
tags: notícias, contas inteligentes
---

O EIP-7702 chegou ao Ethereum em 2025. Ele permite que uma conta comum aponte para um trecho de código de contrato e se comporte como ele — agrupamento, taxas patrocinadas, as comodidades de [uma conta inteligente](/pt/blog/smart-accounts-explained/) sem mudar para um novo endereço. Em agosto de 2026, uma pesquisa apresentada no USENIX Security Symposium constatou que 63% das transações de autorização EIP-7702 da sua amostra estavam ligadas a contratos maliciosos, com mais de US$ 2,3 milhões em roubos confirmados, como noticiou o CryptBull em 21 de agosto.

Uma amostra não é a rede inteira, e o número diz tanto sobre quem adotou o recurso primeiro quanto sobre o recurso em si. Ainda assim, é um aviso justo sobre uma assinatura específica.

## O que é uma delegação EIP-7702?

Uma mensagem assinada que diz: daqui em diante, execute o código deste contrato como a minha conta. Até você substituí-la ou removê-la, toda chamada ao seu endereço executa esse código, com os seus saldos.

Usado honestamente, o código é uma implementação de carteira bem conhecida. Usado desonestamente, é um sweeper — código cuja única função é enviar a outra pessoa tudo o que a conta tem, e tudo o que chegar depois.

## Qual é a diferença para um drainer comum?

Uma [aprovação](/pt/blog/token-approvals/) entrega um token. Uma delegação entrega a conta. [O truque mais antigo](/pt/blog/wallet-drainers/) precisava de uma assinatura separada para cada ativo. Este precisa de uma, e continua funcionando: fundos enviados depois a um endereço delegado podem ser levados assim que chegam.

## Com o que o pedido se parece?

Com uma atualização. "Habilitar recursos de conta inteligente." "Ativar transações sem gás." "Resgatar com gás patrocinado." O pedido tem a mesma estrutura de um legítimo. A única coisa que muda é o endereço para o qual se delega, que são quarenta caracteres hexadecimais.

## Como proteger uma conta

- Trate qualquer pedido de um site para delegar, atualizar ou "habilitar recursos inteligentes" como trataria um pedido da sua frase de recuperação. A atualização da própria carteira começa dentro da carteira, não em uma página para a qual você foi enviado.
- Se a sua carteira mostra o endereço do delegado, leia. Se ela não mostra o que você está autorizando, não assine.
- Uma delegação pode ser substituída ou removida com a assinatura de uma nova. Se você assinou algo de que duvida, faça isso primeiro, antes de enviar qualquer coisa para a conta.
- Se uma delegação apareceu porque a sua chave ou a sua frase vazou, removê-la não muda nada. Essa conta está perdida de vez e nunca mais deve receber fundos.

A Nura é uma carteira Ethereum de autocustódia: a chave está no seu dispositivo e assina o que você aprova. Esta nota não faz nenhuma afirmação sobre quais tipos de assinatura ela suporta. A regra não depende da carteira — uma assinatura que você não consegue ler é uma transferência que você não conferiu.

## Fontes

- [EIP-7702 wallet delegation faces scrutiny after phishing research — CryptBull, 21 de agosto de 2026](https://www.cryptbull.net/2026/08/21/eip-7702-wallet-delegation-faces-scrutiny-after-phishing-research/)
