'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var request = chai.request;
var expect = chai.expect;
require(__dirname + '/../server');


describe('testing express_middleware', () => {
  it('POST should post new data to /unicorns', (done)=>{
    request('localhost:3000')
    .post('/api/unicorns')
    .send({})
    .end((err, res) =>{
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      done();
    });
  });
  it('GET should receive the /unicorns data', (done)=>{
    request('localhost:3000')
    .get('/api/unicorns')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.be.status(200);
      console.log(res.body);
      expect(res.body).to.exist;
      expect(Array.isArray(res.body.data)).to.be.true;
      done();

    });
  });
});
