'use strict';

var star = '*';
star = star++;
console.log(star); // NAN

var star = '*';
star += star;
console.log(star); // **

var star = '*';
star += star;
console.log(star); // **

// Задача 1
var positions = [
    'Отвертка ультразвуковая WHO-D',
    'Ховерборд Mattel 2016',
    'Нейтрализатор FLASH black edition',
    'Меч световой FORCE (синий луч)',
    'Машина времени DeLorean',
    'Репликатор домашний STAR-94',
    'Лингвенсор 000-17',
    'Целеуказатель электронный WAY-Y'
  ]

var listLength = positions.length;
console.log('Список наименований');
var count = 1;
for (var i = 0; i < listLength; i++)
{
    console.log(count + ' ' + positions[i]);
    count++;
}

// Задача 2
var newPositions = [
  'Экзоскелет Trooper-111',
  'Нейроинтерфейс игровой SEGUN',
  'Семена дерева Эйва'
];

var resultPositions = positions;
var newPositionsLength = newPositions.length;
for(var i = 0; i < newPositionsLength; i++)
{
  resultPositions.push(newPositions[i]);
}

var count = 1;
var resultPositionsLength = resultPositions.length;
console.log('Окончательный список наименований');
for(var i = 0; i < resultPositionsLength; i++)
{
  console.log(count + ' ' + resultPositions[i]);
  count++;
}