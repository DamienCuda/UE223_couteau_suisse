<!DOCTYPE html>
<html lang="fr">
    <?= include 'vue/templates/head.php'; ?>
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
        <p class="uvindex"></p>
      </div>
    </div>

  </div>

</body>
</html>



