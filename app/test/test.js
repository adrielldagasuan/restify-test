var should = require("should");
var expect = require("chai").expect;
var chai = require("chai");
var request = require("request");
var baseUrl = "http://localhost:3000/";
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("returns recipes", function(){
  it("returns recipes", function(done) {

    chai.request(baseUrl)
        .get('/recipes')
        .end(function (error, response, body){
          response.should.have.status(200);
        })
    done();
  });
});

describe("adds new recipe",function(){
  it("adds new recipe", function(done){

    chai.request(baseUrl)
        .post('/recipes')
        .send({name:"Recipe1",ingredients:["ingredient1","ingredient2","ingredient3"]})
        .end(function(error, response, body){
          res.should.have.status(201);
        });
    done();
  });
});
