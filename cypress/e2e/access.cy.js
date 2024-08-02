describe('login', ()=>{
    

    it('Login com sucesso', ()=>{
        //acessar aplicação
        cy.visit('https://phptravels.com/demo/')
        cy.get('#address').type(Cypress.env('TESTE'))
        
    })
})