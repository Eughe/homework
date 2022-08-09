//Написать функцию для вычисления среднего арифметического
// произвольного количества чисел

// function average(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return (sum / numbers.length);
// }

// console.log(average(6, 8, 47, 5, 12, 48, 80, 54, 106));

// 1. Написать функцию, которая принимает массив и степень.
// Функция возвращает массив, в котором каждое число
// массива возведено в указанную степень

// let expoArray = [];

// function getExpo(numbers, raiseNum) {
//   for (let i = 0; i < numbers.length; i++) {
//     expoArray[i] = numbers[i] ** raiseNum;
//   }
//   return expoArray;
// };

// 2. Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели».

// function getDayOfWeek(dayNumber) {
//   switch (dayNumber) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     case 7:
//       return "Воскресенье";
//     default:
//       return "Нет такого дня недели";
//   }
// }

// getDayOfWeek(3);

// 3. Написать функцию, которая принимает два числа (n1 и n2) и
// возвращает массив (8 элементов) из этих чередующихся чисел.
// Например, передаем два числа arrMaker(2,5), функция вернет массив
// [2,5,2,5,2,5,2,5]

// let binaryArray = [];

// function getBinaryArray(firstNum, secondNum) {
//   for (let i = 0; i < 8; i += 2) {
//     binaryArray[i] = firstNum;
//     binaryArray[i + 1] = secondNum;
//   }
//   return binaryArray;
// }

// getBinaryArray(3, 6);

// console.log(binaryArray);

// 4. Написать функцию, которая возвращает годовую оценку по предмету.
// Функция принимает 4 оценки за четверти и возвращает годовую. В
// начале программы пользователя спршивают оценки за четверти в
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и
// т.д. В конце работы программы выводится сообщение «ваша годовая
// оценка N»

// let qarterGrade1 = +prompt("Введите оценку за первую четверть");
// let qarterGrade2 = +prompt("Введите оценку за вторую четверть");
// let qarterGrade3 = +prompt("Введите оценку за третью четверть");
// let qarterGrade4 = +prompt("Введите оценку за четвёртую четверть");

// function getYearGrade(g1, g2, g3, g4) {
//   yearGrade = Math.round((g1 + g2 + g3 + g4) / 4);
//   return yearGrade;
// }

// getYearGrade(qarterGrade1, qarterGrade2, qarterGrade3, qarterGrade4);

// alert(`ваша годовая оценка ${yearGrade}`);

// 5. Напишите функцию, которая возвращает процент побед и процент
// поражений в контру или доту. Функция принимает два параметра:
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы:
// myStats(352,211), это значит было 352 победы и 211 поражений.
// Функция возвращает сообщение «ваш процент побед - 62%,
// поражений – 38%».

// function getGameResult(win, lost) {
//   win = Math.round((win * 100) / (win + lost));
//   lost = 100 - win;
//   return alert(`ваш процент побед - ${win}%, поражений – ${lost}%`);
// }

// getGameResult(116, 58);

// 6. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном. Массив, который возвращает
// функция [1,4,6,74]

// const initialArray = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];
// const recurArray = [];

// function getRecurArray(numbers) {
//   let j = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (
//       numbers.indexOf(numbers[i], i + 1) > -1 &&
//       recurArray.indexOf(numbers[i], 0) === -1
//     ) {
//       recurArray[j++] = numbers[i];
//     }
//   }
//   return recurArray;
// }

// getRecurArray(initialArray);

// console.log(recurArray);

// 7. Написать функцию, которая принимает случайный
// двумерный массив (разной длины) из 8 элементов. Функция
// возвращает тот массив сумма элементов которого
// наибольшая

// const twoDimArray = [
//   [4, 5, 6],
//   [18, 28, 18],
//   [28, 45, 90],
//   [45, 3, 14],
//   [27, 16, 2, 19, 8],
//   [15, 76, 82, 10, 13],
//   [7, 44, 102, 99],
//   [64, 11, 9, 37],
// ];

// function getMaxSumArray(array) {
//   let maxSum = 0;
//   j = 0;
//   for (let i = 0; i < array.length; i++) {
//     let sumArray = array[i].reduce(function (sum, elem) {
//       return sum + elem;
//     }, 0);
//     if (sumArray > maxSum) {
//       maxSum = sumArray;
//       j = i;
//     }
//   }
//   return array[j];
// }

// console.log(getMaxSumArray(twoDimArray));

// 8. Написать программу, которая спрашивает у пользователя сколько ему
// лет. В программе должна присутствовать функция validator(), которая
// проверяет введенное число. Если validator() вернет true, то возраст
// можно выводить на экран в виде “Вам N лет”. Функция validator()
// должна проверять, чтобы введенный возраст не был отрицательным,
// меньше 5 лет и больше 100, чтобы возраст не был строкой, и не был
// null или undefined.

// let userAge = +prompt("Введите Ваш возраст");

// function validator(age) {
//   if (isNaN(userAge) || userAge < 5 || userAge > 100) {
//     alert("Введите корректное значение");
//   } else {
//     alert(`Вам ${userAge} лет`);
//   }
// }

// validator(userAge);

// 9. Написать компьютерную игру «отгадай число». Игра на двух игроков.
// Сначала игрок1 указывает максимальное число(max) до которого
// можно загадывать. Потом игрок2 указывает число n от 1 до max.
// Игрок1 пытается отгадать число n, если не угадал выводится
// сообщение «Загаданное число меньше указанного вами» или
// «Загаданное число больше указанного вами». Выигрывает тот игрок,
// который за наименьшее количество попыток отгадает число.

function guessNumber(maxNumberOne, maxNumberTwo) {
  let playerOneNumber = 0;
  let playerTwoNumber = 0;

  for (i = 0; playerTwoNumber !== maxNumberOne; i++) {
    playerTwoNumber = +prompt("Отгадайте число 1");
    if (playerTwoNumber > maxNumberOne) {
      alert("Загаданное число меньше указанного Вами");
    } else if (playerTwoNumber < maxNumberOne) {
      alert("Загаданное число больше указанного Вами");
    } else alert("Вы угадали!");
  }

  for (j = 0; playerOneNumber !== maxNumberTwo; j++) {
    playerOneNumber = +prompt("Отгадайте число 2");
    if (playerOneNumber > maxNumberTwo) {
      alert("Загаданное число меньше указанного Вами");
    } else if (playerOneNumber < maxNumberTwo) {
      alert("Загаданное число больше указанного Вами");
    } else alert("Вы угадали!");
  }

  if (i > j) {
    alert("Выиграл игрок 2");
  } else if (i > j) {
    alert("Выиграл игрок 1");
  } else alert("Ничья");
}

let maxNumberOne = +prompt("Игрок 1, загадайте число");
let maxNumberTwo = +prompt("Игрок 2, загадайте число");

guessNumber(maxNumberOne, maxNumberTwo);
