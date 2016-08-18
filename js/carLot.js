"use strict";

var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        callback(inventory);
      });
      inventoryLoader.send();
    }
  };
})();

// Promises variation

// var CarLot = (function () {
//   var inventory = [];

//   return {
//     getInventory: function () {
//       return inventory
//     },
//     loadInventory: function () {
//       return new Promise(function(resolve, reject) {
//         var inventoryLoader = new XMLHttpRequest();
//         inventoryLoader.open("GET", "inventory.json")
//         inventoryLoader.send()

//         inventoryLoader.addEventListener("load", function () {
//           var data = JSON.parse(this.responseText)
//           fillInventory(data);
//           resolve(inventory)
//         });
//       });
//     }
//   };
// })();