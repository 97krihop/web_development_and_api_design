const request = require('supertest');
const app = require('../../../src/server/app');

test("Test post api/match", async () => {

    const response = await request(app).post('/api/matches');

    expect(response.statusCode).toBe(201);
    expect(response.body.length).toBe(3);
});