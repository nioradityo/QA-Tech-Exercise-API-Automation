describe('Weatherbit API', () => {
  it('should get the state code for the current weather', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.weatherbit.io/v2.0/current',
      qs: {
        lat: 40.730610,
        lon: -73.935242,
        key: '9cdff329299d41d199ff8ec60d3e3040'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.exist
      expect(response.body.data[0].state_code).to.exist
      const stateCode = response.body.data[0].state_code
      cy.log(`The state code is ${stateCode}`)
    })
  })
})
