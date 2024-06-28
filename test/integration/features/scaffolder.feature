Feature: Git Scaffolder

  Scenario: Scaffold
    When the project is scaffolded
#    Then a git repo is initialized
    And git configuration is defined
    And scaffold results are returned
