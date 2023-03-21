describe('Weather API Test', () => {
    it('Should parse the response and get the value of the { timestamp_utc, weather } for all the data entries', () => {
      const postalCode = '10001'; // Replace with your postal code
      const apiKey = '9cdff329299d41d199ff8ec60d3e3040'; // Replace with your API key
  
      cy.request({
        method: 'GET',
        url: `https://api.weatherbit.io/v2.0/forecast/3hourly?postal_code=${postalCode}&key=${apiKey}`,
        responseType: 'json'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.empty;
  
        cy.wrap(response.body)
          .then(JSON.parse)
          .then((parsedResponse) => {
            const { data } = parsedResponse;
            const { length } = data;
  
            const extractedValues = data.map(({ timestamp_utc, weather }) => {
              return { timestamp_utc, weather };
            });
  
            expect(extractedValues).to.have.length(length);
            expect(extractedValues).to.not.be.empty;
          });
      });
    });
  });
  
