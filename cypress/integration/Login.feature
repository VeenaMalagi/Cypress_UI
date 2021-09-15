Feature: Login functionality
    To check login functionality for DemoQA Book Store web application


@Sanity
Scenario: To validate whether Login page is displayed or not
Given Open the URL and User is on login page
Then Login page should be displayed


@Regression 
Scenario: To Validate Login functionality for valid credentials
Given Open the URL and User is on login page
When User enters valid username and password and clicks on Login button
Then User should navigate to Profile page











