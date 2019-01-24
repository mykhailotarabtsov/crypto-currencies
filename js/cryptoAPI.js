class CryptoAPI {
  // Query the rest api with a currency and a cryptocurrency

  async queryAPI(currency, cryptoCurrency) {
    // query the url
    const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptoCurrency}/?convert=${currency}`);

    // return as json
    const result = await url.json();

    // return the object
    return {
      result
    }
  }

  // Get all the cryptocurrencies
  async getCryptoCurrenciesList() {
    const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');

    // Return this as a json
    const cryptocurrencies = await url.json();

    // Return the object
    return {
      cryptocurrencies
    }
  }

}