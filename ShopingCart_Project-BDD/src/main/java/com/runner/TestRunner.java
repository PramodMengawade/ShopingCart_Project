package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	
		features="src/main/java/com/features",
		glue="com.stepdefination",
		plugin="html:target",
		dryRun=false, //to compile feature file
		monochrome =true	
		)

public class TestRunner {

}
