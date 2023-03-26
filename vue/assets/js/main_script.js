import * as func from './functions.js'

var obj = JSON.parse(localStorage.getItem('data'));
var lat = obj.geometry.coordinates[1];
var lon = obj.geometry.coordinates[0];
console.log(obj);


$(document).ready(function() {
  if (obj) {
    func.showMeteo(lat,lon);
    func.showTime();
    func.checkHotels();
  } else {
    alert("Veuillez entrer une ville.");
  }
});