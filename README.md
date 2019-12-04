# .MD links

## Índice

* [1. Introdução](#1-introdução)
* [2. Backlog](#2-backlog)
* [3. Instruções de Instalação e Uso](#3-instruções-de-instalação-e-uso)

***

## 1. Introdução

O presente projeto teve como objetivo criar uma  biblioteca utilizando **Node.js**, que identifique links em arquivos de extensão *.md*.

Estes arquivos normalmente contém *links* que muitas vezes estão quebrados, ou que já não são válidos e isso prejudica muito o valor da informação.

Portanto, o objetivo além de acessar os links destes arquivos, também é o de validá-los retornando seu *status code*.

## 2. Backlog

![Backlog com as implementações da biblioteca](https://i.imgur.com/j64pECX.png)

## 3. Instruções de Instalação e Uso

É necessário que já tenhas instalado as últimas versões do **Node.js** e **npm**.

No terminal, digite `npm install e-v-s/md-links`

Após a instalação, você pode utilizar a biblioteca da seginte maneira:

Para ter acesso apenas aos links, digite no terminal `md-links caminho-do-arquivo`, isto retornará uma array com objetos contento `text`, para o título do link, e `href`, para o link propriamente dito.

Para ter acesso aos links com a validação usando *HTTP status code* digite `md-links caminho-do-arquivo --validate`, o que retorna, além de `text` e `href`, a propriedade `status` com o status da url.