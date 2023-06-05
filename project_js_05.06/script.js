// Написать программу, которая через prompt считывает число и 
// выводит в консоль число равное 10% от введенного числа 

// const UserNumber = prompt('Enter the number');
// const sum = (UserNumber / 100 ) * 10;
// console.log(`10% of the number ${UserNumber} is ${sum}`);



// Написать программу, которая получает два числа и выводит наименьшее

// const number1 = +prompt('Enter the first number');
// const number2 = +prompt('Enter the second number');
// if (number1 < number2) {
// console.log(number1)
// }
// else if (number1 == number2 ){
//  console.log("These numbers are equal")
//      }
// else{
//     console.log(number2)
// }


// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений:
//  ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

// const number = +prompt('введите число');
// if (number < 100) {
//     console.log("Число меньше 100");
// }
// else if (number == 100) {
//     console.log("Число равно 100")
// }
// else{
//     console.log("Число больше 100")
// }



// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит 
// в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, 
//     или ‘Hi, <name>’, если пользователь несовершеннолетний.


const UserName = prompt("введите имя");
const UserAge = +prompt("введите возраст");
if (UserAge >= 18) {
    console.log(`Hello, ${UserName}`);
}
else{
    console.log(`Hi, ${UserName}`)
}


