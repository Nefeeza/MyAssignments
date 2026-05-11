enum Environment {
  Local = "LOCAL",
  Development = "DEVELOPMENT",
  Staging = "STAGING",
  Production = "PRODUCTION"
}

function runTests(environment: Environment): void {
  console.log(`Running tests in ${environment} environment`);
}

runTests(Environment.Local);
runTests(Environment.Development);
runTests(Environment.Staging);
runTests(Environment.Production);

console.log(Environment);