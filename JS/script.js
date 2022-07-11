// fetch("http://www.boredapi.com/api/activity/")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (err) {
//     console.error(err);
//   });


function getFunFactData() {
  fetch("https://asli-fun-fact-api.herokuapp.com/")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var funFact = data.data.fact
      var funFactEl = document.querySelector('#fact')
      funFactEl.innerText = `Fun Fact: ${funFact}`
      console.log(data.data.fact)
    })

}
getFunFactData()



function getPokemonData() {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var poke = JSON.stringify(data.results[19].name)
      var pokeEl = document.querySelector('#pokemon')
      
      // console.log(data.results[19].name)
      var random = data.results[Math.floor(Math.random()*data.results.length)];
      pokeEl.innerText = `Pokemon: ${random.name}`
      console.log(random.name)

    })

}

getPokemonData();



function getExcuseData() {
  fetch("https://excuser.herokuapp.com/v1/excuse/college/4")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var excuse = data[3].excuse
      var excuseEl = document.querySelector('#excuse')
      excuseEl.innerText = `Excuse: ${excuse}`
      // console.log(data[3].excuse)
    })

}

getExcuseData();



function getTriviaData() {
  fetch("https://the-trivia-api.com/api/questions?limit=20")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var triviaQuestion = data[19].question
      var triviaAnswer = data[19].correctAnswer
      var triviaEl = document.querySelector('#question')
      triviaEl.innerText = `Trivia: ${triviaQuestion} Answer: ${triviaAnswer}`
      console.log(data[19].question)
      console.log(data[19].correctAnswer)
    })

}

getTriviaData();      