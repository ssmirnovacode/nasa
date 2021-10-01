function dateConverter(dateWithZeros) {
    let date;
    if (dateWithZeros[5] !== '0' && dateWithZeros[8] !== '0') {
        date = dateWithZeros;
    }
    else if (dateWithZeros[5] === '0' && dateWithZeros[8] !== '0') {
        date = dateWithZeros.slice(0,5) + dateWithZeros.slice(6);
    }
    else if (dateWithZeros[5] !== '0' && dateWithZeros[8] === '0') {
        date = dateWithZeros.slice(0,8) + dateWithZeros.slice(9);
    }
    else if (dateWithZeros[5] === '0' && dateWithZeros[8] === '0') {
        date = dateWithZeros.slice(0,5) + dateWithZeros.slice(6,8) + dateWithZeros.slice(9);
    }
    return date;
};

console.log(dateConverter('2015-10-02'));