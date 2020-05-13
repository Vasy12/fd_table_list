'use strict'

const userInput = prompt()
alert(`your input: ${userInput}`)

const sum = (...rest) => rest.reduce((total, item) => total + item, 0)
fetch('./users.json')
  .then(response => response.json())
  .then(console.log)
  .catch(console.error)
(function () {
  console.log("TEST");
})()
