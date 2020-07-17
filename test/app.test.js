const request = require("supertest");

process.env.NODE_ENV = 'test';
const app = require("../app");

it("GET /", function (done) {
  request(app)
    .get("/api/")
    .expect({ message: "Welcome123" })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

it("GET /about", function (done) {
  request(app)
    .get("/api/about")
    .expect({ message: "About" })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

it("POST /user/login", function (done) {
  request(app)
    .post("/api/user/login")
    .send({ email: "votanphatb2@gmail.com", password: "12345" })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

it("POST /user/register", function (done) {
  request(app)
    .post("/api/user/register")
    .send({
      first_name: "Phat",
      last_name: "Vo",
      email: "votanphatb2+1@gmail.com",
      password: "12345",
      confirm_password: "12345",
    })
    .expect(422)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

it("GET /products", function (done) {
  request(app)
    .get("/api/products")
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

it("POST /products", function (done) {
  request(app)
    .post("/api/products")
    .send({
      name: "Ao thun 002",
      category: "Ao thun",
      brand: "AT",
      price: 200000,
      quantity: 10,
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

it("GET /cart", function (done) {
  request(app)
    .get("/api/cart")
    .query({ email: "votanphatb2@gmail.com" })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

it("POST /cart/add", function (done) {
  request(app)
    .post("/api/cart/add")
    .send({
      email: "votanphatb2@gmail.com",
      product_id: "5f0f38299d9e1b400626ad34",
      qty: 20,
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

it("POST /cart/subtract", function (done) {
  request(app)
    .post("/api/cart/subtract")
    .send({
      email: "votanphatb2@gmail.com",
      product_id: "5f0f38299d9e1b400626ad34",
      qty: 20,
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

it("GET /orders", function (done) {
  request(app)
    .get("/api/orders")
    .query({
      email: "votanphatb2@gmail.com",
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});
