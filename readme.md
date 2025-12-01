# Bruno Test API Project

This project contains API tests created using [Bruno](https://www.usebruno.com/), a modern open-source API client for testing the [ReqRes API](https://reqres.in/).

## Overview

This is a **Bruno API Test Suite** for the ReqRes API with comprehensive test coverage including user creation, retrieval, updates, and error handling scenarios. The project uses Bruno CLI for automated test execution with detailed HTML and JUnit XML reporting.

## Project Structure

### Core Configuration
- **bruno.json** - Collection metadata specifying the project name "ReqResAPI", type, and allowed modules (crypto, buffer, form-data)
- **collection.bru** - Global settings including:
  - API key header (`x-api-key`)
  - Pre-request variables (pagination settings, user data)
  - Pre-request script that sets the current date using utility functions
  - Global tests validating response time < 5 seconds

### Test Suites (01-Test-Users)
Organized into 4 main test categories:

1. **01-Create User** - Tests for user creation:
   - Valid user creation
   - Bad JSON requests
   - Empty user fields
   - Invalid data types (first_name as number)
   - Authentication failures
   - Duplicate user attempts

2. **02-Get Users** - Tests for retrieving user lists:
   - All users retrieval
   - Pagination by page number
   - Invalid pagination parameters
   - Large page number handling

3. **03-Get User By ID** - Tests for retrieving individual users:
   - Valid user ID lookups
   - Invalid/bad ID formats
   - Non-existent user IDs

4. **04-Patch User** - Tests for updating user data:
   - Email updates
   - Last name updates
   - Empty update attempts
   - Restricted field updates (meta information)

### Supporting Files
- `environments/` - Environment variables for different test setups
- `99-util/util.js` - Utility functions (date formatting helper)
- `report-test-api.html` & `results.xml` - Test execution reports

## Getting Started

1. **Install Bruno:**  
    Download and install Bruno from [here](https://www.usebruno.com/download).

2. **Open the Project:**  
    Open Bruno and select the project folder to load collections.

3. **Configure Environments:**  
    Update environment variables as needed in the `environments/` folder.

4. **Run Tests:**  
    Select a collection and run the tests directly in Bruno.

5. **Run Tests With Bruno Cli
```
bru run --env "test-env" --env-var base_url="https://reqres.in" -r --delay 200 --reporter-junit results.xml  --reporter-html report-test-api.html --reporter-skip-all-headers
```

## Resources

- [Bruno Documentation](https://docs.usebruno.com/)
- [ReqRes API](https://reqres.in/) (Sample API used for testing)

