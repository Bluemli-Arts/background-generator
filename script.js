let css = document.querySelector("#output");
let body = document.querySelector("body");

let [c1, c2] = document.querySelectorAll(".color");


css.textContent = "linear-gradient(to right, #ff0000 , #ffff00)";

c1.addEventListener("input", setBackgroundStyle);

c2.addEventListener("input", setBackgroundStyle);

function setBackgroundStyle() {
    body.style.background = `linear-gradient(to right, ${c1.value} , ${c2.value})`;
    css.textContent = body.style.background;
}