'use strict';

const inputSlider = document.getElementById("slider");

const toggle = document.getElementById("toggle");

const output = document.querySelector(".page-view");

const progressBar = document.querySelector(".progressBar");

const selector = document.querySelector(".selector");

const price = document.querySelector(".price");
// console.log(selector);

inputSlider.oninput = function () {
    selector.style.left = this.value + '%';
    output.textContent = this.value + "k Page Views";
    progressBar.style.width = this.value + '%';
    price.textContent = "$" + (Math.floor(this.value * (.4)));
}


