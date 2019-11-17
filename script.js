//CAŁOŚĆ MOŻNA SPRAWDZIĆ W KONSOLI OTWIERAJĄC PLIK INDEX.HTML


// ZADANIE 1
console.log('\nZADANIE 1');

var words = ['Hello', 'World'];
console.log(`${words[0]} ${words[1]}`);


// ZADANIE 2
console.log('\nZADANIE 2');

const multiply = (num1, num2 = 1) => {
    console.log(`${num1} * ${num2} = ${num1 * num2}`); //log do konsoli
    return num1 * num2;
}

multiply(2, 5) // 10
multiply(6, 6) // 36
multiply(5) // ?


// ZADANIE 3
console.log('\nZADANIE 3');

const average = (...args) => {
    let sum = 0;
    args.forEach(num => sum += num);
    sum /= args.length;
    console.log(sum); //dodatkowy log
    return sum;
};

average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4


// ZADANIE 4
console.log('\nZADANIE 4');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1] //średnia: 3.(2)
average(...grades);


// ZADANIE 5
console.log('\nZADANIE 5');

var dane = [1, 4, 'Iwona', false, 'Nowak'];

const [,, firstname,, lastname] = dane;
console.log(firstname, lastname);