/// <reference types="cypress" />
import loginPage from '../support/page-objects/login.page';
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')
const dadosLogin = require('../fixtures/perfil.json')

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC -> começar pela página de login
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout 
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/minha-conta')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        loginPage.login(dadosLogin.user, dadosLogin.password)
        //--------------------first step---------------------//
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 1, 'M', 'Blue')
        cy.addProdutos('Argus All-Weather Tank', 1, 'S', 'Gray')
        cy.addProdutos('Apollo Running Short', 1, '32', 'Black')
        cy.addProdutos('Arcadio Gym Short', 1, '34', 'Red')
        //----------------second step---------------------//
        cy.get('.dropdown-toggle > .text-skin').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        //---------acessing the checkout page and filing the checkout options-----------//
        EnderecoPage.editarEnderecoFaturamentoCheckout(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].complemento,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefone,
            dadosEndereco[2].email
        );
        cy.get('#payment_method_cod').click() //->payment on delivery
        cy.get('#terms').click() //->agreeing with the terms
        cy.get('#place_order').click() //->concluding the purchase.
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });


})