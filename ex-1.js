// Задача № 1
'use strict';
var name;
var price;

// Задача № 2
name = 'Телепорт бытовой VZHIH-101';
price = 10000;

console.log(`В наличии имеется: ${name}`);
console.log(`Стоимость товара ${price} Q`);

// Задача № 3
var quantityGoods = 2;
var sumSale = (quantityGoods * price) * 0.1; // сумма скидки
var payment = (quantityGoods * price) - sumSale;
console.log(`Цена покупки составит ${payment} Q`);

//Задача № 4
var totalMoney = 13345000;
var specialPrice = 6500;

var cost = parseInt(totalMoney / specialPrice);
var balance = totalMoney % specialPrice;
console.log 
(
  `Мы можем закупить ${cost} единиц товара, после закупки на счету останется ${balance} Q`
);
