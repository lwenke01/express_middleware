'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var request = chai.request;
var expect = chai.expect;
require(__dirname + '/../server');


describe('testing express_middleware', () => {
  it('should parse incoming data from json', (done)=>{
    request('localhost:5000')
    .post('/unicorns')
    .send({name: 'Henry'})
    .end((err, req) =>{
      expect(err).to.eql(null);
      expect(req.body).to.be.a('object');
      expect(req).to.be.status(200);
      done();
    });
  });
  it('should post the /unicorns data', (done)=>{
    request('localhost:5000')
    .post('/unicorns')
    .send({id: '002'})
    .end((err, res) =>{
      expect(err).to.eql(null);
      expect(res).to.be.status(200);
      expect(Array.isArray(res.body)).to.eql(false);
      done();

    });
  });
});
