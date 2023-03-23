document.addEventListener('DOMContentLoaded', function()
{

var obj = JSON.parse(localStorage.getItem('data'));
var ville = obj.properties.city;

checkHotels();

function checkHotels()
{ 
     var display = document.querySelector('#hotel')
             fetch('https://booking-com.p.rapidapi.com/v1/hotels/locations?name='+ville+'&locale=en-gb',{
              method:'GET',
              headers: {
                'X-RapidAPI-Key': '660a74febamsh92f0be02ad27b4cp1a62b2jsn5197b86b94c1',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
              },
            })
            .then( res => res.json())
            .then(
              res => {  
                console.log(ville)
                console.log(res)
             
                fetch('https://booking-com.p.rapidapi.com/v1/hotels/search?adults_number=2&dest_type=city&filter_by_currency=AED&checkout_date=2023-09-06&checkin_date=2023-09-05&order_by=popularity&locale=en-gb&dest_id='+res[0].dest_id+'&units=metric&room_number=1&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_number=2&children_ages=5%2C0&page_number=0&include_adjacency=true',{
                 method:'GET',
                 headers: {
                  'X-RapidAPI-Key': '660a74febamsh92f0be02ad27b4cp1a62b2jsn5197b86b94c1',
                  'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
                 }
               })
               .then( res => res.json())
               .then(
                 res => {  
                  console.log(res)
                  if(res.result.length < 1)
                  {
                    display.innerHTML = `<h2>Pas d'informations d'hôtels disponible dans cette région !!</h2>`
                  }
                  else{
                    res.result.forEach(result => {
                      temp = `
                      <div class="hotel_card">
                        <div class="img_container">
                          <img class="hotel_img" src="${result.max_1440_photo_url}" class="pt-3"/>
                        </div>
                        <div class="hotel_info">
                          <p class="hotel_name">${result.hotel_name}</p>
                          <div class="hotel_details">
                            <p class="hotel_adress">${result.address}</p>
                            <p >Prix Minimum : <span class="hotel_price"> ${Number(result.min_total_price).toFixed(0)} ${result.currency_code}</span></p>
                            <a href="${result.url}"><button id="btn1" class="hotel_btn">En savoir plus</button></a>
                          </div>
                        </div>      
                      </div>`
                      display.innerHTML += temp;
                    });
                  }
                    
                  })
               .catch( (error) =>
                 {
                    console.log(error)
                 } )
           
               })
            .catch( (error) =>
              {
                 console.log(error)
              } )
   
          }
})
    