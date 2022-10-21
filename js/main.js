setInterval(getData, 2000);

// fetch data from api
function getData() {
  fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then((res) => res.json())
    .then((data) => {
      deconstruct(data);
    })
    .catch((err) => {
      console.log("An error has occured, unable to retrieve data.");
    });
}

// separate concerns by deconstructing into variable needed
function deconstruct(data) {
  const coinName = data.name;
  const symbol = data.symbol;
  const price = data.market_data.current_price.usd;
  const priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price);
  const cryptoImage = data.image.large;
  display(coinName, symbol, priceFormat, cryptoImage);
}

// render value of variables to the screen
function display(coinName, symbol, priceFormat, cryptoImage) {
  document.getElementById("card").innerHTML = `
  <div class="card-container-icon">
        <img src="${cryptoImage}" id="img" width: "48px" height: "48px" class="circle">
      </div>
      
      <div class="card-container-header">
        <p class="card-content-name">${coinName}</p>
        <p class="card-content-symbol">${symbol.toUpperCase()}</p>
      </div>
      
      <div class="card-container-price">
        <p class="card-content-price">${priceFormat}</p>
      </div>
  `;
}
