//1.2 «Управляющие конструкции»
// Задание 1
'use strict';
var stockCount = 1; // Склад
var orderCount = 1; // Заказ
if (orderCount > stockCount)
{
	console.log('На складе нет такого количества товаров');
}
else if (orderCount === stockCount)
{
	console.log('Вы забираете весь товар c нашего склада!');
}
else 
{
	console.log('Заказ оформлен');
}

// Задание 2
var deliveryTo;
var deliveryPrice;

deliveryTo = 'Галактика Туманность Андромеды';
switch (deliveryTo) 
{
	case 'Луна' :
		deliveryPrice = 150;
		console.log('Стоимость доставки для области ' + deliveryTo + ' : ' + deliveryPrice + ' Q');
	break;

	case 'Крабовидная туманность' :
		deliveryPrice = 250;
		console.log('Стоимость доставки для области ' + deliveryTo + ' : ' + deliveryPrice + ' Q');
	break;

	case 'Галактика Туманность Андромеды' :
		deliveryPrice = 550;
		console.log('Стоимость доставки для области ' + deliveryTo + ' : ' + deliveryPrice + ' Q');
	break;
	
	case 'Туманность Ориона' :
		deliveryPrice = 600;
		console.log('Стоимость доставки для области ' + deliveryTo + ' : ' + deliveryPrice + ' Q');
	break;
	
	case 'Звезда смерти' :
		deliveryPrice = 'Договорная цена';
		console.log('Стоимость доставки для области ' + deliveryTo + ' : ' + deliveryPrice);
	break;
}

// Задание 3
var storekeeperPrice = '123123';
try
{
	if (typeof storekeeperPrice !== "number")
    {
		throw "Вы допустили ошибку: " + storekeeperPrice + " не является числом";
	}
	else
	{
		console.log('Цена товара введена корректно');
	}
}
catch(e)
{
    console.log(e);
}

// Задание 4
var planet;
var age;

switch (planet)
{
	case 'Земля' :
		age >= 18 
			? console.log('Приятных покупок') 
			: console.log('Вы не достигли совершеннолетия');
	break;
	
	case 'Юпитер' :
		age < 120 
			? console.log('Сожалеем. Вернитесь на 120-й день рождения!') 
			: console.log('Чистого неба и удачных покупок!');
	break;
	
	default :
		console.log('Спасибо, что пользуетесь услугами нашего магазина!');
}