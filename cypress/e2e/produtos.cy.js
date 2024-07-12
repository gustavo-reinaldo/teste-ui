///<reference types="cypress" />

describe('Funcionalidade pagina de produtos', () => {
    beforeEach(() => {
        cy.visit('produtos');
    });

    it('Deve selecionar um produto na lista', () => {
        cy.get('[class="product-block grid"]')
            //.first() -> selecionar o primeiro item do product-block grid(que é a div que vai armazenar os produtos)
            //.last() -> selecionar o ultimo item do product-block grid(que é a div que vai armazenar os produtos)
            //.eq(3) -> selecionar o item do index do parametro utilizado no product-block grid(que é a div que vai armazenar os produtos)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click();
    });

    it('Deve adicionar um produto ao carrinho', () => {

        var quantidade = 2
        
        cy.get('[class="product-block grid"]')
        .last() //-> selecionar o primeiro item do product-block grid(que é a div que vai armazenar os produtos)
        .click();

        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade) //-> caso queira mudar a quantidade de itens a serem adicionados, substituir o type()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', quantidade)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', (quantidade))
    });

    it('Deve adicionar um produto ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Atlas Fitness Tank', 4, 'M', 'Blue')
    });
});