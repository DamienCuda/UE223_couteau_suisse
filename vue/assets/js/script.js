$(document).ready(function() {
    $("#search-button").click(function() {
      var ville = $("#city-input").val();
      if (ville) {
        showMeteo(ville);
      } else {
        alert("Veuillez entrer une ville.");
      }
    });
  });
  
  function showMeteo(ville) {
    var apikey = "keyhere";
    var api = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&appid=${apikey}`;
  
    $.getJSON(api, function(data) {
      var ville = data.name;
      var pays = data.sys.country;
      var description = data.weather[0].description;
      var temperature = Math.round(data.main.temp);
      var temp_max = Math.round(data.main.temp_max);
      var temp_min = Math.round(data.main.temp_min);
      var humidite = data.main.humidity;
      var vent = data.wind.speed;
      $(".city").text(`${ville}, ${pays}`);
      $(".desc").text(description);
      $(".temp").text(`${temperature} °C`);
      $(".temp-max").text(`Max: ${temp_max} °C`);
      $(".temp-min").text(`Min: ${temp_min} °C`);
      $(".humidity").text(`Humidité: ${humidite}%`);
      $(".wind").text(`Vent: ${vent} km/h`);
      // Afficher la section météo
      $(".meteo").show();
      });
      }
