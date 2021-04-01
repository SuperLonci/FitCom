Feature: Start Training

  "A user can select a training plan and start that training. After the user finished that training a summary will be shown."

  Scenario: Training successfully done
    Given The app is opened and the training overview is shown
    When The user selects a training plan
    And The user clicks start training
    And The user enters values of a set
    And The user finishes training
    Then Summary is shown

  Scenario: User stops the training while exercise is running
    Given The app is opened and the training overview is shown
    When The user selects a training plan
    And The user clicks start training
    And The user closes the training during an ongoing exercise
    Then Last values of a set will be saved in the db
