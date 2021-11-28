// var score = localStorage.getItem('score');
var userInput = document.getElementById("userInput")
var submitBtn = document.getElementById("submitBtn")

//--MOMENT--//////////////////////////////
var m = moment()
var today = (m.format('MM/D/YY'))

//---API---///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var  old_data = []
var apiKey = "a8116bf5225672746c89d4065105aff0"
const ApiLink = "http://www.omdbapi.com/?i=tt3896198&apikey=e2201392"

var requestUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=e2201392';
var responseText = document.getElementById('response-text');


cityName = "manchester"

var CityRequest = function(){
  
  fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=a8116bf5225672746c89d4065105aff0`
      
      )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // RAW ARRAY
        console.log("RAW DATA" , data);
        //City Name
        document.querySelector('.cityName').textContent = ("CITY: "+ data.name + " " +  today);
        //City Temp
        document.querySelector('.cityTemp').textContent = ("TEMP: " + data.main.temp + "°C");
        // City Wind
        document.querySelector('.cityWind').textContent = ("Wind:   " + data.wind.speed +  " MPH");
          // City humidity
          document.querySelector('.cityHumidity').textContent = ("Humidity: " +  data.main.humidity + "%");   
          
          var lat = data.coord.lat
          console.log("latitude: " + lat)
          var lon = data.coord.lon
          console.log("longitude: " + lon)

          oneCall(lat,lon)
        




        }
        
        
        
        )}
        //temp  wind  humidity  uv index
        
        
      CityRequest()
      
      
            //temp  wind  humidity  uv index
            
      
      
      
      
      // console.log(document.querySelector('#userInput').value)
      
      var getUserInput = function(){
        event.preventDefault();
        console.log("code is passing")
        cityName = document.querySelector('#userInput').value
  console.log(cityName)
}


var btnList = document.getElementById('buttonList')

function save(){
  btnList.innerHTML = ""
  var new_data = document.getElementById('userInput').value
  if (localStorage.getItem("pastCities") == null){
    localStorage.setItem('pastCities','[]');
  }
  
  var old_data = JSON.parse(localStorage.getItem('pastCities'));
  old_data.push(new_data);
  
  localStorage.setItem('pastCities' , JSON.stringify(old_data));


  for (i = old_data.length-1; i >= 0 ; i--){
      let btn = document.createElement("button");
      btn.classList.add("historyBtn")
      btn.innerHTML = old_data[i];
      console.log(old_data)
      btnList.appendChild(btn); 
}
    var historyBtn = document.querySelector(".historyBtn")
    historyBtn.addEventListener("click", pastsearch)
  }
  
  
  var pastsearch = function(){
    cityName = document.querySelector('.historyBtn').innerHTML
    console.log("past button works  " , cityName)
    CityRequest(cityName)  
  }
  


  
  
  var masterSearch = function(){
    save()
    getUserInput()
    CityRequest()
    // oneCall()  
  }
  


document.querySelector('#submitBtn').addEventListener('click', masterSearch);

var localClear = function(){
  localStorage.clear()
  location.reload();
}



// `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${APIKey}`
// e2201392


function oneCall (lat,lon){
  fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`

      )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // RAW ARRAY
        console.log("ONE CALL" , data);
        // cityUVI
        document.querySelector('.cityUVI').textContent = ("UV Index: " +  data.current.uvi);   
        //icon
        
        
      }
      
      
      
      )}

var iconFunction = function(){
  
}