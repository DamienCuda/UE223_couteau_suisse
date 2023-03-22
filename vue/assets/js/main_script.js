var obj = JSON.parse(localStorage.getItem('data'));

$(document).ready(function() {
    if (obj) {
      showMeteo(obj.geometry.coordinates[0], obj.geometry.coordinates[1]);
    } else {
      alert("Veuillez entrer une ville.");
    }
  });


function showMeteo(lat, lon) {
  var apikey = "d03285e8a3101946586143a406fb4dee";
  var api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${apikey}`;

  
  $.getJSON(api, function(data) {

    var ville = obj.properties.city;
    var pays = obj.properties.country;
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