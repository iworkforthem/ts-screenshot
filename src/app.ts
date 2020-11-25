import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';

import screenshot from './routes/screenshot';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('cache'));

app.use('/screenshot', screenshot);

app.get('/', (req, res) => {
    res.send({
        author: 'waimun',
        email: 'iworkforthem@gmail.com',
        twitter: 'https://twitter.com/iworkforthem',
        instruction:
            'curl -d "url=http://google.com" -X POST http://localhost:8080/screenshot',
    });
});

export default app;
