// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50
//  (т.е. 100, 90, 80, 70, 60, 50). 
// Добавить созданные параграфы в div с классом numbers.


const numbersDiv = document.querySelector('.numbers');

for (let i = 100; i >= 50; i -= 10) {
  const p = document.createElement('p');
  p.textContent = i;
  numbersDiv.appendChild(p);
}



// Написать цикл, который проходится по массиву строк, 
// для каждой строки создает параграф и добавляет его в div
//  с классом strings_container. Строки взять произвольные.

const strContainer = document.querySelector('.strings-container')

const arrStrings = ["Arsen", "Daria", "Maria", "Sergey"]
for( let i = 0; i < arrStrings.length; i++){

    const p = document.createElement('p');
    p.textContent = arrStrings[i];
    strContainer.appendChild(p);
}



// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, 
// last_name и  age
//  (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей.
//   Карточка должна содержать информацию об имени,
//  фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.



const arrUsers = [
    {
        first_name: "Daria",
        last_name: " Lenschmidt", 
        age: "35"
    }, 
    {
        first_name: "Anton",
        last_name: "Weis", 
        age: "16"
    }, 
    {
        first_name: "Anna",
        last_name: "Gray", 
        age: "20"
    }, 
    {
        first_name: "Elif",
        last_name: "Monberg", 
        age: "14"
    },
    {
        first_name: "Elisabet",
        last_name: "Somberg", 
        age: "43"
    }

]

const usersContainer = document.querySelector(".users-container")

for(let i = 0; i < arrUsers.length; i++) {
    const user = arrUsers[i]
    if(user.age >= 18) {
    const userCard = document.createElement('div');
    userCard.classList.add("user_card");
    const name = document.createElement('h3');
    name.textContent = `${user.first_name } ${user.last_name}`;
    const age = document.createElement('p');
    age.textContent = `Age: ${user.age}`;
    userCard.appendChild(name);
    userCard.appendChild(age);
    usersContainer.appendChild(userCard);
    }
}

