package stepdef;

import org.openqa.selenium.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;
import junit.framework.Assert;

public class Loginstepdef {
	
	WebDriver d;
	
	
	@Given("^User is already on login page$")
	public void User_is_already_on_login_page(){
		System.setProperty("webdriver.chrome.driver", "C://chromedriver.exe");
		d=new ChromeDriver();
		d.get("https://www.facebook.com/");
			    
	}

	@When("^title of page is Gmail Login$")
	public void title_of_page_is_Gmail_Login(){
	    String title=d.getTitle();
	    System.out.println("Login Page" + title);
	    Assert.assertEquals("Facebook - Log In or Sign Up", title);
	}

	@Then("^User enters username and pwd$")
	public void User_enters_username_and_pwd(){
		d.findElement(By.id("email")).sendKeys("sarang13.sai@gmail.com");
		d.findElement(By.id("pass")).sendKeys("ramsaishri14");
	  
	}

	@Then("^User clicks on Login Button$")
	public void User_clicks_on_Login_Button(){
		d.findElement(By.id("u_0_2")).click();
	}

	@Then("^User is on home page$")
	public void User_is_on_home_page(){
	     String title1=d.getTitle();
	     System.out.println("Home Page" + title1);
	     Assert.assertEquals("Facebook", title1);
	     
	    
	}

	

}
