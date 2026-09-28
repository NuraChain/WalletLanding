---
title: Política de Privacidade
description: A Nura Wallet não coleta dados pessoais. O que o app guarda no seu dispositivo e o que ele envia às redes que consulta.
date: 2026-09-26
---

A Nura Wallet é uma carteira de criptomoedas de autocustódia. Esta política explica o que acontece com as informações quando você a usa.

## A versão curta

A Nura Wallet não tem contas, nem cadastro, nem servidores próprios que armazenem suas informações. Não coletamos nem vendemos dados pessoais. Sua frase de recuperação e suas chaves privadas nunca saem do seu dispositivo.

## Informações que coletamos

**Nenhuma.**

Não usamos ferramentas de análise, telemetria, relatórios de falhas nem publicidade. O app não contém SDKs de rastreamento de terceiros. Não conseguimos ver seus saldos, seus endereços, suas transações nem como você usa o app.

## Informações armazenadas no seu dispositivo

O app armazena o seguinte localmente no seu dispositivo, e em nenhum outro lugar:

- Sua frase de recuperação e suas chaves privadas, criptografadas com **AES-GCM** usando uma chave derivada da sua senha com **Argon2id**.
- O verificador da sua senha (um hash — a senha em si nunca é armazenada).
- Suas configurações: redes escolhidas, tokens adicionados, idioma e preferências de exibição.
- Os dados do seu navegador de dApps: favoritos, histórico e abas abertas.

Esses dados ficam no armazenamento próprio do app no seu dispositivo. Eles nunca são enviados para nós.

**Não podemos recuperar sua carteira.** Como sua senha e sua frase de recuperação existem apenas no seu dispositivo, ninguém — nem mesmo nós — pode restaurar o acesso se você perdê-las. Guarde sua frase de recuperação em segurança e offline.

## Serviços que o app contata

Uma carteira não tem utilidade sem ler a blockchain, por isso o app faz solicitações a serviços que não operamos. Cada um deles recebe o **endereço IP** do seu dispositivo, como em qualquer solicitação pela internet, e vê o seguinte:

- **Nós públicos da rede (RPC)**, usados para ler saldos e transmitir transações: o endereço da sua carteira e as transações que você transmite.
- **Serviços de exploradores de blocos**, usados para o histórico de transações e os dados de tokens: o endereço de carteira consultado.
- **Um serviço de preços de tokens**, usado para exibir preços: para quais tokens os preços são solicitados.
- **Um mecanismo de busca**, usado para pesquisas no navegador de dApps integrado: seus termos de busca.
- **Nós e explorador da rede NuraChain**, usados para ler a rede NuraChain: o endereço da sua carteira.

As solicitações são feitas somente quando necessárias para um recurso que você está usando. Você pode alterar ou substituir os endpoints de rede em Configurações.

Cada um desses serviços tem sua própria política de privacidade, que rege o que ele faz com essas informações.

## O navegador de dApps integrado

O app inclui um navegador para visitar aplicativos descentralizados. Os sites que você abre nele são terceiros e podem ver as informações que um site normalmente vê, incluindo seu endereço IP e qualquer endereço de carteira que você escolha conectar.

Um site só pode interagir com sua carteira por meio de uma solicitação explícita que você aprove. Aprovar uma conexão compartilha o endereço público da sua carteira com esse site. Sua frase de recuperação e suas chaves privadas nunca são compartilhadas com nenhum site, e nenhuma transação jamais é assinada sem a sua confirmação.

Tenha cuidado com os sites aos quais você se conecta e com as transações que aprova.

## Crianças

A Nura Wallet não é direcionada a crianças, e não coletamos intencionalmente informações de ninguém.

## Seus direitos

Como não mantemos nenhum dado pessoal sobre você, não há nada para acessarmos, corrigirmos, exportarmos ou excluirmos. Os dados mantidos no seu dispositivo são removidos quando você exclui o app, junto com sua carteira criptografada — certifique-se de ter sua frase de recuperação antes de fazer isso.

## Alterações nesta política

Se esta política mudar, atualizaremos a data no topo desta página e publicaremos aqui a versão revisada.

## Mais

Para obter ajuda com o app, consulte o [Suporte](/pt/support/). As condições para usá-lo estão nos [Termos de Uso](/pt/terms/).
