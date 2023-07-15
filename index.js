const puppeteer = require('puppeteer');
 (async () => {
  const browser = await puppeteer.launch({ 
    headless: false, 
    args: ['--start-maximized'] 
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto('https://swap.defillama.com');

  //wait for form to appear
   await page.waitForSelector('input[id="react-select-2-input"]', { timeout: 5000 });

   //Chain Field Selection
  await page.type('input[id="react-select-2-input"]', 'Arbitrum One');
  page.keyboard.press('Enter');

  //"You Sell" Text Field
   const sellInput = await page.$('.css-79elbk input[type="text"]');
  await sellInput.click({ clickCount: 3 });
  await sellInput.type('12');

   const clickButton = async (buttonIndex) => {
    await page.evaluate((index) => {
      const buttons = document.querySelectorAll("button");
      buttons[index].click();
    }, buttonIndex);
  };

  //"You Sell" Token Button
   await clickButton(3);

  await new Promise(r => setTimeout(r, 500));
  await page.type('input[class="chakra-input css-s1d1f4"]', 'Wrapped BTC');
  await new Promise(r => setTimeout(r, 500));
   const selectToken = async (tokenName) => {
    await page.evaluate((name) => {
      const tokens = document.querySelectorAll('.List p');
      for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].innerText === name) {
          tokens[i].click();
        }
      }
    }, tokenName);
  };

   await selectToken('Wrapped BTC (WBTC)');

   // "You Buy" Token Button
  await clickButton(5);
  await page.waitForSelector('input[class="chakra-input css-s1d1f4"]', { timeout: 1000 });
  await page.type('input[class="chakra-input css-s1d1f4"]', 'USDC');
  await new Promise(r => setTimeout(r, 500));
  await selectToken('USD Coin (USDC)');

   await page.waitForSelector('div[class="sc-55ee4011-2 fcGAPg"]', { timeout: 3000 });
  await new Promise(r => setTimeout(r, 4000));

  //Select 2nd Route option
   await page.evaluate(() => {
    const options = document.getElementsByClassName("sc-55ee4011-2 fcGAPg");
    const childNodes = options[0].childNodes;
    if (childNodes[4]) childNodes[4].click();
  });
   console.log("finished execution");
})();
