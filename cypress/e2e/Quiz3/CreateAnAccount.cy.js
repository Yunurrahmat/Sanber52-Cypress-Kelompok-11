import CreateAccountPage from "../../support/pageObject/CreateAccount.page"
// let data = require('../../fixtures/userData.json')

// Declare variables outside the cy.fixture callback
let fname, lname, Pass, validEmail, invalidconPass;


describe('Testing Create An Account', () => {
  function randomNEmail() {
    const randomString = Math.random().toString(36).substring(2, 5);
    const email = "sifa" + randomString + "@gmail.com";
    return email;
  }
 // Random email for Create An Account Successfully
  let gmail = randomNEmail();

  beforeEach(() => {
    // Call userData from fixture
    cy.fixture('userData').then((userData) => {
      ({ fname, lname, Pass, validEmail, invalidconPass } = userData.createAccount);
    });

    CreateAccountPage.visit() 
    
  })

  // Testing for Create An Account Successfully
  it('Create An Account Successfully', () => {   
    CreateAccountPage.personaInformation(fname, lname) //Use Fixture and Use userData
    CreateAccountPage.signInInformation(gmail, Pass, Pass)
    CreateAccountPage.createAccountbtn()
    CreateAccountPage.successMessage().should('be.visible'); //Use PageObject
    cy.url().should('include', '/account')
  })

  //Testing for Create An Account Failed - Email Has Been Used
  it('Create An Account Failed - Email has been used', () => {   
    CreateAccountPage.personaInformation(fname, lname) //Use Fixture and Use userData
    CreateAccountPage.signInInformation(validEmail, Pass, Pass)
    CreateAccountPage.createAccountbtn()
    CreateAccountPage.errorMessages().should('be.visible'); //Use PageObject
    cy.url().should('include', '/customer/account/create/')
  })

  //Testing for Create An Account Failed - Invalid Email
  it('Create An Account Failed - Invalid Email', () => {   
    CreateAccountPage.personaInformation(fname, lname) //Use Fixture and Use userData
    CreateAccountPage.signInInformation('emailInvalid', Pass, Pass)
    CreateAccountPage.createAccountbtn()
    CreateAccountPage.emailError().should('be.visible');//Use PageObject
    cy.url().should('include', '/customer/account/create/')
  })
  
  //Testing for Create An Account Failed - Firstname Empty
  it('Create An Account Failed - Firstname Empty', () => {   
    CreateAccountPage.personaInformation('',lname)
    CreateAccountPage.signInInformation(gmail, Pass, Pass)
    CreateAccountPage.createAccountbtn()
    cy.verifyText('#firstname-error','This is a required field.') // Use command
    cy.url().should('include', '/customer/account/create/')
  })

  //Testing for Create An Account Failed - Lastname Empty
  it('Create An Account Failed - Lastname Empty', () => {   
    CreateAccountPage.personaInformation(fname,'')
    CreateAccountPage.signInInformation(gmail, Pass, Pass)
    CreateAccountPage.createAccountbtn()
    cy.verifyText('#lastname-error','This is a required field.') // Use command
    cy.url().should('include', '/customer/account/create/')
  })


 //Testing for Create An Account Failed - Email Empty
  it('Create An Account Failed - Email Empty', () => {   
    CreateAccountPage.personaInformation(fname, lname) //Use Fixture and Use userData
    CreateAccountPage.signInInformation('', Pass, Pass)
    CreateAccountPage.createAccountbtn()
    cy.verifyText('#email_address-error','This is a required field.') // Use command
    cy.url().should('include', '/customer/account/create/')
  })

   //Testing for Create An Account Failed - Password Empty
   it('Create An Account Failed - Password Empty', () => {   
    CreateAccountPage.personaInformation(fname, lname) //Use Fixture and Use userData
    CreateAccountPage.signInInformation(gmail, '', Pass)
    CreateAccountPage.createAccountbtn()
    cy.verifyText('#password-error','This is a required field.') // Use command
    cy.url().should('include', '/customer/account/create/')
  })

  //Testing for Create An Account Failed -  Confirmation Password Failed
  it('Create An Account Failed - Confirmation Password Failed', () => {   
    CreateAccountPage.personaInformation(fname, lname) //Use Fixture and Use userData
    CreateAccountPage.signInInformation(gmail, Pass, invalidconPass)
    CreateAccountPage.createAccountbtn()
    cy.verifyText('#password-confirmation-error','Please enter') // Use command
    cy.url().should('include', '/customer/account/create/')
  })

//Testing for Create An Account Failed - Confirmation Password Empty
it('Create An Account Failed - Confirmation Password Empty', () => {   
  CreateAccountPage.personaInformation(fname, lname) //Use Fixture and Use userData
  CreateAccountPage.signInInformation(gmail, Pass,'' )
  CreateAccountPage.createAccountbtn()
  cy.verifyText('#password-confirmation-error','This is a required field.') // Use command
  cy.url().should('include', '/customer/account/create/')
})

 
})

