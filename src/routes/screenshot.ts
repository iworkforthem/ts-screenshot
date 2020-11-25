import { Router } from 'express';

import { ScreenshotService } from '../services/screenshot';

const router = Router();
const screenshotService = new ScreenshotService();

router.post('/', async (req, res) => {
    const url = req.body.url;

    let file = await screenshotService.getScreenshot(url);
    file = 'http://localhost:8080/screenshots/' + file;

    res.send({ url: url, image: file });
});

export default router;
