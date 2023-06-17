Feature: Online Shopping Application

@login
Scenario: Verify login functionality of login page
Given user should be on login page 
When user enters valid credentials
Then user will be on home page

Scenario: home page test
Given user should be on login page
Then user should see JBK logo