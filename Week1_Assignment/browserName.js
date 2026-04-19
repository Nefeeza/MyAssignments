// Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and `runTests` with `switch` for test type messages. 

// Declaring variables
let browserName;
let testType;

// Function launchBrowser using if-else
function launchBrowser(browserName) {
  if (browserName === "chrome") {
    console.log("Chrome browser...");
  } else {
    console.log(browserName + " browser...");
  }
}

// Function runTests using switch case
function runTests(testType) {
  switch (testType) {
    case "smoke":
      console.log("Running Smoke Tests...");
      break;
    case "sanity":
      console.log("Running Sanity Tests...");
      break;
    case "regression":
      console.log("Running Regression Tests...");
      break;
    default:
      console.log("No test type specified");
      break;
  }
}

// Calling the functions
launchBrowser("chrome");
launchBrowser("firefox");

runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("unknown"); // triggers default case