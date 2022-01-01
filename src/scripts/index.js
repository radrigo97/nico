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
// const getSummury = document.querySelector('.form__summary');




const divElement = document.getElementsByClassName('left__company');




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
    const id = event.target.querySelector('option');
    const searchValue = id.getAttribute('value');

    return payment.materId = searchValue;
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

    payments.push(lastValue);

    Object.keys(payment).forEach((el) => {
       payment[el] = null;
    });

    payments.push(lastValue);
};

console.log(payments);



