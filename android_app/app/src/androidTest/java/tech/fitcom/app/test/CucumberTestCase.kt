package tech.fitcom.app.test

import cucumber.api.CucumberOptions

@CucumberOptions(features = ["features/createAccount.feature", "features/startTraining.feature"], glue = ["tech.fitcom.app.cucumber.steps"])
@SuppressWarnings("unused")
class CucumberTestCase