"use strict";
var Environment;
(function (Environment) {
    Environment["Local"] = "LOCAL";
    Environment["Development"] = "DEVELOPMENT";
    Environment["Staging"] = "STAGING";
    Environment["Production"] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(environment) {
    console.log(`Running tests in ${environment} environment`);
}
runTests(Environment.Local);
runTests(Environment.Development);
runTests(Environment.Staging);
runTests(Environment.Production);
console.log(Environment);
