

const request = require('supertest');

// const app = require('./app');
const { Server, app } = require("./app")

describe("Test app component", () => {

    test("Test the Get Request / Route", () => {
        return request(app).get('/')
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(200)
            .then((response: Response) => {
                expect(response.text).toBe("hello world")
            })
    })



    test("Test The /data Route", () => {
        return request(app).get("/data")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .then((response: Response) => {
                expect(response.text).toBe(
                    JSON.stringify({
                        data: 'success',
                        Type: true,
                    })
                )
            })


    })

    afterAll(() => {
        Server.close(() => {
        })
    })

})