const request = require('supertest')

const app = require('./app')

describe('server tests', () => {
    afterEach(() => {
        app.close();
    })

    it('starts server successfully and the root path returns 200', async () => {
        const httpResponse = await request(app).get('/')
        expect(httpResponse.text).toStrictEqual("OK")
        expect(httpResponse.statusCode).toStrictEqual(200)
    })
})