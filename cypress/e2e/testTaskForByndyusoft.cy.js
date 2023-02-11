describe('Test task for Byndyusoft ', () => {

    it('Сheck contact information in the "Order a presentation" section', () => {

      cy.visit('https://www.google.ru/');

      cy.get('[name="q"]').type('Byndyusoft{enter}');

      cy.get('div[class="yuRUbf"] a').invoke('attr','href').then(($href) => {
          const url = $href
          cy.get('div[class="yuRUbf"] a').first().invoke('removeAttr','target').click();
          cy.origin(url, () => {
              cy.get('[class="know-more"]').contains('Заказать презентацию').click();
              cy.contains('sales@byndyusoft.com').should('be.visible')
              cy.contains('8 800 775-15-21').should('be.visible')
          })
      })
  })
});