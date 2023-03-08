$(document).ready(function() {
    if (lon, lat) {
      showMeteo(lon, lat);
    } else {
      alert("Veuillez entrer une ville.");
    }
  });

var lon = localStorage.getItem('lon');
var lat = localStorage.getItem('lat');

console.log(lat, lon);


function showMeteo(lat, lon) {
  var apikey = "d03285e8a3101946586143a406fb4dee";
  var api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${apikey}`;


  $.getJSON(api, function(data) {
    var ville = data.name;
    var pays = data.sys.country;
    var description = data.weather[0].description;
    var temperature = Math.round(data.main.temp);
    var temp_max = Math.round(data.main.temp_max);
    var temp_min = Math.round(data.main.temp_min);
    var humidite = data.main.humidity;
    $(".city").text(`${ville}, ${pays}`);
    $(".desc").text(description);
    $(".temp").text(`${temperature} °C`);
    $(".temp-max").text(`Max: ${temp_max} °C`);
    $(".temp-min").text(`Min: ${temp_min} °C`);
    $(".humidity").text(`Humidité: ${humidite}%`);
    // Afficher la section météo
    $(".meteo").show();
    });
}