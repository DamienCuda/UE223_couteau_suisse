<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://test.api.amadeus.com/v1/security/oauth2/token',
  CURLOPT_CAINFO => __DIR__ . DIRECTORY_SEPARATOR . 'cert.crt',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => 'grant_type=client_credentials&client_id=tAtPixaPoFnPekG1yOHXTgBe5zTzLvzX&client_secret=xAsb3DqedhcoGKxX',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/x-www-form-urlencoded'
  ),
));

$response = curl_exec($curl);

if ($response === false){
    var_dump(curl_error($curl));
}else{
    $response = json_decode($response, true);
    $token = $response['access_token'];
}
curl_close($curl);

