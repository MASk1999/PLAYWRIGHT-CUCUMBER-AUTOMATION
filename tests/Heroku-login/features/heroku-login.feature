Feature: Login to Heroku app
    This file contains some basic scenarios to login to Heroku app

Background:
    Given I navigate to Heroku login page

Scenario: Test successful login
    Then I enter username
    And I enter password
    When I click on the login button
    Then I see message Welcome to Secure Area