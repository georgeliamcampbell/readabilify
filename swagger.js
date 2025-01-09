const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Readabilify',
        version: '0.1.0',
      },
    },
    apis: ['./routers/*.js'], // Path to your router files
  };
  
  module.exports = options;