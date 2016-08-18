"use strict";

CarLot = (function(carLot){
  carLot.resetCards = function(cards){
    cards.forEach(function(card){
      card.classList.remove("pink");
    });
  };
  carLot.styleCard = function(card, pink){
    card.classList.add(pink);
  };
  carLot.mirrorText = function(card, userInput){
    userInput.value = card.querySelector("p").innerHTML;
    userInput.addEventListener("keyup", function(){
      if (card.classList.contains("pink")){
        card.querySelector("p").innerHTML = userInput.value;
      }
    });
  };
  return carLot;
})(CarLot);