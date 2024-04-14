export default function initFetchBitcoin() {
  // async function fetchBitcoin(url) {
  //   const response = await fetch(url)
  //   const json = await response.json()
  //   const btcPreco = document.querySelector('.btc-preco')
  //   btcPreco.innerText = (100 / json.BRL.sell).toFixed(4)
  // }

}

fetch('https://www.blockchain.com/pt/ticker')
  .then((response) => response.json())
  .then((bitcoin) => {
  // console.log(bitcoin.BRL.sell, 'bitcoin');
    const btcPreco = document.querySelector('.btc-preco');
    // btcPreco.innerText = bitcoin.BRL.sell
    btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
  }).catch((erro) => {
    console.log(Error(erro));
    console.log(erro, 'erro');
  });

// https://www.blockchain.com/pt/ticker
