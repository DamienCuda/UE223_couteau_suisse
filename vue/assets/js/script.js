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
      var icone = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      var temperature = Math.round(data.main.temp);
      var temp_max = Math.round(data.main.temp_max);
      var temp_min = Math.round(data.main.temp_min);
      var humidite = data.main.humidity;
      var vent = data.wind.speed;
      var pression = data.main.pressure;
      var uvindex = "";
      if (data.current && data.current.uvi) {
        uv = data.current.uvi;
        if (uv <= 2) {
            uvindex = "Faible";
          } else if (uv <= 5) {
            uvindex = "Modéré";
          } else if (uv <= 7) {
            uvindex = "Elevé";
          } else if (uv <= 10) {
            uvindex = "Très élevé";
          } else {
            uvindex = "Extrême";
          }
      }  
      $(".city").text(`${ville}, ${pays}`);
      $(".desc").text(description);
      $(".icon").attr("src", icone);
      $(".temp").text(`${temperature} °C`);
      $(".temp-max").text(`Max: ${temp_max} °C`);
      $(".temp-min").text(`Min: ${temp_min} °C`);
      $(".humidity").text(`Humidité: ${humidite}%`);
      $(".wind").text(`Vent: ${vent} km/h`);
      $(".pressure").text(`Pression: ${pression} hPa`);
      $(".uv-index").text(`Index UV: ${uvindex}`);
      // Afficher la section météo
      $(".meteo").show();
      });
      }
