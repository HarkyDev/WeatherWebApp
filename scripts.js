// var score = localStorage.getItem('score');
var userInput = document.getElementById("userInput")
var submitBtn = document.getElementById("submitBtn")
var weatherIcon = document.querySelector(".weatherIcon")

//--MOMENT--//////////////////////////////
var m = moment()
var today = (m.format('MM/D/YY'))

//---API---///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var  old_data = []
// var apiKey = "a8116bf5225672746c89d4065105aff0" //my key but banned for too many api requests
var apiKey = "7e32574f3f8ef265a11de62bb2b5d0de" //alistairs key

const ApiLink = "http://www.omdbapi.com/?i=tt3896198&apikey=e2201392"

var requestUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=e2201392';
var responseText = document.getElementById('response-text');


cityName = "manchester"


var CityRequest = function(){
  
  fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      
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
      let historyBtn = document.querySelectorAll(".historyBtn");
      let btn = document.createElement("button");
      btn.classList.add("historyBtn")
      btn.innerHTML = old_data[i];
      btnList.appendChild(btn); 
      btn.addEventListener("click", pastSearch);

}
    var historyBtn = document.querySelector(".historyBtn")
    historyBtn.addEventListener("click", pastSearch)
  }
  
  
  var pastSearch = function(event){
    
    console.log(event.target.innerHTML)
    
    cityName = event.target.innerHTML
    // cityName = historyBtn.innerHTML
    
    // console.log("---------------------------------------------------------------------------------------------------------------------------------")
    // console.log("past button works  " , cityName)
    // console.log("---------------------------------------------------------------------------------------------------------------------------------")
    
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
        document.querySelector('#uvIndex').textContent = ("UV Index: " +  data.current.uvi);   
        //icon
        var icon = document.createElement("img");
        document.querySelector(".weatherIcon").removeChild(
          document.querySelector(".weatherIcon").getElementsByTagName("img")[0]);
            weatherIcon.appendChild(icon)
            icon.setAttribute("src",
            `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`
          );
          ///CHANGE UV COLOUR INDEXS
          uvDisplay = document.getElementById("uvIndex")
          uvValue = data.current.uvi

          if(uvValue > 5){
            uvDisplay.setAttribute("style", "background-color: rgb(235, 0, 0);")
          }

          if(uvValue == 0){
            uvDisplay.setAttribute("style", "background-color: green;")
          }

          if(uvValue >= 1 && uvValue <= 4.99){
            uvDisplay.setAttribute("style", "background-color: orange;")
          }














          console.log("temp---------------------------" + data.daily[0].wind_speed + "mph")
          ////day icons
          var miniIconOne = document.querySelector(".icon1")
          var miniIconTwo = document.querySelector(".icon2")
          
          // var icon = document.createElement("img");
          //   miniIconOne.appendChild(icon)
          //     icon.setAttribute("src",
          //     `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`
          //   );
          
          
          
          function icon1() {
            var icon = document.createElement("img");
            icon.setAttribute(
              "src",
              `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`
            );
            document.querySelector(".icon1").removeChild(
            document.querySelector(".icon1").getElementsByTagName("img")[0]);
            document.querySelector(".icon1").appendChild(icon);
            
          }
          function icon2() {
            var icon = document.createElement("img");
            icon.setAttribute(
              "src",
              `https://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}.png`
            );
            document.querySelector(".icon2").removeChild(
            document.querySelector(".icon2").getElementsByTagName("img")[0]);
            document.querySelector(".icon2").appendChild(icon);
            
          }
          function icon3() {
            var icon = document.createElement("img");
            icon.setAttribute(
              "src",
              `https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}.png`
            );
            document.querySelector(".icon3").removeChild(
            document.querySelector(".icon3").getElementsByTagName("img")[0]);
            document.querySelector(".icon3").appendChild(icon);
            
          }
          function icon4() {
            var icon = document.createElement("img");
            icon.setAttribute(
              "src",
              `https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}.png`
            );
            document.querySelector(".icon4").removeChild(
            document.querySelector(".icon4").getElementsByTagName("img")[0]);
            document.querySelector(".icon4").appendChild(icon);
            
          }
          function icon5() {
            var icon = document.createElement("img");
            icon.setAttribute(
              "src",
              `https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}.png`
            );
            document.querySelector(".icon5").removeChild(
            document.querySelector(".icon5").getElementsByTagName("img")[0]);
            document.querySelector(".icon5").appendChild(icon);
            
          }
          icon1()
          icon2()
          icon3()
          icon4()
          icon5()

          


      








            /////////Day-1//////////////////////////////////////////
            var dtCode = data.daily[1].dt;
            var time = moment.unix(dtCode).format("D/M/YY");
            document.getElementById("day1").innerHTML =  time;
            document.getElementById('dailyTemp1').textContent = ("TEMP: " + data.daily[1].temp.day + "°C");
            document.getElementById('dailyWind1').textContent = ("WIND: " + data.daily[1].wind_speed + "mph");
            document.getElementById('dailyHumidity1').textContent = ("HUMIDITY: " + data.daily[1].humidity + "%");
            ////////////////////////////////////////////////////////////
            
            /////////Day-2//////////////////////////////////////////
            var dtCode = data.daily[2].dt;
            var time = moment.unix(dtCode).format("D/M/YY");
            document.getElementById("day2").innerHTML =  time;
            document.getElementById('dailyTemp2').textContent = ("TEMP: " + data.daily[2].temp.day + "°C");
            document.getElementById('dailyWind2').textContent = ("WIND: " + data.daily[2].wind_speed + "mph");
            document.getElementById('dailyHumidity2').textContent = ("HUMIDITY: " + data.daily[2].humidity + "%");
            ////////////////////////////////////////////////////////////

             /////////Day-3//////////////////////////////////////////
             var dtCode = data.daily[3].dt;
            var time = moment.unix(dtCode).format("D/M/YY");
            document.getElementById("day3").innerHTML =  time;

             document.getElementById('dailyTemp3').textContent = ("TEMP: " + data.daily[3].temp.day + "°C");
             document.getElementById('dailyWind3').textContent = ("WIND: " + data.daily[3].wind_speed + "mph");
             document.getElementById('dailyHumidity3').textContent = ("HUMIDITY: " + data.daily[3].humidity + "%");
             ////////////////////////////////////////////////////////////

             /////////Day-4//////////////////////////////////////////
             var dtCode = data.daily[4].dt;
             var time = moment.unix(dtCode).format("D/M/YY");
             document.getElementById("day4").innerHTML =  time;
             
             document.getElementById('dailyTemp4').textContent = ("TEMP: " + data.daily[4].temp.day + "°C");
             document.getElementById('dailyWind4').textContent = ("WIND: " + data.daily[4].wind_speed + "mph");
             document.getElementById('dailyHumidity4').textContent = ("HUMIDITY: " + data.daily[3].humidity + "%");
             ////////////////////////////////////////////////////////////

              /////////Day-5//////////////////////////////////////////
              var dtCode = data.daily[5].dt;
              var time = moment.unix(dtCode).format("D/M/YY");
              document.getElementById("day5").innerHTML =  time;

              document.getElementById('dailyTemp5').textContent = ("TEMP: " + data.daily[4].temp.day + "°C");
              document.getElementById('dailyWind5').textContent = ("WIND: " + data.daily[4].wind_speed + "mph");
              document.getElementById('dailyHumidity5').textContent = ("HUMIDITY: " + data.daily[4].humidity + "%");
              ////////////////////////////////////////////////////////////
          
        }
        
        
        
        )}
        
        
        console.log(moment().add(7, 'days'))
        console.log(moment().format('MM/D/YY'))
        // var oneDay = today.add(5, 'days')
        // console.log(oneDay)

        var startDate = today
        var new_date =   moment().add(7, 'days')
        var newer_date = new_date.format('MM/D/YY')
        console.log("NEW DATE " + new_date)
        console.log("NEWER DATE " + newer_date)

        moment().add(7, 'days')



        //TODO: mini icons will not render without deleting the previous icon