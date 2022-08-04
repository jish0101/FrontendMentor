'use strict';

document.addEventListener('DOMContentLoaded', function () {
    callData();
    btnFunc();
});

const adviceNumberEl = document.querySelector('#adviceNumber');
const adviceContentEl = document.querySelector('#adviceContent');
const btnEl = document.querySelector('.btn');

// fetch api

const callData = function () {
    fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 220)}`).then(res => {
        return res.json()
    }).then(data => {
        const adviceObj = data.slip;
        adviceNumberEl.textContent = "ADVICE #" + adviceObj.id;
        adviceContentEl.textContent = adviceObj.advice;
    }).catch(error => {
        console.log("ERROR");
    });
};

// btn function

const btnFunc = function () {
    btnEl.addEventListener('click', () => {
        callData();
    });
};