export default function initFetchBitcoin(){
  fetch("https://blockchain.info/ticker")
  .then(resolve => resolve.json()).
  then(json => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (1000 / json.BRL.buy).toFixed();
    console.log(json.BRL, btcPreco.innerText = (1000 / json.BRL.buy).toFixed(5))
  }).catch(erro => {
    console.log(Error(erro))
  })
}