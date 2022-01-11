"use strict";

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
// const wrapper = document.querySelector(".wrapper"),
//   hearts = document.querySelectorAll(".heart"),
//   oneHeart = document.querySelector(".heart");
const wrapper = document.querySelector(".wrapper"),
  hearts = wrapper.querySelectorAll(".heart"),
  oneHeart = wrapper.querySelector(".heart");

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// box.style.width = "500px";
// box.style.backgroundColor = "yellow";
box.style.cssText = "background-color: blue; width: 500px";

//
hearts.forEach((item) => {
  item.style.backgroundColor = "mistyrose";
});

const div = document.createElement("div");
// const text = document.createTextNode("Слава Роду!");
div.classList.add("black");
// document.body.append(div);

// добавить перед завершающим тегом
wrapper.append(div);
// добавить в начало
// wrapper.prepend(div);

// div before hearts[0]:
// hearts[0].before(div);

//  div after hearts[0]:
// hearts[0].after(div);

// delete item:
// circles[0].remove();

// заменить один элем другим: 1- что, 2 - чем
// hearts[1].replaceWith(circles[0]);

// Устаревшие конструкции:
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[1]);
// родитель            чем         что
// wrapper.replaceChild(circles[1], hearts[1]);
// wrapper.removeChild(hearts[1]);
// можно вставлять теги
div.innerHTML = "<h1>Слава Роду!</h1>";
//  можно вставлять только текст
// div.textContent = "Слава Ладе!";

// вставляем кусочек кода перед- или после- определенных тегов
//  элемент, с которым работаем
// div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");
