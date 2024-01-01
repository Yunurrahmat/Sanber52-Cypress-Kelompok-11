//Muhamad Makhasinul Maarif 

describe('Choose Product Test', () => {
    beforeEach( () => {
        cy.visit('https://magento.softwaretestingboard.com/collections/yoga-new.html')
    })
    it('Shooping Options valid - Filter', () => {
        cy.get(':nth-child(1) > .filter-options-title').click();
        cy.get(':nth-child(2) > .filter-options-title').click();
        cy.get('.active > .filter-options-content > .items > :nth-child(1) > a').should('exist').click();
        cy.get('.wrapper > .products > :nth-child(1)').click();
        cy.get('.home > a').click();
    })
    // it('Shooping Options Invalid - ', () => {
    //     //cy.get('.wrapper > .products > :nth-child(1)').click();
    // })
    
    it('Shooping Options Invalid - Add to cart ', () => {   
        cy.get(':nth-child(1) > .filter-options-title').click();
        cy.get(':nth-child(2) > .filter-options-title').click();
        cy.get('.active > .filter-options-content > .items > :nth-child(1) > a').should('exist').click();
        cy.get('.wrapper > .products > :nth-child(1)').click();
        cy.get('#product-addtocart-button').click();
        cy.get('.message-error > div', { timeout: 5000 }).should('contain', 'The requested qty is not available');
    })
    it.only('Shooping Options valid - Filter', () => {
        cy.get(':nth-child(1) > .filter-options-title').click();
        cy.get(':nth-child(2) > .filter-options-title').click();
        cy.get('.active > .filter-options-content > .items > :nth-child(1) > a', { timeout : 10000}).should('exist').click();
        cy.get(':nth-child(1) > .filter-options-title').click();
        cy.get('.allow > .filter-options-content > .items > :nth-child(1) > a', { timeout : 20000}).should('exist').click();
    })
}) 
