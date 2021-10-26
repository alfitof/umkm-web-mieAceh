import axios from 'axios';
import Noty from 'noty';

let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter');

function updateCart(mie) {
  axios
    .post('/update-cart', mie)
    .then((res) => {
      console.log(res);
      cartCounter.innerText = res.data.totalQty;
      new Noty({
        type: 'success',
        timeout: 1000,
        text: 'Pesanan telah ditambahkan',
        progressBar: false,
      }).show();
    })
    .catch((err) => {
      new Noty({
        type: 'error',
        timeout: 1000,
        text: 'Terjadi kesalahan',
        progressBar: false,
      }).show();
    });
}

addToCart.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let mie = JSON.parse(btn.dataset.mie);
    updateCart(mie);
  });
});
