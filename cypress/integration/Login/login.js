import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import * as selectors from '../Pages/selectors.js'

before(function()
   {
     Cypress.on('uncaught:exception', (err, runnable) => {
     return false
      })
   });


Given('Open the URL and User is on login page',()=>{
    cy.fixture('Pages_TestData/LoginPage').then(LoginPage => 
        {
            cy.wait(5000) 
            cy.log('User enters URL')
            cy.visit(LoginPage.URL)  
            cy.url().should('include', '/login')

        })
    
        
})


When('User enters valid username and password and clicks on Login button',()=>{
    cy.fixture('Pages_TestData/LoginPage').then(LoginPage => 
        {
            cy.wait(10000) 
            cy.log('User enters username')
            cy.get(selectors.USERNAME).type(LoginPage.USERNAME)  
            cy.log('User enters password')
            cy.get(selectors.PASSWORD).type(LoginPage.PASSWORD) 
            cy.log('User clicks on Login button')
            cy.get(selectors.LOGIN).click({force:true})
         
        })
})

Then('User should navigate to Profile page',()=>{

            cy.wait(10000) 
            cy.log('User should navigate to Profile page')
            cy.get(selectors.LOGOUT).should('have.text','Log out').and('be.visible')
            cy.log("******* Regression Scenario is completed **************")
            
         
          
})


Then('Login page should be displayed',()=>{

            cy.wait(10000) 
            cy.get(selectors.LOGIN_PAGE_NAME).should('have.text','Login').and('be.visible')
            cy.log("******* Sanity Scenario is completed **************")
             
})

Then('User should be able to see NewUser button and click on it',()=>{
    cy.fixture('Pages_TestData/LoginPage').then(LoginPage => 
        {
            cy.wait(10000) 
            cy.log('User is on login page')
            cy.get(selectors.NEWUSER).click({force:true}) 
             
        })

})



And('After clicking on NewUser button user should navigate to Register page',()=>{

    cy.wait(10000) 
    cy.log('User has clicked on NewUser button')
    cy.get(selectors.REGISTER_PAGE_NAME).should('have.text','Register').and('be.visible')
    cy.log("******* Progression Scenario is completed **************")

})