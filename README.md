How To Build :
1. Download Tools = Cypress
2. Connect Cypress with VSCode
3. Create folder Project2 and Open with VSCode
4. Create new folder in e2e Folder on Cypress
5. Create new folder in apitest Folder on e2e
6. Create file on apitest name " soala.cy.js "
7. Create file on apitest name " soalb.cy.js "
8. Register to get the API token key - https://www.weatherbit.io/account/create 
9. got the API KEY : 9cdff329299d41d199ff8ec60d3e3040

STEP with write code:

A. 
1. Navigate to https://www.weatherbit.io/api/swaggerui/weather-api-v2#!/andautomatebelowAPIs :

describe('Weatherbit API', () => {
  it('should get the state code for the current weather', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.weatherbit.io/v2.0/current',

2. GET /current?lat={lat}&lon={lon} for values {lat} as 40.730610 and {lon} as -73.935242 :

qs: {
        lat: 40.730610,
        lon: -73.935242,
        key: '9cdff329299d41d199ff8ec60d3e3040'
      }

3. It should parse the response and get the value of the /data/state_code :

}).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.exist
      expect(response.body.data[0].state_code).to.exist
      const stateCode = response.body.data[0].state_code
      cy.log(`The state code is ${stateCode}`)
    })
  })
})

B.

HOW TO RUN :
1. Open the terminal and write " npm run test:Search" because the name of describe is "Search" or write on the terminal Project " npx cypress run"
2. Open the Cypress and choose Chrome/Firefox to run the test, Choose Specs and cypress automaticly direct to chorome/firefox to run the testing.
