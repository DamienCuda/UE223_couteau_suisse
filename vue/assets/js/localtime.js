$(document).ready(function() {
    // définir le nom du fuseau horaire
    
    var tz = localStorage.getItem('timezone');
    
    // obtenir l'heure actuelle dans le fuseau horaire spécifié
    var localTime = new Date().toLocaleString("fr-FR", {timeZone: tz});
    
    // afficher l'heure locale
    console.log("L'heure locale pour " + tz + " est : " + localTime);
  });
  