/* 

1. Переписать из if в тернарный оператор «?»

var age = 14;
if (age < 6) {
alert ('Привет, малыш');
} else if (age < 16) {
alert ('Привет, парень');
} else {
alert ('Здравствуйте');
}

let age = 14;
let message = age < 6 ? alert('Привет, малыш') : age < 16 ? alert('Привет, парень') : alert ('Здравствуйте');


2. Измените эту программу так, чтобы выводилось окно с 
вопросом «Сколько вам лет?». Пользователь должен ввести 
свой возраст, после чего получить сообщение с
соответствующим приветствием. 

let age = +prompt('Сколько вам лет?');

if (age < 6) {
    console.log('Привет, малыш');
} else if (age < 16) {
    console.log('Привет, парень');
} else {
    console.log('Здравствуйте');
}


3. Измените программу так, чтобы когда пользователь нажимал 
кнопку «отмена» либо крестик, выводилось сообщение «вы не 
ввели свой возраст»

*/

let age = prompt('Сколько вам лет?');

if (age === null || age === '') {
    alert('Вы не ввели свой возраст!');
} else if (isNaN(+age)) {
     alert('Введите число');
} else if (age < 0) {
    console.log('Вам не может быть меньше 0 лeт, введите реальный возраст'); 
} else if (age < 6) {
    console.log('Привет, малыш');
} else if (age < 16) {
    console.log('Привет, парень');
} else {
    console.log('Здравствуйте');
}

