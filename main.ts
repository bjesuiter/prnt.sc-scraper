import { puppeteer } from './dependencies.ts';
import { genImgId } from './functions/gen-img-id.ts';

// const browser = await puppeteer.launch();
// const page = await browser.newPage();

const id = genImgId();
let curr = id.next();

let counter = 0;

while (!curr.done) {
    console.log(curr.value)
    curr = id.next();

    counter++

    if (counter === 37) {
        break;
    }
}

// await page.goto(`https://prnt.sc/`);
