class loginPage {

    login (user, password) {
        cy.get('#username').type(user);
        cy.get('#password').type(password, {log: false});
        cy.get('input[name="login"].button').click();
    }
}

export default new loginPage()