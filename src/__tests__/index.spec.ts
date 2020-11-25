import { expect } from 'chai';
import 'mocha';
import request from 'supertest';

import app from '../app';

describe('index.ts', () => {
    it('Get url / should return 200', async () => {
        const result = await request(app).get('/').send();

        expect(result.status).to.equal(200);
    });
});
