## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is a simple cat breeds search using modern Swagger, NodeJS, MYSQL and Docker-compose technologies

## Technologies
Project is created with:
* Swagger APIs
* NodeJS
* MYSQL
* Docker-compose

## Setup
* Requires Docker install in your pc [More info](https://docs.docker.com/compose/)
* Defines .env file

      MYSQLDB_USER=root
      MYSQLDB_ROOT_PASSWORD=12345678
      MYSQLDB_DATABASE=catBreeds
      MYSQLDB_LOCAL_PORT=3307
      MYSQLDB_DOCKER_PORT=3306

      NODE_LOCAL_PORT=6868
      NODE_DOCKER_PORT=8080

      CLIENT_ORIGIN=http://127.0.0.1:8081
      CLIENT_API_BASE_URL=http://127.0.0.1:6868/v1

      REACT_LOCAL_PORT=8888
      REACT_DOCKER_PORT=3000
* Runs the project:
    * Navigate to root folder
    * Run following command to build and start docker containers
        `docker-compose up`
    * Testing: using Postman to test
        * `http://localhost:6868/docs`: Swagger APIs docs
        * `http://localhost:6868/v1/cat`: cats operations (GET, POST)
        * `http://localhost:6868/v1/cat/{catId}`: single cat operations (GET, PUT, DELETE)
