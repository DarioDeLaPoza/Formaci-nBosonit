// Ejercicio 1:
// Dado un array de objetos, obtener el objeto con el id 3

const arrNames = [
    { id: 1, name: 'Pepe' },
    { id: 2, name: 'Juan' },
    { id: 3, name: 'Alba' },
    { id: 4, name: 'Toby' },
    { id: 5, name: 'Lala' }
];

console.log(filterId3 = arrNames.filter(person => person.id === 3));


// Ejercicio 2
// Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test'];

console.log(arrTruthy = arrDirty.filter(Boolean));


// Ejercicio 3
// Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales

const arrCities = [
    { city: 'Logroño', country: 'Spain', capital: false },
    { city: 'Paris', country: 'France', capital: true },
    { city: 'Madrid', country: 'Spain', capital: true },
    { city: 'Rome', country: 'Italy', capital: true },
    { city: 'Oslo', country: 'Norway', capital: true },
    { city: 'Jaén', country: 'Spain', capital: false }
];

console.log(arrCapital = arrCities.filter(city => !city.capital));


// Ejercicio 4
// Dado tres arrays de números, sacar en un nuevo array la intersección de estos.

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

console.log(common = arrNumber1.filter(num => arrNumber2.indexOf(num) !== -1 && arrNumber3.indexOf(num) !== -1));


// Ejercicio 5
// Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.

const arrCities2 = [
    { city: 'Logroño', country: 'Spain', capital: false },
    { city: 'Bordeaux', country: 'France', capital: false },
    { city: 'Madrid', country: 'Spain', capital: true },
    { city: 'Florence', country: 'Italy', capital: true },
    { city: 'Oslo', country: 'Norway', capital: true },
    { city: 'Jaén', country: 'Spain', capital: false }
];

console.log(arrCapital2 = arrCities2
    .filter(city => !city.capital)
    .map(city => ({ 'city': city.city, 'isSpain': city.country === 'Spain' ? true : false })));


// Ejercicio 6
// Crea una función que redondee un número float a un número específico de decimales.
// La función debe tener dos parámetros:
// - Primer parámetro es un número float con x decimales
// - Según parámetro es un int que indique el número de decimales al que redondear
// - Evitar usar el método toFixed()

roundTo = (float, numDec) => {
    let numTxt = float.toString();
    let index = numTxt.indexOf(".");
    return +numTxt.substring(0, index + numDec + 1);
};

console.log(roundedResult = roundTo(2.123, 2));


// Ejercicio 7
// Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
// La función debe tener dos parámetros:
// - Primer parámetro es un objeto con x número de campos y valores
// - Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro

const obj = { a: 1, b: "2", c: 3 };

returnFalsyValues = (param1, funct) => {
    const newObj = {};
    const objKeys = Object.keys(param1);

    for (let i = 0; i < objKeys.length; i++) {
        if (!funct(param1[objKeys[i]])) {
            newObj[objKeys[i]] = param1[objKeys[i]]
        }
    }
    return newObj;
}

console.log(result = returnFalsyValues(obj, x => typeof x === 'string'));


// Ejercicio 8
// Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
// La función debe tener 2 parámetros:
// - Primer parámetro debe ser el número de bytes
// - Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

fromBytesToFormattedSizeUnits = (bytes, numDig = 3) => {

    let bytes_str = Math.trunc(bytes).toString().length;

    switch (true) {
        case (bytes_str === 1 || bytes_str === 2 || bytes_str === 3):
            return (bytes).toPrecision(numDig) + 'B';
        case (bytes_str === 4 || bytes_str === 5 || bytes_str === 6):
            return (bytes / 1000).toPrecision(numDig) + 'KB';
        case (bytes_str === 7 || bytes_str === 8 || bytes_str === 9):
            return (bytes / 1000000).toPrecision(numDig) + 'MB';
        case (bytes_str === 10 || bytes_str === 11 || bytes_str === 12):
            return (bytes / 1000000000).toPrecision(numDig) + 'GB';
        case (bytes_str === 13 || bytes_str === 14 || bytes_str === 15):
            return (bytes / 1000000000000).toPrecision(numDig) + 'TB';
        case (bytes_str === 16 || bytes_str === 17 || bytes_str === 18):
            return (bytes / 1000000000000000).toPrecision(numDig) + 'PB';
        case (bytes_str === 19 || bytes_str === 20 || bytes_str === 21):
            return (bytes / 1000000000000000000).toPrecision(numDig) + 'EB';
        case (bytes_str === 22 || bytes_str === 23 || bytes_str === 24):
            return (bytes / 1000000000000000000000).toPrecision(numDig) + 'YB';
        default:
            bytes;
    };
};

const result1 = fromBytesToFormattedSizeUnits(1000);
console.log(result1); // 1KB

const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2); // 123MB

const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3); // -12.145GB


// Ejercicio 9
// Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
// La función debe tener un objeto como único parámetro.

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };

toLowercaseKeys = (obj) => {
    let objLow = {};

    Object.entries(obj).forEach(([key, value]) => objLow[key.toLocaleLowerCase()] = value);

    return objLow;
};

console.log(myObjLowercase = toLowercaseKeys(myObject));
/* { name: 'Charles', address: 'Home Street' } */


// Ejercicio 10
// Crea una función que elimine las etiquetas html o xml de un string.
// La función debe tener un string como único parámetro.

removeHTMLTags = string => string.replace(/(<([^>]+)>)/ig, '');

console.log(resultWithoutTags = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>'));
// lorem ipsum


// Ejercicio 11
// Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
// - El primer parámetro es el array entero que se quiere dividir.
// - El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.

splitArrayIntoChunks = (arr, numElemet) => {

    let numForDiv = Math.ceil(arr.length / numElemet);
    let arrSplit = [];

    for (let i = 0; i < arr.length; i += numForDiv) {
        let div = arr.slice(i, i + numForDiv);
        arrSplit.push(div);
    }
    return arrSplit;
};

console.log(resultSplitArr = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3));
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]





