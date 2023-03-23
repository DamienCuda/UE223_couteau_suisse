<?php

require 'auth_token.php';

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://test.api.amadeus.com/v1/shopping/flight-origin?destination=LIS',
  CURLOPT_CAINFO => __DIR__ . DIRECTORY_SEPARATOR . 'cert.crt',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer '. $token 
  ),
));

$response = curl_exec($curl);

if ($response === false){
    var_dump(curl_error($curl));
}else{
    $response = json_decode($response, true);
    echo '<pre>';
    var_dump($response);
    // foreach($response['data'] as $vol){
    //     echo $vol['destination']. '<br>';
    // }
    echo '</pre>';
}
curl_close($curl);

// https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200'