'use strict';

var  mainHeader = document.getElementById('main-header'); //przypisujemy naglowek strony do zmiennej

mainHeader.innerHTML = "treść naglowka"; //dodajemy treść nagłowka

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do zmiennej 

console.log(link);

link.href = "http://akademia108.pl"; // nadpisujemy atrybut href w linki

link.className = "nowa-klasa"; // nadpisujemy nazwę klasy w linku

mainHeader.style.color = "#1a2"; // dodajemy style do naglowka