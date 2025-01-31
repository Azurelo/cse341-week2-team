const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts'
  },
  host: 'cse341-week2-team.onrender.com/',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];

swaggerAutogen(outputFile, endpointsFiles);
