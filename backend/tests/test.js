// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Students", () => {
    describe("GET /", () => {
        // Test to get all items record
        it("should get all items record", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to get single item record
        it("should get a single item record", (done) => {
            const id = 'MLA684008289';
            chai.request(app)
                .get(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to get single item record
        it("should not get a single item record", (done) => {
            const id = 'MLA684008210';
            chai.request(app)
                .get(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });

        // Test to get single item record
        it("should get a 404 error", (done) => {
            chai.request(app)
                .get(`/notDeclaredUrl`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});