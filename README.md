# Testes de UI - EBAC

![EBAC Logo](https://www.ebaconline.com.br/favicon.ico)

Repositório dedicado aos testes de Interface do Usuário (UI) realizados na plataforma de estudos da EBAC. Utilizando **Cypress**, **JavaScript** e **NodeJS** para garantir a qualidade e a funcionalidade das interfaces da plataforma.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Sobre o Projeto

Este projeto tem como objetivo automatizar testes de UI para a plataforma de estudos da EBAC, garantindo que as funcionalidades essenciais estejam funcionando conforme o esperado. Os testes foram desenvolvidos utilizando o Cypress, uma ferramenta moderna de testes E2E.

## Tecnologias Utilizadas

- **Cypress** - Framework de testes E2E
- **JavaScript** - Linguagem de programação
- **NodeJS** - Ambiente de execução JavaScript

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/gustavo-reinaldo/teste-ui.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd testes-ui
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

## Como Usar

Para rodar os testes, utilize o comando:

```bash
npm test
```

Ou, para abrir a interface do Cypress:

```bash
npx cypress open
```

## Estrutura do Projeto

```bash
testes-ui-ebac/
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   ├── fixtures/
│   ├── /screenshots
│   └── support/
│       └─── page-objects
├── node_modules/
├── .gitignore
├── cypress.json
├── package.json
└── README.md
```

- **cypress/fixtures**: Arquivos de dados para os testes.
- **cypress/e2e**: Contém os arquivos de testes.
- **cypress/screenshots**: Contém os prints dos testes
- **cypress/plugins**: Plugins do Cypress.
- **cypress/support**: Comandos personalizados e configurações.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

1. Fork o projeto
2. Crie uma nova branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Sinta-se à vontade para ajustar conforme necessário. Se precisar de mais alguma coisa, é só avisar!