/// <reference types="cypress"/>
describe('template spec', () => {
  it('Test Box', () => {
    cy.visit("https://demoqa.com")
    cy.wait(1000)
    cy.get('.card.mt-4.top-card').eq(0).click()
    cy.get("#item-0").click()
/*     cy.get("#userName").type('Jacob Jibon Arinda')
    cy.get("#userEmail").type('jacob.arinda@welldev.io')
    cy.get('.col-md-9.col-sm-12').eq(2).type("Borobag, Mirpu-2, Dhaka-1216")
    cy.get('.col-md-9.col-sm-12').eq(3).type("Thana Road, Dhamrai, Dhaka.")
    cy.get('.text-right.col-md-2.col-sm-12').eq(0).click()
    cy.get('#item-1').click()
    cy.get('.rct-collapse.rct-collapse-btn').click()
    cy.get('.rct-icon.rct-icon-expand-close').eq(2).click()
    cy.get('.rct-checkbox').eq(-2).click()
    cy.get('.rct-checkbox').eq(-1).click()
    cy.get('.rct-icon.rct-icon-expand-all').click()
    cy.get('.rct-icon.rct-icon-collapse-all').click() */
    // cy.get('#item-2').click()
    // cy.get('[type="radio"]').eq(0).check({force: true})
    // cy.get('[type="radio"]').eq(1).check({force: true})
    // cy.get('#item-3').click()
    // cy.get('#addNewRecordButton').click()
    // cy.get('#firstName').type('Jacob Jibon')
    // cy.get('#lastName-wrapper').type('Arinda')
    // cy.get('#userEmail').type('jacob.arinda@welldev.io')
    // cy.get('#age').type('25')
    // cy.get('#salary').type('20000')
    // cy.get('#department').type('Business')
    // cy.contains('Submit').click()
    // cy.get('#searchBox').type('jacob')
    // cy.get('.rt-table').scrollTo('right')
    // cy.get('.mr-2').click()
    // cy.get('#firstName').clear().type('jacob')
    // cy.contains('Submit').click()
    // cy.get('.rt-table').scrollTo('right')
    // cy.get('#delete-record-4').click()
    cy.get('#item-4').click()
    cy.wait(1000)
    cy.get('#doubleClickBtn').dblclick()
    cy.wait(1000)
    cy.get('#rightClickBtn').rightclick()
    cy.wait(1000)
    cy.get('.btn.btn-primary').click({multiple: true})
    // cy.contains('div', 'Click Me')
    //   .prev('button')
    //   .click() 
    // cy.get('div').contains('Click Me').next('button').click()
    // cy.contains('button', 'Click Me').prev('button').click()
    cy.get('#item-5').click()
    cy.get('#simpleLink').click()
    // cy.get('#item-5').click()

  })
})
