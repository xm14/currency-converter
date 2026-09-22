# Currency Converter

Web application for real-time currency conversion. Uses the ExchangeRate-API.

## What It Does

Takes a base currency (USD) and converts it to one of five target currencies: EUR, GBP, JPY, CNY, RUB. Rates are fetched from ExchangeRate-API in real time. No backend, no stored credentials.

## Features

- Real-time conversion.
- Five target currencies: EUR, GBP, JPY, CNY, RUB.
- Responsive layout.
- No installation. Runs in the browser.

## Stack

- HTML
- CSS
- JavaScript
- ExchangeRate-API for rates

No frameworks. No backend. The entire application is client-side.

## Running Locally

Open index.html in a browser. No build step required.

## Notes

The API key is stored in the client-side JavaScript. This is acceptable for a public demo with a free-tier key, but not for a production application. If the project is extended, the key should be moved behind a server-side proxy or an environment variable.

ExchangeRate-API's free tier has a request limit. The application does not cache responses. If you make repeated conversions in a short period, you may hit the limit. A caching layer would be the first improvement.

## License

MIT. Use, modify, distribute.

## Contact

Email: martinrlab@gmail.com
I try to respond quickly.
