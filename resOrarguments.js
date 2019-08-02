function summ(...rest)
{
    console.log(rest);
    console.log(arguments);

    var result = 0;
    for(var item of rest)
    {
        result += item;
    }

    return result;
}

console.log(summ(1, 2, 3));

// Вебинар Функции 50 : 55

console.log(summ);

var funck = summ;

funck(10, 20);
console.log(funck(100, 50));
