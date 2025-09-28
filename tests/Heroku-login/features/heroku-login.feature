Feature: Login to Heroku app
    This file contains some basic scenarios to login to Heroku app

Background:
    Given I navigate to Heroku login page

Scenario: Test successful login
    Then I enter username
    And I enter password
    When I click on the login button
    Then I see message Welcome to Secure Area

Scenario: Test unsuccessful login using wrong password
    Then I enter username
    And I enter password as "some-wrong-password"
    When I click on the login button
    Then I see message Your password is invalid

@ignore
Scenario: Test unsuccessful login using wrong username  #---->This scenario will not run because of the ignore tag
    Then I enter username as "Ruskin-Bond"
    And I enter password as "ruskin-bond's-secret"
    When I click on the login button
    Then I see message your username is invalid!