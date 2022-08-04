'use strict';
const menuEl = document.querySelector('.menu');
const arrowDownEl = document.querySelector('.arrow-down');
const featEl = document.getElementById('feat');
const compEl = document.getElementById('comp');
const arrowDownEl1 = document.querySelector('.arrow-down1');
const subMenuEl = document.querySelector('.sub-menu');
const subMenuEl2 = document.querySelector('.sub-menu2');
const extendbtnEl = document.querySelector('.burger');
extendbtnEl.addEventListener('click', openMenu);

arrowDownEl.addEventListener('click', toggle);
featEl.addEventListener('click', toggle);
arrowDownEl1.addEventListener('click', toggle1);
compEl.addEventListener('click', toggle1);

function toggle() {
    if (subMenuEl.classList.contains('sub-menu-close'))
    {
        subMenuEl.classList.remove('sub-menu-close');
        subMenuEl.classList.add('sub-menu-expand');
    } else if (subMenuEl.classList.contains('sub-menu-expand'))
    {
        subMenuEl.classList.remove('sub-menu-expand');
        subMenuEl.classList.add('sub-menu-close');
    }
}

function toggle1() {
    if (subMenuEl2.classList.contains('sub-menu-close'))
    {
        subMenuEl2.classList.remove('sub-menu-close');
        subMenuEl2.classList.add('sub-menu-expand1');
    } else if (subMenuEl2.classList.contains('sub-menu-expand1'))
    {
        subMenuEl2.classList.remove('sub-menu-expand1');
        subMenuEl2.classList.add('sub-menu-close');
    }
}
function openMenu() {
    if (menuEl.classList.contains('menu-close')) {
        menuEl.classList.remove('menu-close');
    } else {
        menuEl.classList.add('menu-close');
    }
}