Feature: Lift Git Repository

  Scenario: project is not versioned with git
    Given the project is not versioned with git
    When the project is lifted
    Then git is not configured

  Scenario: Lift existing repository
    Given the project is versioned with git
    And git is properly configured
    When the project is lifted
    Then the attributes file is defined

  Scenario: Lift existing repository with missing config
    Given the project is versioned with git
    And git is missing the attributes file
    When the project is lifted
    Then the attributes file is defined
