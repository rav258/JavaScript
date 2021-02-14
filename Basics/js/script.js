// typy prymitywne: number, string, boolean, null, undefined, symbol
// typy refencyjne: array, object, function

// let number1 = 10;
// let number2 = number1;

// number2 = 20;

// console.log(number1, number2);

// let obj1 = { name: "Jan" };
// let obj2 = obj1;

// obj2.name = "Jakub";

// console.log(obj1);
// console.log(obj2);

// let, const, var

// const obj1 = {
//   name: "Jakub",
// };

// obj1.lastName = "Kowalski";

// console.log(obj1);

// let number = 10;
// number = 20;

// console.log(number);

// hoisting - wynoszenie deklaracji na poczatek dzialania programu
// let, const => nie ulegaja hoistingowi (temporary dead zone)

// console.log(add(2, 2));

// const add = (a, b) => {
//   return a + b;
// };

// Promises + API call
// 1. Pobieramy kontener z HTMLa
const userTasksContainer = document.querySelector("#userTasks");

// 2. Pobieramy dane z API
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((data) => {
    // 3. "Obrabiamy" dane z API
    // userId
    const userId = 1;
    // const userTasks = data.filter(function (val, index) {
    //   return val.userId === userId;
    // });
    const userTasks = data.filter((val, index) => val.userId === userId);

    // 4. Wyświetlamy dane z API w dokumencie HTML
    userTasks.forEach((data, index) => {
      const taskContainer = document.createElement("li"); // tworzymy element listy
      taskContainer.innerText = data.title; // uzupełniamy element listy o tekst z API
      userTasksContainer.appendChild(taskContainer); // dodajemy element listy do wczesniej wskazanego kontenera
    });
  });
