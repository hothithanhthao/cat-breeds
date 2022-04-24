'use strict';
require('dotenv').config();

const mysql = require('mysql2');
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

exports.db = db;
db.connect(err => {
  if (err) throw err;
  console.log('Database connected...');
});

var fs = require('fs'),
    path = require('path'),
    http = require('http');

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = process.env.NODE_DOCKER_PORT || 8080;

var options = {
    swaggerUi: path.join(__dirname, '/swagger.json'),
    controllers: path.join(__dirname, './controllers'),
    useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
  };
  
  // The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
  var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
  var swaggerDoc = jsyaml.safeLoad(spec);
  
  // Initialize the Swagger middleware
  swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());
  
    // Validate Swagger requests
    app.use(middleware.swaggerValidator());
  
    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));
  
    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());
  
    // Start the server
    http.createServer(app).listen(serverPort, function () {
      console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
      console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });
  
  });