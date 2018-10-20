# GraphQL: Fetching Data Queries.

## Introduction:

This tutorial was taken from Stephen Grider's [GraphQL with React: The Complete Developers Guide](https://www.udemy.com/graphql-with-react-course/).

This application's sole purpose is serving raw data via basic GraphQl queries. The server being used, GraphQL Express, is referred to as the reference implementation of GraphQL, is the official implementation that FaceBook maintains.

## Setup

To test this technology locally...

1. Run `git clone https://github.com/zmess24/GraphQL-Fetching-Data-Queries.git` to clone the repo.
2. `cd` in to the directory.
3. Run `npm install` to install the necessary dependencies.
4. In a terminal window, run `npm run json:server` to bootup [json-server](https://github.com/typicode/json-server) (Mock RESTful api).
5. In a seperate terminal window, run `npm start` to start the express server.
6. Navigate to `http://localhost:4000/graphql` to start experimenting with queries.