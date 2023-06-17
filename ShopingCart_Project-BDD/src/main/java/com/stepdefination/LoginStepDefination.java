package com.stepdefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	
	WebDriver driver=null;
	
	@Given("^user should be on login page$")
	public void user_should_be_on_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ingecnotechnologies.com/other/Wcart/customer/site/login");
	}

	@When("^user enters valid credentials$")
	public void user_enters_valid_credentials() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		driver.findElement(By.id("loginform-username")).sendKeys("PramodMengawade");
		driver.findElement(By.id("loginform-password")).sendKeys("9767837743P*a");
		driver.findElement(By.id("savebutton")).click();
	}

	@Then("^user will be on home page$")
	public void user_will_be_on_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println(driver.getTitle());
		Assert.assertEquals(driver.getTitle(), "Login");
	}


}
