<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="vue/assets/css/homepage_style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="vue/assets/js/homepage_script.js" defer></script>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <title>Vous allez où ?</title>
    </head>
    <body>
        <main class="search_container">
            <h1>Vous allez où ?</h1>
            <form id="homepage_form" action="vue/templates/meteo.php" method="post">
                <fieldset class="autocomplete-container" id="autocomplete-container-city">
                    <label for="city_input" hidden="true"></label>
                    <input type="text" id="city_input" placeholder="Entrez une ville" autocomplete="off"/>
                    <div class="clear-button"><svg viewBox="0 0 24 24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"></path></svg></div>
                </fieldset>
                <button id="go_btn" type="submit">Go !</button>
            </form>
        </main>
    </body>
</html>