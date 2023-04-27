# Desafio 02: Nginx, Node.js e MySQL

Este projeto implementa uma aplicação Node.js que se conecta a um banco de dados MySQL e utiliza o Nginx como proxy reverso. A aplicação insere um registro na tabela `people` do banco de dados MySQL e exibe uma lista de nomes cadastrados.

## Funcionamento

A aplicação Node.js se conecta ao banco de dados MySQL e cria a tabela `people` caso ela ainda não exista. Em seguida, insere alguns nomes de exemplo na tabela e, a cada acesso à aplicação, insere a string "Full Cycle Rocks!" na tabela. A aplicação então retorna uma lista de nomes cadastrados na tabela `people`.

O Nginx atua como proxy reverso, encaminhando as requisições feitas na porta 8080 para a aplicação Node.js na porta 3000.

O Docker Compose orquestra os três serviços (Node.js, Nginx e MySQL), facilitando a construção, configuração e execução dos containers.

## Estrutura do Projeto

```
fullcycle-docker-desafio-2/
│
├── nginx/
│   ├── Dockerfile
│   └── nginx.conf
│
├── node/
│   ├── Dockerfile
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│
└── docker-compose.yaml
```

## Requisitos

- Docker
- Docker Compose

## Como executar

1. Clone o repositório para o seu computador.

2. Navegue até o diretório do projeto e execute o seguinte comando para construir e iniciar os serviços:

```bash
docker-compose up -d
```

3. Acesse a aplicação em seu navegador, acessando `http://localhost:8080`. Você verá a mensagem "Full Cycle Rocks!" e a lista de nomes cadastrados no banco de dados.

4. Quando terminar de testar a aplicação, você pode parar e remover os containers com o seguinte comando:

```bash
docker-compose down
```

## 🤔 Como contribuir para o projeto

- Faça um **fork** do projeto;
- Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
- Salve as alterações e crie uma mensagem de commit contando o que você fez:`git commit -m "feature: My new feature"`
- Envie as suas alterações: `git push origin my-feature`

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)


## 📝 Licença

Este projeto esta sobe a licença MIT. Veja a [LICENÇA](https://opensource.org/licenses/MIT) para saber mais.

Feito com ❤️ por Alquipo Neto 👋🏽 [Entre em contato!](https://www.linkedin.com/in/alquiponeto/)

</h3>
