// ==UserScript==
// @name         YandexBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Igor Pribytov
// @match        https://yandex.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


//let keywords = ["купля-продажа авто", "каталог автомобилей", "автомобили купить"];
//let keyword = keywords[getRandom(0, keywords.length)];

document.querySelectorAll(".mini-suggest__button")[0].click();

let btn_find = document.querySelectorAll(".mini-suggest__button")[0];

let links = document.links;

if (btn_find != undefined) {
  //document.getElementsByName("text")[0].value = keyword;
  document.getElementsByName("text")[0].value = "купля-продажа авто";
  let timerId = setTimeout(function checkFindButton() {

    if (document.querySelectorAll(".mini-suggest__button")[0].click() == undefined){
      timerId = setTimeout(checkFindButton, 2000);
    }

  }, 2000);
} else {
  links = document.links;
  for (let i = 0; i < links.length; i++) {
  //for (let i = 0; i < 2; i++) {
   if (links[i].href.indexOf("auto.ru") !== -1){
   //if (links[i].href.indexOf("https://auto.ru/docs/dkp/") !== -1) {
      let link = links[i];
      console.log("Нашел строку " + links[i]);
      link.removeAttribute("target");
      link.click();
      break;
    }
  }
 }

//function getRandom(min, max) {
//  return Math.floor(Math.random() * (max- min) + min);
//}







