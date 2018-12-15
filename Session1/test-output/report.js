$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/767053/Desktop/Cucumber Practice/Session1/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail login feature",
  "description": "",
  "id": "gmail-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Facebook login scenario",
  "description": "",
  "id": "gmail-login-feature;facebook-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of page is Gmail Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and pwd",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdef.User_is_already_on_login_page()"
});
formatter.result({
  "duration": 30653234902,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdef.title_of_page_is_Gmail_Login()"
});
formatter.result({
  "duration": 15899659,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdef.User_enters_username_and_pwd()"
});
formatter.result({
  "duration": 634157838,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdef.User_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 7873512504,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdef.User_is_on_home_page()"
});
formatter.result({
  "duration": 216674647,
  "status": "passed"
});
});