 process.env.NODE_ENV = 'test';

 import chai from 'chai';
 import server from '../../server';
 const request = require('supertest');
 let should = chai.should();


 describe('API test to fecth weather Data', () => {

     it('Test case for API route /weather', function(done) {
         request(server)
             .get('/weather')
             .set('Accept', 'application/json')
             .expect('Content-Type', /json/)
             .expect(200, done);
     });

     it('Test case for API route /weather/jaipur', function(done) {
         request(server)
             .get('/weather/jaipur')
             .set('Accept', 'application/json')
             .expect('Content-Type', /json/)
             .expect(200, done);
     });

     it('Test case for API route /weather/delhi', function(done) {
         request(server)
             .get('/weather/delhi')
             .set('Accept', 'application/json')
             .expect('Content-Type', /json/)
             .expect(200, done);
     });

     it('Test case for API route /weather/delhi/today', function(done) {

         request(server)
             .get('/weather/delhi/today')
             .set('Accept', 'application/json')
             .expect('Content-Type', /json/)
             .expect(200, done);

     });

     it('Test case for API route /weather/delhi/monday', function(done) {

         request(server)
             .get('/weather/delhi/monday')
             .set('Accept', 'application/json')
             .expect('Content-Type', /json/)
             .expect(200, done);

     });
 });
