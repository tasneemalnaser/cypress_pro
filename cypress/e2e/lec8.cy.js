/// <reference types= "cypress" />

cy.on("uncaught:exception", (e) => {
  return false;
});
// this code to try to open the website ones in Arabic and another in English and enter the word to research
describe('template spec', () => {
  it('passes', () => {
    let websites= [
      "https://www.almosafer.com/ar",
      "https://www.almosafer.com/en",
    ];
    let RandomIndex = Math.floor(Math.random() * websites.length);

    cy.visit(websites[RandomIndex])
    cy.get('.cta__saudi').click()
    cy.get('#uncontrolled-tab-example-tab-hotels').click()
    if (RandomIndex==0)
    {
      cy.get('[data-testid="AutoCompleteInputWrapper"]').type("دبي")
      cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()
      


    }
    else if (RandomIndex==1)
    {
      cy.get('[data-testid="AutoCompleteInputWrapper"]').type("dubai")
      cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()

      cy.wait(5000)
      

    

    }
  })
})