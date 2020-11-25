import { expect } from 'chai';
import 'mocha';
import request from 'supertest';

import app from '../app';

describe('./route/screenshot.ts', () => {
    it('Post url /screenshot should return 200', async (done) => {
        const result = await request(app)
            .post('/screenshot')
            .send({ url: 'https://github.com' })
            .set('Accept', 'application/x-www-form-urlencoded')
            .expect(200);

        expect(result.status).to.equal(200);
        done();
    });
});
