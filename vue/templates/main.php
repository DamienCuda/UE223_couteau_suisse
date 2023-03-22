<!DOCTYPE html>
<html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="../assets/css/main_style.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <script src="../assets/js/main_script.js" defer></script>
      <script src="../assets/js/autocomplete_script.js" defer></script>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
      <title>La météo</title>
  </head>
  <body>

    <header id="navbar">
      <div class="title">Votre couteau suisse voyage</div>
      <nav id="main_nav">
        <form id="main_form" action="#" method="post">
            <fieldset class="autocomplete-container" id="index_input_container">
                <label for="index_city_input" hidden="true"></label>
                <input type="text" id="index_input" placeholder="Entrez une ville" autocomplete="off"/>
                <div class="clear-button" id="index_clear_button"><svg viewBox="0 0 24 24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"></path></svg></div>
            </fieldset>
            <button id="go_btn" type="submit">Go !</button>
        </form>
      </nav>
    </header>

    <main>

      <section id="hero">
        <div class="card-body text-center">
          <h2 class="city"></h2>
          <h3 class="desc"></h3>
          <h1 class="temp"></h1>
          <h5 class="temp-max"></h5>
          <h5 class="temp-min"></h5>
          <p class="humidity"></p>
          <p class="wind"></p>
        </div>

        <div id="heure">

        </div>
      </section>

      <section id="vol">

      </section>

      <section id="hotel">

      </section>



    </main>
    
  </body>
</html>
