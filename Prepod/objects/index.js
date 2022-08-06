
// const person = [34, 'Gomel', 51];

// const person = {
//     name: 'John',
//     age: 23,
//     city: 'Gomel',
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         width: 23,
//         height: 200,
//         weight: 100,
//     },
// };


// var str = ['city', 'smity', 'pitty'];

// const person = {
//     name: 'Valerchik',
//     [str[2]]: 'Gomel',
// };

// const { 'pitty': asda } = person;


// console.log(asda);

// let nick = 'Bobik';

// const dog = {
//     age: 23,
//     nick, // nick: nick
//     city: 'Gomel'
// };



// const person2 = {
//     ...person,
//     stack: [ ...person.stack ],
//     size: { ...person.size }
// };


// const person3 = {
//     pogremuha: 'lobzik',
//     hodki: 6
// }

// const person2 = {
//     ...person3,
//     ...person,
//     a: 2
// };

// console.log(person2)


// ===
// for (let key in person) {
//     person2[key] = person[key];
// }


// person.name = 'LLLLLLL';

// console.log(person2);

// rest spread desctructuring
// const arr = [5,4,33,65,6];
// const [a,b] = arr;

// const age = 2;

// const { 
//     age: johnAge = 100,
//     city,
//     lastName = 'Ivanov',
//     size: {
//         height
//     } = {height: 999}
// } = person;

// const {
//     age,
//     name,
//     stack: [a, b = 'BLABLA', ...kusokStacka],
//     ...kusokPersona
// } = person;



// const age = person.age;






// const person2 = {};

// for ( let key in person ) {
//     if (Array.isArray(person[key])) {
//         person2[key] = [...person[key]];
//         continue;
//     }

//     person2[key] = person[key];
// }

// person.stack.push('React');
// person.size.width = 30;

// console.log(person2.size === person.size)

// person.name = 'Valerchik';

// console.log(person2);


// person.name = 'Valerchik';
// person.lastName = 'Ivanov';

// console.log( 'isProgrammer' in person );
// console.log( person.hasOwnProperty('isProgrammer') );

// delete person.age;



// 1. создать объект subscribers с полями oldSubscribers и newSubscribers
// добавьте в объект поле allSubscribers которое должно
//  хранить сумму oldSubscribers + newSubscribers
//  если число allSubscribers > 700 вывести you are famous, иначе try harder
//  2. дан массив объектов [
//     {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}
//  ]
//  используя методы массивов и циклы 
//  вывести в консоль 'its valid', если во всех объектах поле a > b
//  3. на основе исходного массива создать массив таких же объектов, но поле b
//  должно быть возведено в квадрат
//  пример: [{a: 2, b: 1}, {a: 5, b: 144}, {a: 95, b: 49}]
//  4. создать массив на основе предыдущего, в котором
//  поля a и b будут последовательно помещены в массив
//  пример: [ 2, 1, 5, 144, 95, 49]


