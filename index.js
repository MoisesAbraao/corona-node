const puppeteer = require('puppeteer');

async function getCoronaCases() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const url = 'https://www.worldometers.info/coronavirus/country/brazil';
    await page.goto(url);
    await page.screenshot({path: 'screenshot.png'});

    const totalCases = await page.evaluate(() => {
        cases = document.querySelectorAll('.maincounter-number');
        return cases[0].innerText;
      });

    const totalDeaths = await page.evaluate(() => {
        deaths = document.querySelectorAll('.maincounter-number');
        return deaths[1].innerText;
    });
    
    console.log(`O Brasil possui ${totalCases} casos confirmados de CODIV-19 e um total de ${totalDeaths} mortos.`);
    // await browser.close()
}

getCoronaCases();