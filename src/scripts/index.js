import '../styles/index.scss';

import {nameTarifs, payment, payments, tarifs} from './constants';

console.log(tarifs);


const companies = document.getElementById('companies');
const meters = document.getElementById('meters');
const previous = document.getElementById('previous');
const current = document.getElementById('current');
let previusNumber = null;
let currentNumber = null;
const butn = document.querySelector('.button-wrapper > .btn');
const getSummury = document.querySelector('.form__summary-list');
const copyPaymant = Object.assign({}, payment);
const divElement = document.getElementsByClassName('left__company');
const price = document.querySelector('.price > b');
console.log(price.getAttribute('priceId'));


companies.onclick = (event) => {
    const id = event.target.getAttribute('data-id');
    const elements = document.querySelector(`[data-id=${id}]`);
    const getELements = document.getElementsByClassName('center__title')[0];
    const searchP = elements.querySelector('p');
    const searchNames = document.querySelector('.center > .center__desc');

    [...divElement].forEach((el) => {
        el.style.backgroundColor = '';
        el.classList.remove('select');
    });

    elements.classList.add('select');
    elements.style.backgroundColor = '#D3D3D3';

    getELements.innerHTML = searchP.innerHTML;

    const key = Object.keys(nameTarifs);

    key.filter((el) => {
       if(id === el) {
           searchNames.innerHTML = nameTarifs[el];
       }
    });
    console.log(payment);
    console.log(payments);

    return payment.id = id;

};

meters.onchange = (event) => {
    payment.materId = event.target.value;
    copyPaymant.materId = event.target.value;
};

previous.oninput = (event) => {
    previusNumber = event.target.value;

    previusNumber > 0 ? payment.previous = previusNumber : event.target.value = '';
};

current.oninput = (event) => {
    currentNumber = event.target.value;
    if(currentNumber < previusNumber) {
        event.preventDefault();
    }

     return payment.current = currentNumber;


};

butn.onclick = (event) => {
    event.preventDefault();
    const value = currentNumber - previusNumber;
    const lastValue = value * tarifs.water;


    Object.keys(payment).map((el) => {
       payment[el] = null;
    });
    payments.push(lastValue);

            getSummury.insertAdjacentHTML('beforebegin', `<li class="list__item">
                <p><span class="list__item-label">${copyPaymant.materId}</span>
                  <span class="price">$ <b>${lastValue}</b></span>
                </p>
              </li>`);

};

console.log(payments);



