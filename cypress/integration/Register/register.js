import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import * as selectors from '../Pages/selectors.js'

before(function()
   {
     Cypress.on('uncaught:exception', (err, runnable) => {
     return false
      })
   });


Given('Open the register URL and enter details and register',()=>{
    cy.fixture('Pages_TestData/Register').then(Register => 
        {
            cy.wait(5000) 
            cy.log('User enters URL')
            cy.visit(Register.URL) 
            cy.get(selectors)
            

        })

})


