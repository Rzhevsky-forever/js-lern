'use strict';

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
// console.log('');
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
console.log('');
console.log('Окончательный список наименований');
for(var i = 0; i < resultPositionsLength; i++)
{
  console.log(count + ' ' + resultPositions[i]);
  count++;
}

// Задача 3
for (var i = 0; i < resultPositionsLength; i++)
{
  if(resultPositions[i] == 'Машина времени DeLorean')
  {
    var preOrder = resultPositions.splice(i, 1);
    resultPositions.unshift(preOrder[0]);
    break;
  }
}

console.log('');
console.log('Принять в первую очередь');

for(var i = 0; i < resultPositionsLength; i++)
{
  if(i < 3)
  {
    console.log('  -' + resultPositions[i]);
  }
}

// Задача 4
var shopItems = resultPositions.slice(0, 5); //

console.log('');
console.log('В магазине :');
var shopItemslength = shopItems.length;
for(i = 0; i < shopItemslength; i++)
{
  console.log('  -' + shopItems[i]);
}

console.log('');
console.log('Остальные товары :');
for(i = 0; i < resultPositionsLength; i++)
{
  if (i >= shopItemslength)
  {
    console.log('  -' + resultPositions[i]);
  }
}
