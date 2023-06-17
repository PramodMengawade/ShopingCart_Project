$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Shoping.feature");
formatter.feature({
  "line": 1,
  "name": "Online Shopping Application",
  "description": "",
  "id": "online-shopping-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify login functionality of login page",
  "description": "",
  "id": "online-shopping-application;verify-login-functionality-of-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 5681494600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 205751500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_will_be_on_home_page()"
});
formatter.result({
  "duration": 9526000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "home page test",
  "description": "",
  "id": "online-shopping-application;home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user should see JBK logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 5101833300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});