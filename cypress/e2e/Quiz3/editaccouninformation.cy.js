describe('template spec', () => {
  
    it('edit account frist name', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account')
      cy.get('#email').type ('bulanbintang@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Jakarta%1899#')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
      cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
      cy.get('#firstname').clear().type('jajang')
      cy.get('#lastname').clear().type('bintang')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      cy.get('.message-success > div')
    })
    it('edit account frist name gagal', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account')
      cy.get('#email').type ('bulanbintang@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Jakarta%1899#')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
      cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
      cy.get('#firstname').clear()
      cy.get('#lastname').clear()
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      cy.get('.message-success > div')
    })

  
  
   
  })