package tech.fitcom.app.cucumber.steps

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

class CreateAccountSteps {
    @Given("^The app is opened$")
    fun the_app_started_succesfully() {
    }
    @When("^I scan a QR-Code which doesn't link to our FitCom Server$")
    fun i_scan_an_invalid_qr_code() {
    }
    @Then("^Message toast with text \"Invalid QR-Code!\" is displayed$")
    fun message_toast_invalid_qr_code() {
    }

    @Given("^The app is opened and I scanned the right QR-Code$")
    fun the_app_started_succesfully_and_right_qr_code() {
    }
    @When("^I enter \"\" into the input field$")
    fun i_enter_a_string_into_the_input_field() {
    }
    @Then("^Message toast with text \"Enter your name\" is displayed")
    fun message_toast_enter_your_name() {
    }

    @Given("^The app is opened and I scanned the right QR-Code and typed my name into the input field$")
    fun the_app_started_succesfully_and_right_qr_code_and_name_in_input_field() {
    }
    @When("^I enter \"thatsNotAnEmail\" into the email input field$")
    fun i_enter_a_wrong_email_in_the_input_field() {
    }
    @Then("^Message toast with text \"Invalid Email address!\" is displayed")
    fun message_toast_invalid_email_adress() {
    }
}
