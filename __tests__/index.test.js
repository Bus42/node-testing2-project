const request = require('supertest');
const express = require('express');
const app = express();
const server = require("../api/server");

const testUser = {
    username: "zaphod",
    password: "beeblebrox"
}

describe("GET /", () => {

    beforeEach(() => {
        testApp = app.listen(0, done);
        testApp.use('/', server);
    })

    afterEach(() => {
        testApp.close();
    })

    it("should return 200 when the server is running", async () => {
        const response = await request(app)
            .get("/")
            .send({ testUser });
        expect(response.status)
            .toBe(200);
    })
    it("should respond with a json object", async () => {
        const response = await request(app)
            .get("/")
            .send({ testUser });
        expect(response.type)
            .toBe("application/json");
    })
    it("should respond with a json object with a message", async () => {
        const response = await request(app)
            .get("/")
            .send({ testUser });
        expect(response.body.message)
            .toBe(`Welcome back ${testUser.username}`);
    })
    it("should respond 500 if the server is not running", async () => {
        const response = await request(app)
            .get("/")
            .send({ testUser });
        expect(response.status)
            .toBe(500);
    })

});

describe("POST /login", () => {
    describe("given a username and password", () => {
        // should save the user and password to the database
        it("should save the user and password to the database", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser });
            expect(response.status)
                .toBe(200);
        })
        // should respond with a 200 status code
        it("should respond with a 200 status code", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser });
            expect(response.status)
                .toBe(200);
        })
        // should respond with a JSON object containing the user's id
        it("should respond with a JSON object containing the user's id", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser });
            expect(response.body.id)
                .toNotBe(undefined);
        })
        // should specify json content type
        it("should specify json content type", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser });
            expect(response.type)
                .toBe("application/json");
        })
        // should respond 500 if the server is not running
        it("should respond 500 if the server is not running", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser });
            expect(response.status)
                .toBe(500);
        })
    })

    describe("password missing", () => {
        // should respond with a 400 status code
        it("should respond with a 400 status code", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser: { username: "zaphod" } });
            expect(response.status)
                .toBe(400);
        })
        // should respond with a JSON object containing an error message
        it("should respond with a JSON object containing an error message", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser: { username: "zaphod" } });
            expect(response.body.message)
                .toBe("password is required");
        })
        // should specify json content type
        it("should specify json content type", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser: { username: "zaphod" } });
            expect(response.type)
                .toBe("application/json");
        })
        // should respond 500 if the server is not running
        it("should respond 500 if the server is not running", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser: { username: "zaphod" } });
            expect(response.status)
                .toBe(500);
        })
    })

    describe("username missing", () => {
        // should respond with a 400 status code
        it("should respond with a 400 status code", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser: { password: "beeblebrox" } });
            expect(response.status)
                .toBe(400);
        })
        // should respond with a JSON object containing an error message
        it("should respond with a JSON object containing an error message", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser: { password: "beeblebrox" } });
            expect(response.body.message)
                .toBe("username is required");
        })
        // should specify json content type
        it("should specify json content type", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser: { password: "beeblebrox" } });
            expect(response.type)
                .toBe("application/json");
        })
        // should respond 500 if the server is not running
        it("should respond 500 if the server is not running", async () => {
            const response = await request(app)
                .post("/login")
                .send({ testUser: { password: "beeblebrox" } });
            expect(response.status)
                .toBe(500);
        })
    })
})