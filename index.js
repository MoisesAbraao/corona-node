const puppeteer = require('puppeteer');

async function getCoronaCases() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const url = 'https://www.worldometers.info/coronavirus/country/brazil';
    await page.goto(url);
    await page.screenshot({path: 'screenshot.png'});

    const totalCases = await page.evaluate(() => {
        return document.querySelector('.maincounter-number').innerText
      });
    
    console.log(`O Brasil possui ${totalCases} casos confirmados de CODIV-19`);
    // await browser.close()
}

getCoronaCases();