const chai = require('chai');
const expect = chai.expect;
const request = require('request');

const baseUrl = 'http://localhost:3000';

describe('Room Booking App', function () {
  it('should load the booking page', function (done) {
    request(`${baseUrl}/booking`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include('Book a Study Room');
      done();
    });
  });

  it('should submit booking form successfully', function (done) {
    request.post({
      url: `${baseUrl}/booking`,
      form: {
        name: 'John Doe',
        email: 'john@example.com',
        room: 'Room A',
        date: '2025-04-26',
        time: '09:00'
      }
    }, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include('Thank you');
      done();
    });
  });

  it('should return error when email is missing', function (done) {
    request.post({
      url: `${baseUrl}/booking`,
      form: {
        name: 'John',
        email: '',
        room: 'Room A',
        date: '2025-04-27',
        time: '10:00'
      }
    }, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  it('should return error when date is invalid', function (done) {
    request.post({
      url: `${baseUrl}/booking`,
      form: {
        name: 'Test User',
        email: 'test@example.com',
        room: 'Room A',
        date: '',
        time: '11:00'
      }
    }, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });
});
