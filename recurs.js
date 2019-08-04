// x^n = x * x^n-1
function pow(base, exponent)
{
    if (exponent === 1)
    {
        return base;
    }

    return base * pow(base, exponent - 1);
}

console.log('Будет :');
console.log(pow(2, 3));
