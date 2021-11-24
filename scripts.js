// var score = localStorage.getItem('score');
// var userInput = document.getElementById("userInput")
// var submitBtn = document.getElementById("submitBtn")
// var clearBtn = document.getElementById("clearBtn")
// var playAgain = document.getElementById("playAgain")
// let records = JSON.parse(localStorage.getItem('records'));

// const myList = document.getElementById('my-list');

// window.addEventListener('DOMContentLoaded', function() {
//     if (!records) {
//         records = []
//     };

//     for (let i = 0; i < records.length; i++) {
//           let newListItem = document.createElement('button');
//     newListItem.textContent = records[i].nameOfUser ;
//     myList.appendChild(newListItem)
//     }
// })

// console.log(records);


// var form = document.querySelector('.form')

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     var userInputData = userInput.value.trim();
//     var record = {
//         nameOfUser: userInputData,
//         scoreOfUser: score
//     }


//     records.push(record);

//     // var a = records[0];
//     // var b = records[1];



//     records.sort(function(a, b) {
//       return b.scoreOfUser -a.scoreOfUser;
//     });
//     records.splice(5)

// localStorage.setItem('records', JSON.stringify(records));
// window.location.reload();
// })

// var clearInfo = function(){
//   localStorage.clear();
// }



// clearBtn.addEventListener('click', function () {
//   console.log("History is cleared")
//   localStorage.clear()
//   window.location.reload();
// })


//---API---///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const ApiKey = "a8116bf5225672746c89d4065105aff0"
const ApiLink = "http://www.omdbapi.com/?i=tt3896198&apikey=e2201392"

var requestUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=e2201392';
var responseText = document.getElementById('response-text');


var cityName = "manchester"

var CityRequest = function(){

  fetch(
      (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=a8116bf5225672746c89d4065105aff0`)

      )
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
        // RAW ARRAY
          console.log("RAW DATA" , data);
          //City Name
          console.log("City: " , data.name)
          document.querySelector('.cityName').append("CITY: "+ data.name);
          //City Temp
          console.log("Weather: " , data.main.temp + "°C")
          document.querySelector('.cityTemp').append("TEMP: " + data.main.temp + "°C");
          // City Wind
          console.log("Wind:   " , data.wind.speed +  " MPH")
          document.querySelector('.cityWind').append("Wind:   " , data.wind.speed +  " MPH");
          // City humidity
          console.log("Weather: " , data.main.humidity) 
          document.querySelector('.cityHumidity').append("Weather: " , data.main.humidity , "%");
          
          
            
      }
          

      
      )}
  //temp  wind  humidity  uv index


console.log("running CityRequest function")
CityRequest()
