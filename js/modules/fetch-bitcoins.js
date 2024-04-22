export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      // console.log(bitcoin.BRL.sell, 'bitcoin');
      const btcPreco = document.querySelector(target);
      // btcPreco.innerText = bitcoin.BRL.sell
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    }).catch((erro) => {
      console.log(Error(erro));
      console.log(erro, 'erro');
    });
}

// https://www.blockchain.com/pt/ticker
