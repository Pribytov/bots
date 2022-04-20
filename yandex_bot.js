// ==UserScript==
// @name         YandexBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Igor Pribytov
// @match        https://yandex.ru/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


let keywords = ["купля-продажа авто", "каталог автомобилей", "автомобили купить"];

document.getElementsByName("text")[0].value = "автомобили купить";


document.querySelectorAll(".mini-suggest__button")[0].click();

let timerId = setTimeout(function checkFindButton() {

  if (document.querySelectorAll(".mini-suggest__button")[0].click() == undefined){
    timerId = setTimeout(checkFindButton, 2000);
  }

}, 2000);


let links = document.links;

for (let i = 0; i < links.length; i++) {
 if (links[i].href.indexOf("auto.ru") !== -1){
    let link = links[i];
    console.log("Нашел строку " + links[i]);
    //link.removeAttribute("target");
    //link.click();
    break;
  }
}





