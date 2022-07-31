// const age = 30;
// const name = "ore ";
// console.log(`My name is ${name} and i am ${age} years old`);

// const s = "technology, computers, its, code";
// console.log(s.split(","));

// array

// const number = ["apple", "banana", "orange", "pears"];

// number[4] = "grapes";
// number.push("mango");
// number.unshift("strawberries");
// number.pop();
// console.log(number);

// objects

// const person = {
//   firstname: "ore",
//   lastName: "soji",
//   age: 30,
//   hobbies: ["music", "coding"],
//   address: {
//     street: "oto",
//     state: "onkeydown",
//   },
// };

// console.log(person.address.state);

// const todos = [
//   {
//     id: 1,
//     text: "ore",
//     iscompleted: true,
//   },
//   {
//     id: 2,
//     text: "soji",
//     iscompleted: true,
//   },
//   {
//     id: 3,
//     text: "go away",
//     iscompleted: false,
//   },
// ];
// console.log(todos[1].text);

// // for (let i = 0; i <= 10; i++) {
// //   console.log(i);
// }
// for (let t of todos) {
//   console.log(t.text);
// }

//else or if statement

// const x = 6;
// const y = 10;
// if (x > 5 || y > 10) {
//   console.log("x is more than 5 or y is more than 10");
// }

// const x = 11;
// if (x === 10) {
//   console.log("x is equal to 10");
// } else console.log("x is not equal to 10");

// const x = 11;

// const color = x > 10 ? "red" : "blue";
// console.log(color);

// function

// function AddNum(num1 = 3, num2 = 5) {
//   return num1 + num2;
// }

// console.log(AddNum(10, 15));

// function add(x, y) {
//   return x + y;
// }
// document.getElementById("demo").innerHTML = add(4, 5);

// object constructor programming

// function Person(firstName, lastName, Dob) {
//   this.firstname = firstName;
//   this.lastName = lastName;
//   this.Dob = Dob;
// }
// const Person1 = new Person("john", "ore", "4-4-2005");
// const Person2 = new Person("olaolu", "sojhi", "4-7-2000");

// console.log(Person2);

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" && emailInput.value === "") {
    msg.innerHTML = "please enter all fields";
    setInterval(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);
    nameInput.value = "";
    emailInput.value = "";
  }
}
