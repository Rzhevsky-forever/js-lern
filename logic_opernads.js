try
{
    if (typeof x == "undefined")
    {
        throw "throw secton";
    }
}
catch(e)
{
    console.log(e);
}

try{
    console.log(s);
}
catch(e)
{
    console.log(e);
}

console.log('next code');

// x == undefined;