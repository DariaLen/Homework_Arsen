//2.Напишите функцию которая проверяет, отрицательное число или нет (возвращает true/false)

function checkNumbers(num) {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumbers(-4));

//3.Запросить у пользователя произвольное число и вывести его, если последняя цифра,
// на которую оно заканчивается, равна 8

function numberEnd(number) {
  const num = +prompt("Enter a number");
  if (num % 10 === 8) {
    console.log(num);
  } else {
    console.log(`The number ${num} does not end with 8!`);
  }
}

// numberEnd()

//4.Описать массив (набор) трех пользователей со след/характеристиками возраст, з/п, email
//и вывести возраст последнего (в наборе) пользователя

function print_age() {
  const users = [
    {
      age: 34,
      salary: 10000,
      email: "daria.len@gmail.com",
    },
    {
      age: 44,
      salary: 18000,
      email: "daria.lenscmidt@gmail.com",
    },
    {
      age: 19,
      salary: 40000,
      email: "daria.n@gmail.com",
    },
  ];
  console.log(users[2].age);
}

print_age();

//5.Напишите функцию, которая получает массив различных чисел
//(положительных и отрицательных) и возвращает массив отрицательных чисел

function negativNumbers(numbers) {
  const negtivNum = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negtivNum.push(numbers[i]);
    }
  }
  return negtivNum;
}
console.log(negativNumbers([1, -5, 3, -6, -2]));

//Запросить у сотрудника (логичистической компании) ко-во часов полета транспортного средства (самолета)
// и вывести время, в которое он вернется назад

// const FlightTime = +prompt("Enter the flight time");  //60h
// const DeprturTime = +prompt("Enter the departure time");  //2:00
// const arrivalTime = DeprturTime + FlightTime



//8.Написать функцию, которая принимает товары (массив объектов)
// и возвращает строку Самый дорогой товар <НАЗВАНИЕ> стоит <NN> EUR

function expensiveProduct(products) {
  let expensive = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > expensive.price) {
      expensive = products[i];
    }
  }
  return `Самый дорогой товар ${expensive.name} стоит ${expensive.price} EUR`;
}

const arrayProduct = [
  {
    name: "Dell",
    price: 20000,
  },
  {
    name: "Acer",
    price: 18000,
  },
  {
    name: "Samsung",
    price: 22000,
  },
];

console.log(expensiveProduct(arrayProduct));

// 9.Написать функцию, которая принимает два числа
//  в качестве диапазона и возвращает сумму нечетных чисел в указанном диапазоне

function sumOddNumbers(num1, num2) {
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOddNumbers(3, 10));

//Написать программу, которая описывает массив двух игроков, со след/полями: имя_пользователя,
// ущерб и сравнивает их ущерб между собой
// (у кого шансов на победу больше)

const playerslist = [
  { players_name: "Ivan", damage: 80 },
  {
    players_name: "Mark",
    damage: 120,
  },
];

function comprPlayerDamage(playersArray) {
  let playerWinn = 0;
  const playerOne = playersArray[0].damage;
  const playerTwo = playersArray[1].damage;
  if (playerOne < playerTwo) {
    return `${playersArray[0].players_name} has more chances to win `;
  } else if (playerOne == playerTwo) {
    return "Players have an equal chance of winning";
  } else {
    return `${playersArray[1].players_name} has more chances to win `;
  }
}
console.log(comprPlayerDamage(playerslist));
