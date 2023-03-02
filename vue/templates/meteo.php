<!DOCTYPE html>
<html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="../assets/css/meteo_style.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <script src="../assets/js/meteo_script.js" defer></script>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
      <title>La météo</title>
  </head>
  <body>

    <div class="container mt-5">

      <div class="card p-3 mx-auto" style="max-width: 600px;">
        <h1 class="card-title text-center mb-3">Météo</h1>

        <div class="input-group mb-3">
          <input type="text" id="city-input" class="form-control" placeholder="Entrez une ville" aria-label="Entrez une ville">
          <button class="btn btn-primary" id="search-button" type="button">Rechercher</button>
        </div>

        <div class="card-body text-center">
          <h2 class="city"></h2>
          <h3 class="desc"></h3>
          <h1 class="temp"></h1>
          <h5 class="temp-max"></h5>
          <h5 class="temp-min"></h5>
          <p class="humidity"></p>
          <p class="wind"></p>
        </div>
      </div>

    </div>

  </body>
</html>
