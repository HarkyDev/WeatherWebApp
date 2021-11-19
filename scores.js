var score = localStorage.getItem('score');
var userInput = document.getElementById("userInput")
var submitBtn = document.getElementById("submitBtn")
var clearBtn = document.getElementById("clearBtn")
var playAgain = document.getElementById("playAgain")
let records = JSON.parse(localStorage.getItem('records'));

const myList = document.getElementById('my-list');

window.addEventListener('DOMContentLoaded', function() {
    if (!records) {
        records = []
    };

    for (let i = 0; i < records.length; i++) {
          let newListItem = document.createElement('button');
    newListItem.textContent = records[i].nameOfUser ;
    myList.appendChild(newListItem)
    }
})

console.log(records);


var form = document.querySelector('.form')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var userInputData = userInput.value.trim();
    var record = {
        nameOfUser: userInputData,
        scoreOfUser: score
    }


    records.push(record);

    // var a = records[0];
    // var b = records[1];



    records.sort(function(a, b) {
      return b.scoreOfUser -a.scoreOfUser;
    });
    records.splice(5)

localStorage.setItem('records', JSON.stringify(records));
window.location.reload();
})

var clearInfo = function(){
  localStorage.clear();
}



clearBtn.addEventListener('click', function () {
  console.log("History is cleared")
  localStorage.clear()
  window.location.reload();
})