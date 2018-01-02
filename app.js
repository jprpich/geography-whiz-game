var random = Math.floor((Math.random() * 195) + 1);
var points = 0
var win = 50

function checkWin(){
  if(points===win){
    alert("Geography Wiz! You Win! Refresh Page to play again")
  }
}

$.ajax({
  url: "https://ajayakv-rest-countries-v1.p.mashape.com/rest/v1/all",
  headers: {
    'X-Mashape-Key': 'HCh5RFVp0KmshugX35vYkV92V7prp1u1M4NjsnTttGhU6Gluan',
    'Accept': 'application/json'
  }
}).done(function(data){
  $("#game").text(data[random].name)
  console.log("The name of the Country is " + data[random].name)
  console.log("The capital of the Country is " + data[random].capital)
  console.log("The region of the Country is " + data[random].region)
  console.log("The sub region of the Country is " + data[random].subregion)
  console.log("In Spanish you say " + data[random].translations.es)

  data_name = data[random].name
  data_capital = data[random].capital
  data_region = data[random].region
  data_subregion = data[random].subregion
  data_spanish = data[random].translations.es

})

var input_name = $("#name") 
var input_capital = $("#capital")
var input_region = $("#region")
var input_subregion = $("#subregion")
var input_spanish = $("#spanish")

var counter = 0
input_name.on("keypress", function(e){
  if(e.which === 13 && counter === 0){
    if(input_name.val() === data_name) {
      alert("Good Answer! You just won 10 points!")
      points += 10
      counter ++;
    }
    checkWin()
  }
})

input_capital.on("keypress", function(e){
  if(e.which === 13 && counter === 1){
    if(input_capital.val() === data_capital) {
      alert("Good Answer! You just won 10 points!")
      points += 10
      counter ++;
    }
    checkWin()
  }
})

input_region.on("keypress", function(e){
  if(e.which === 13 && counter === 2){
    if(input_region.val() === data_region) {
      alert("Good Answer! You just won 10 points!")
      points += 10
      counter ++;
    }
    checkWin()
  }
})

input_subregion.on("keypress", function(e){
  if(e.which === 13 && counter === 3){
    if(input_subregion.val() === data_subregion) {
      alert("Good Answer! You just won 10 points!")
      points += 10
      counter ++;
    }
    checkWin()
  }
})

input_spanish.on("keypress", function(e){
  if(e.which === 13 && counter === 4){
    if(input_spanish.val() === data_spanish) {
      alert("Good Answer! You just won 10 points!")
      points += 10
      counter ++;
    }
    checkWin()
  }
})








