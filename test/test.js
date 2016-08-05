var should = require("should");
var expect = require("chai").expect;
var chai = require("chai");
var request = require("request");
var baseUrl = "http://localhost:3000/";
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("returns recipes", function(){
  it("returns recipes", function(done) {
    "use strict";
    chai.request(baseUrl)
        .get('/recipes')
        .end(function (error, response, body){
          response.should.have.status(200);
        });
    done();
  });
});

describe("adds new recipe",function(){
  it("adds new recipe", function(done){
    "use strict";
    let recipe = {
       name : "Pinakbet",
       ingredients : ["Ampalaya","Eggplant","Squash","Okra","Bagoong"]
    };
    chai.request(baseUrl)
        .post('/recipes')
        .send(recipe)
        .end(function(error, response, body){
          res.should.have.status(201);
        });
    done();
  });
});
