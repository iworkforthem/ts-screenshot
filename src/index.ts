import app from './app';

const port = 8080;

app.listen(port, () => {
    console.log(`ts-screenshot listening at http://localhost:${port}`);
});
