import puppeteer from "https://deno.land/x/puppeteer@9.0.2/mod.ts";
import dpng from "https://deno.land/x/dpng@0.7.5";
import { genImgId } from './functions/gen-img-id.ts';

const browser = await puppeteer.launch();
const page = await browser.newPage();
const demo = 'https://prnt.sc/bj6530'

const id = genImgId();
let curr = id.next();

let counter = 0;
let url = '';

while (!curr.done) {
    console.log(curr.value)
    url = `https://prnt.sc/${curr.value}`;

    // remove this to get the real id
    url = demo;

    // got page
    await page.goto(url);

    // get img base 64
    const imgBase64 = await page.$eval(`div.under-image img[src]`, img => img.getAttribute('src'));
    console.log(imgBase64);

    // TODO: Find out how to save this base64 as image 


    curr = id.next();

    // remove this counter stuff to get the full id generation algorithm
    counter++
    if (counter === 1) {
        break;
    }
}

await browser.close();


