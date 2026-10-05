---
title: O incidente da MetaMask e onde estão as chaves
description: A MetaMask revelou em 1º de outubro de 2026 um incidente de segurança em parte da infraestrutura. Por que violar o entorno da carteira de autocustódia não viola a chave.
date: 2026-10-05
tags: notícias, autocustódia
---

Em 1º de outubro de 2026, a MetaMask disse que estava lidando com um incidente de segurança que afetava parte da sua infraestrutura. Como noticiou o BleepingComputer no mesmo dia, a empresa afirmou que não havia "nenhuma ameaça imediata às carteiras MetaMask" e que, por precaução, estava fazendo a saída dos validadores afetados nas suas operações de staking. A Lido, o protocolo de staking a que esses validadores servem, esperava que as saídas estivessem concluídas até o fim de 7 de outubro.

Até 5 de outubro de 2026, a MetaMask não disse quais sistemas foram alcançados nem como. Vale dizer isso com todas as letras, porque muito do que está sendo repetido na internet vai além do que foi divulgado.

## As carteiras MetaMask foram hackeadas?

Nada do que foi publicado até agora diz isso. O comunicado da empresa traça a linha nas suas operações de staking, que ela descreve como não custodiais: ela opera validadores e diz que não gerencia chaves de saque.

## Como uma empresa de carteira pode ser invadida sem que as carteiras sejam?

Por causa de onde a chave está. Em uma carteira de autocustódia, a frase de recuperação é gerada e armazenada no seu dispositivo. A empresa que escreve o software opera outras coisas ao redor dela — servidores que retransmitem transações, feeds de preço, um serviço de staking, um site. Essas coisas podem falhar, e isso pode importar: um serviço cai, recompensas se perdem, uma página comprometida serve algo que não deveria. Mas nenhuma dessas máquinas guarda a sua frase, então nenhuma delas pode assinar por você. É isso [o que autocustódia significa de verdade](/pt/blog/self-custody-explained/), e um incidente como este é o dia em que a definição é posta à prova.

## O que fazer depois de um incidente de segurança em uma carteira?

- Leia o comunicado da própria empresa antes do resumo de qualquer pessoa.
- Não "migre", "revalide" nem "proteja" a sua carteira por um link. Incidentes são seguidos, em questão de horas, por mensagens oferecendo exatamente isso, e [esse pedido é o ataque](/pt/blog/wallet-drainers/).
- Nunca digite a sua frase de recuperação em lugar nenhum em resposta a uma notícia.
- Atualize o aplicativo apenas pelo lugar de onde você o instalou originalmente.

A Nura traça a mesma linha e diz onde ela está: a frase de recuperação é criptografada com AES-GCM e armazenada no seu dispositivo, sem conta e sem servidor guardando uma cópia. Isso não é uma afirmação de que nada ao redor de uma carteira pode dar errado. É uma declaração de onde a frase está, para você saber o que perguntar quando algo der errado.

## Fontes

- [MetaMask discloses security incident affecting its infrastructure — BleepingComputer, 1º de outubro de 2026](https://www.bleepingcomputer.com/news/security/metamask-discloses-security-incident-affecting-its-infrastructure/)
- [MetaMask responds to security incident, exits Ethereum validators as precaution — teiss, 2 de outubro de 2026](https://www.teiss.co.uk/news/metamask-responds-to-security-incident-exits-ethereum-validators-as-precaution-18251)
