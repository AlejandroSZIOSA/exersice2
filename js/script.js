// Code here!
//test

document.querySelector(".art-1 h3").innerHTML = "Potato";
document.querySelector("header nav a").textContent = "Start";
document.querySelector("main .art-1 h2").textContent = "Fire";

document.querySelector(".art-1 button").style.backgroundColor = "red";
document.querySelector(".art-2").style.backgroundColor = "green";

//7
document
  .querySelector("header nav a")
  .setAttribute("href", "http://google.com");

//8
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p) => {
  p.style.backgroundColor = "lightblue";
});

//9
const buttons = document.querySelectorAll("button");
buttons.forEach((b) => {
  b.textContent = "add to cart";
});

//10
const menu1 = document.querySelectorAll("header nav a");
menu1[0].classList.add("active");

//11
document.querySelector("header img").classList.remove("logo");

//12
const newMenu = document.createElement("a");
newMenu.innerHTML = `<a href="#">new Menu</a>`;
document.querySelector("footer section article").appendChild(newMenu);

//13 :)
const mainArticles = document.querySelector("main");
mainArticles.insertAdjacentHTML(
  "beforeend",
  "<article><figure><img src=img/hoodie-forrest.png></figure><h2>Sinus Hodie</h2><h3>Forrest</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?</p></article>"
);

//14 :)
const logo = document.querySelector("header img");

logo.onclick = function () {
  console.log("found you!");
};

//15

const articles = document.querySelectorAll("main article");
//console.log(articles.length);

articles.forEach((a) => {
  a.onclick = function () {
    let name = a.querySelector("h2").textContent;
    console.log("Hi I am article", name);
  };
});
