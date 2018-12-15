package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:/Users/767053/Desktop/Cucumber Practice/Session1/src/main/java/Features/login.feature",
		glue= {"stepdef"},
		format= {"pretty", "html:test-output"}
		
		)

public class TestRunner {

}
