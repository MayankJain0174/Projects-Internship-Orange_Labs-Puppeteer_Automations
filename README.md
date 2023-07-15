# Puppeteer_Automation

## Prerequisite

### 1. Set up the project:

i. Create a new directory for your project.

ii. Open a terminal, navigate to your project directory, and run `npm init` to initialize a new Node.js project. 

iii. Follow the prompts to set up your project's package.json file.

### 2. Install Puppeteer:
In the terminal or command prompt, run `npm install puppeteer` to install Puppeteer and its dependencies.

### 3. In your project directory, create a new file called index.js or clone the uploaded one.

## Code Explanation

1. The code imports the Puppeteer library using the  `require`  function.

2. The code then defines an asynchronous function using the  `async`  keyword.

3. Inside the function, it launches a Puppeteer browser with the  `puppeteer.launch`  function. It sets the  `headless`  option to  `false`  to show the browser window, and sets the  `args`  option to  `['--start-maximized']`  to start the browser window in maximized mode.

4. It creates a new page using the  `browser.newPage`  function.

5. It sets the viewport of the page to a width of 1366 pixels and a height of 768 pixels using the  `page.setViewport`  function.

6. It navigates to the URL 'https://swap.defillama.com' using the  `page.goto`  function.

7. It waits for the Chain Field with the selector 'input[id="react-select-2-input"]' to appear on the page using the  `page.waitForSelector`  function with a timeout of 5000 milliseconds.

8. It types the text 'Arbitrum One' into the input element using the  `page.type`  function.

9. It presses the 'Enter' key on the keyboard using the  `page.keyboard.press`  function.

10. It finds the "You Sell" Text Field with class 'css-79elbk' and the type 'text' using the  `page.$`  function.

11. It clicks on the input element by calling the  `click`  function on the element with the option  `{ clickCount: 3 }`. This selects the existing text in the input element.

12. It types the text '12' into the input element using the  `page.type`  function.

13. It defines an asynchronous function called  `clickButton`  that takes an argument  `buttonIndex` .

14. Inside the  `clickButton`  function, it uses the  `page.evaluate`  function to execute a JavaScript code in the context of the page. The code selects all the buttons on the page and clicks on the button at the specified index.

15. It calls the  `clickButton`  function with argument 3 to select the "You Sell" token. 

16. It waits for 500 milliseconds using the  `setTimeout`  function.

17. It types the text 'Wrapped BTC' into an input element with the class 'chakra-input css-s1d1f4' using the  `page.type`  function.

18. It waits for 500 milliseconds using the  `setTimeout`  function.

19. It defines an asynchronous function called  `selectToken`  that takes an argument  `tokenName`.

20. Inside the  `selectToken`  function, it uses the  `page.evaluate`  function to execute a JavaScript code in the context of the page. The code selects all the tokens on the page and clicks on the token that matches the specified name.

21. It calls the  `selectToken`  function with the argument 'Wrapped BTC (WBTC)'.

22. It calls the  `clickButton`  function with argument 5 to select the "You Buy" token.

23. It waits for an input element with the class 'chakra-input css-s1d1f4' to appear on the page using the  `page.waitForSelector`  function with a timeout of 1000 milliseconds.

24. It types the text 'USDC' into the input element using the  `page.type`  function.

25. It waits for 500 milliseconds using the  `setTimeout`  function.

26. It calls the  `selectToken`  function with the argument 'USD Coin (USDC)'.

27. It waits for the Routing List with class 'sc-55ee4011-2 fcGAPg' to appear on the page using the  `page.waitForSelector`  function with a timeout of 3000 milliseconds.

28. It waits for 4000 milliseconds using the  `setTimeout`  function.

29. It uses the  `page.evaluate`  function to execute JavaScript code in the context of the page. The code selects second option from a list of options and clicks on it.
    
31. The code is immediately invoked by calling the asynchronous function using the  `()`  syntax.
