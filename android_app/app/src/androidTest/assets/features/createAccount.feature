Feature: Create Account

  "A user can create an account after scanning the QR-Code which they find in their gym."

  Scenario: Invalid QR-Code
    Given The app is opened
    When I scan a QR-Code which doesn't link to our FitCom Server
    Then Message toast with text "Invalid QR-Code!" is displayed

  Scenario: Invalid Name
    Given The app is opened and I scanned the right QR-Code
    When I enter "" into the input field
    Then Message toast with text "Enter your name" is displayed

  Scenario: Invalid Email
    Given The app is opened and I scanned the right QR-Code and typed my name into the input field
    When I enter "thatsNotAnEmail" into the email input field
    Then Message toast with text "Invalid Email address!" is displayed

