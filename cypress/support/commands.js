Cypress.Commands.add('login', (user, password) => {
    cy.get('#username').type(user);
    cy.get('#password').type(password);
    cy.get('.woocommerce-form > .button').click();
})

Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
    cy.get('#reg_email').type(email);
    cy.get('#reg_password').type(senha);
    cy.get(':nth-child(4) > .button').click();

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
    cy.get('#account_first_name').type(nome);
    cy.get('#account_last_name').type(sobrenome);
    cy.get('.woocommerce-Button').click();
})

Cypress.Commands.add('addProdutos', (produto, quantidade, tamanho, cor) => {
    cy.get('[class="product-block grid"]')
        .contains(produto) //-> selecionar o primeiro item do product-block grid(que é a div que vai armazenar os produtos)
        .click();

    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade) //-> caso queira mudar a quantidade de itens a serem adicionados, substituir o type()
    cy.get('.single_add_to_cart_button').click()
})