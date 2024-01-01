class CreateAccountPage{
    visit() {
        cy.visit('');
        cy.get('.home-main > .content > .title').should('contain.text', 'Get fit and look fab');
        cy.get('#ui-id-3 > span').should('contain.text', 'What');
  
        cy.goClick('.panel > .header > :nth-child(3) > a')
        cy.url().should('include', '/customer/account/create/')
        cy.get('.base').should('contain.text', 'Create New')
        cy.get('.info > .legend > span').should('contain.text','Personal Information')
        cy.verifyText('.field-name-firstname > .label > span','First')
        cy.verifyText('.field-name-lastname > .label > span','Last')
        cy.verifyText('.account > .legend > span','Sign-in')
        cy.verifyText(':nth-child(3) > .label > span','Email')
        cy.verifyText('.password > .label > span','Password')
        cy.verifyText('.confirmation > .label > span','Confirm Password')
      }
    
   
  
    personaInformation(firstname, lastname) {
      // Check if firstname is provided, if not, leave it empty
      if (firstname !== null && firstname !== undefined && firstname !== '') {
          cy.get('#firstname').type(firstname);
      }
  
      // Check if lastname is provided, if not, leave it empty
      if (lastname !== null && lastname !== undefined && lastname !== '') {
          cy.get('#lastname').type(lastname);
      }
  }
  
    signInInformation(email,pass, passcon){
      if (email !== null && email !== undefined && email !== '') {
        cy.get('#email_address').type(email);
      }
      if (pass !== null && pass !== undefined && pass !== '') {
        cy.get('#password').type(pass)
        // cy.get('#password-confirmation').as('confirmPasswordInput').type(passcon);
      }
      if (passcon !== null && passcon !== undefined && passcon !== '') {
        cy.get('#password-confirmation').as('confirmPasswordInput').type(passcon);
      }
  
    }
  
    createbtn() {
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
      }
  
    successMessage() {
        return cy.contains('Thank you for registering with Main Website Store.');
      }
    
    errorMessages() {
        return cy.get('.message-error > div');
      }
  
    createAccountbtn() {
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
      }
  
    emailError() {
        return cy.get('#email_address-error');
      }
     
    
  }
  
  export default new CreateAccountPage;
  
  
  
  
  
  
  
  
  
  
  // class CreateAccountPage{
  //   firstname= '#firstname'
  //   lastname='#lastname'
  //   email='#email_address'
  //   pass='#password'
  //   passcon='#password-confirmation'
  //   CreatBtn='#form-validate > .actions-toolbar > div.primary > .action'
  //   errorMsg='.message-error > div'
  //   successMsg='.message-success > div'
  //   conErrorMsg='#password-confirmation-error'
  //   errorEmail='.message-error'
  
  
  
  //   clickCreateBtn(){
  //     cy.get(this.CreatBtn).click()
  //   }
  
  //   verifyErrorMsg(message){
  //     cy.get(this.errorMsg).should('contain.text', message)
  //   }
  
  //   verifySuccessMsg(message){
  //     cy.get(this.successMsg).should('contain.text', message)
  //   }
  
  //   verifyConErrorMsg(message) {
  //     cy.get(this.conErrorMsg).should('be.visible').and('contain.text', message); // Verify visibility and text
  //   }
  
    
    
  // }
  
  // export default new CreateAccountPage()
  