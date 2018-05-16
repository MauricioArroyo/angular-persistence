'use strict';
/**************************************************************************************************
 * This sample demonstrates the most simplistic usage of Swagger-Express-Middleware.
 * It simply creates a new Express Application and adds all of the Swagger middleware
 * without changing any options, and without adding any custom middleware.
 **************************************************************************************************/

// Set the DEBUG environment variable to enable debug output
process.env.DEBUG = 'swagger:middleware';

var util            = require('util'),
    path            = require('path'),
    express         = require('express'),
    swagger         = require('swagger-express-middleware'),
    Middleware      = swagger.Middleware,
    MemoryDataStore = swagger.MemoryDataStore,
    Resource        = swagger.Resource,
    port            = 3000;

var app = express();
/*var middleware = new Middleware(app);*/

var middleware = require('swagger-express-middleware');

middleware(path.join(__dirname, '../backend-definition/backend-definition.yaml'), app, function(err, middleware) {
  // create custom data storage
  var myDB = new MemoryDataStore();
  myDB.save(
    new Resource(
      '/rws-data-request',
      '',
      {
        success: true,
        status: "OK",
        data: 
        {
          results: 
          [
              { 'key1': 'value1', 'key2': 'value2', 'key3': 'value3' }
          ]
        }
      }
    )
  );

  // Obligatorio
  app.use(middleware.metadata());

  // These two middleware don't have any options (yet)
  app.use(
    middleware.CORS(),
    middleware.validateRequest()
  );

  app.use(middleware.files(
      {
        // Serve the Swagger API from "/swagger/api" instead of "/api-docs"
        apiPath: '/',
        // Disable serving the "PetStore.yaml" file
        rawFilesPath: false
      }
    ));

  // The mock middleware will use our custom data store,
  // which we already pre-populated with mock data
  app.use(middleware.mock(myDB));

  app.listen(port, function() {
    console.log('The Swagger Mocked BackEnd is now running at http://localhost:'+port);
  });
});
