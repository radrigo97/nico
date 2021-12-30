export const tarifs = Object.freeze({
    taxes: 0.2,
    water: 0.3,
    internet: 0.4,
    security: 0.5,
    exchange: 0.6,
});

export const payment = {
    id: null,
    materId: null,
    current: null,
    previous: null,
    amount: null
};


export const payments = [];
console.log(payments);

export const nameTarifs = Object.freeze({
    taxes: 'Оплата налоготов',
    water: 'Оплата холодного водоснабжения',
    internet: 'Оплата интернета',
    security: 'Оплата охраны',
    exchange: 'Обмен валюты',
});



