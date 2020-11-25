import { exec } from 'child_process';

export class ScreenshotService {
    async getScreenshot(url: string) {
        const file = new Date().getTime().toString() + '.png';
        const cli =
            process.env.CHROME +
            ' ' +
            '--headless ' +
            '--screenshot="./cache/screenshots/' +
            file +
            '" ' +
            '--window-size=1024,780 ' +
            '"' +
            url +
            '"';

        exec(cli);

        return file;
    }
}
