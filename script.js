"use strict";

// Задание 1

// <div class="block">
// </div>
// 1. Дан блок, внутри него необходимо создать элемент <div> с классом item, разместить текст "Элемент внутри" и задать стили:
// - цвет текста: синий;
// - рамка: сплошная черная;
// - цвет фона: #f8f8f8;
// - внутренний отступ: 16px;
// 2. Добавить данному блоку класс item_1 (использовать setAttribute).

// const divBlock = document.querySelector(".block");
// const divElement = document.createElement("div");
// // console.log(divElement.style);
// // console.log(divElement.classList);
// // divElement.classList.add("item"); // добавляем класс item в созданный элемент div
// divElement.textContent = "Элемент внутри";
// divBlock.appendChild(divElement); // добавили элемент внутри блока
// divElement.style.color = "blue";
// divElement.style.border = "1px solid black";
// divElement.style.backgroundColor = "#f8f8f8";
// divElement.style.padding = "16px";
// divElement.setAttribute("class", "item item_1");

// Задание 2

// Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const paragraph = document.querySelector(".text");
// console.log(paragraph);
// console.log(paragraph.previousElementSibling); // вывод предыдущего (соседнего) элемента
// console.log(paragraph.parentNode);
// console.log(paragraph.parentElement);
// const imgElement = document.querySelector("img");
// console.log(imgElement);
// console.log(imgElement.parentElement);
// const elemElement = document.querySelector(".elem");
// console.log(elemElement.parentElement);
// console.log(paragraph.closest("div.elem"));

// Задание 3

// {/* <div class="item">
//   <div class="elem">
//     <div class="info">
//       <h2 class="subtitle">Lorem, ipsum dolor.</h2>
//     </div>
//   </div>
// </div>
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей */}

// const h2Element = document.querySelector("h2");
// const arrayParents = [];
// let h2FirstParent = h2Element.parentElement;

// while (h2FirstParent !== document.body) {
//   arrayParents.push(h2FirstParent);
//   h2FirstParent = h2FirstParent.parentElement;
// }
// console.log(arrayParents);

// Задание 4

/* <form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>

Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным */

// const btnElement = document.querySelector(".btn");
// const inputElement = document.querySelector("input");
// const formElement = document.querySelector("form");

// function sendData() {
//   const h2Element = document.createElement("h2");

//   if (inputElement.value.trim() === "") {
//     h2Element.textContent = "Вы не заполнили поле ввода";
//     inputElement.style.border = "1px solid red";
//   } else {
//     h2Element.textContent = "Вы успешно заполнили поле ввода";
//     inputElement.style.border = "1px solid green";
//   }
//   h2Element.style.width = "600px";
//   formElement.appendChild(h2Element);
//   setTimeout(() => {
//     h2Element.remove();
//   }, 1000);
// }
