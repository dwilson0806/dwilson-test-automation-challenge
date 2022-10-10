#This framework is based on playwright and uses a fixture based approach.
#Please see this page for more information: https://playwright.dev/docs/test-fixtures

1. install node i'm using:
        node -v 18.10.0
        npm -v 8.19.2

2. run: npm install

3. run: npm run businessinsider-prod-e2e (this will run both main challenge and bonus)

4. run retail page test suite: npm run businessinsider-prod-e2e -- --grep=retail (this will run main challenge)

5. run latest page test suite: npm run businessinsider-prod-e2e -- --grep=latest (this will run bonus challenge)

6. run debug: npm run businessinsider-prod-e2e -- --debug

Note, by default i've set chromium (headless: false) mainly to show what tests are doing
Typically I'd run headless.  This can be set in playwright.config.ts (headless: true)