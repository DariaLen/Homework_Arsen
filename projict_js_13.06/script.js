//Напишите функцию, которая принимает два числовых аргумента
//и выводит в консоль все четные числа от большего к меньшему.

function calc(a, b) {
  let start;
  let end;
  if (a > b) {
    start = a;
    end = b;
  } else {
    start = b;
    end = a;
  }
  for (let i = start; i >= end; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}




//  calc(6, 20);

//  Напишите функцию power, которая принимает два числовых аргумента
//  (основание степени и саму степень) и возвращает число в указанной
//   степени. Значение степени должно быть указано по умолчанию 2.

function power(num1, num2 = 2) {
  sum = num1 ** num2;
  return sum;
}
console.log(power(5));

// function power(num1, num2= 2) {
//     let result = 1;
//     for (let i = 0; i < num2; i++) {
//       result *= num1;
//     }
//     return result;
//   }
//   console.log(power(5,3))

//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function CalcSumNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(CalcSumNumbers(12));

//Напишите функцию, которая принимает два числовых аргумента n и m и считает
// сумму четных чисел и нечетных чисел от n до m.
//Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function EvenOdd(n, m) {
  let SumEven = 0;
  let SumOdd = 0;
  for (let i = n; i <= m; i++) {
    if (i % 2 === 0) {
      SumEven += i;
    } else {
      SumOdd += i;
    }
  }
  console.log(`Sum of even numbers: ${SumEven}`);
  console.log(`Summ of odd numbers: ${SumOdd}`);
  return SumEven, SumOdd;
}
EvenOdd(6, 12);

//Напишите функцию, которая принимает в качестве аргументов массив строк,
// а возвращает первый самый длинный элемент массива. Если входной массив пуст,
//функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
//(string.length > string.length) - сравнение длины строк
//Пример: [ 'one', 'two', 'three' ] => 'three'

function arrayStr(strings) {
  if (strings.length === 0) {
    return null;
  }

  let long = strings[0];
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > long.length) {
      long = strings[i];
    }
  }
  return long;
}
console.log(arrayStr(["one", "two", "three"]));
