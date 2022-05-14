// create a function to fetch a promise from the api url
function getData(){
  let getPromise = fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=1");
  console.log(getPromise);
  return getPromise
}


// create async function to await data and convert data returned to json: javascript object notation

// create and send to another function to extract
async function convertData(){
  let saveData = await (await getData()).json();
  extractData(saveData)
  console.log(saveData);
}
convertData()

function extractData(dataFile){
  let layout = "";

  let coins = dataFile.coins;

coins.forEach(function(value, index){
  
  if(value.id == "bitcoin"){
    let bitcoinData = value;
    // console.log(value)
    console.log(bitcoinData);
    let icon = bitcoinData.icon;
    let name = bitcoinData.name;
    let symbol = bitcoinData.symbol;
    let price = bitcoinData.price;

    let dollarUS = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
  
    let dollarCoversion = dollarUS.format(price);
    price = dollarCoversion

    
    console.log(icon)
    console.log(name)
    console.log(symbol)
    console.log(price)

// Think about how you will get the image icon from the url. I think you have to set the src attribute to the url and create a "load" event. PLay with this when you have more time // create a circle as a place holder for the meantime
//  <img>${icon} // replace .circle when you have worked out how to enter the image
  layout += `
  <div class="card-container-icon">
  <span class="circle"></span>
  </div>

  <div class="card-container-header">
    <p class="card-content-name">${name}</p>
    <p class="card-content-symbol">${symbol}</p>
  </div>

  <div class="card-container-price">
    <p class="card-content-price">${price}</p>
  </div>
    `
  }
  
 
})
let onScreen = document.querySelector(".card");
onScreen.innerHTML = layout;

}


// what do you want to do
// how to get the bitcoin image from the dataFile?
// add an img.src to the icon
// how to do it:
/*
 function iconShow(){
      let img = document.querySelector("#img");
      img.src = bitcoinData.icon;
      img.addEventListener("load");
    }
*/