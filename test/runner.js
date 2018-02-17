const expect = require('chai').expect;
const axios = require('axios');

const runnerUri = 'http://78.46.208.140:3031';

const solution = 'var a = 1;';
const test = `
  describe('Check variables', function() {
    it('Variable "a" should be equal to 1', function() {
      assert.equal(a, 1);
    });
  })
`;

describe('GET /', () => {
  it('should return 404 Not found', (done) => {
    axios.get(runnerUri)
      .catch(function (error) {
        expect(error.response.status).to.equal(404);
        done();
      });
  });
});

describe('POST /', () => {
  it('should pass the test with a valid solution', (done) => {
    axios.post(runnerUri, {
      solution: solution,
      test: test
    }).then(function (response) {
        expect(response.data.failed).to.equal(0);
        expect(response.data.error).to.equal(0);
        expect(response.data.stderr).to.equal('');
        done();
      });
  });
});
