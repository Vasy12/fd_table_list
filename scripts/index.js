'use strict'

const userInput = prompt()
alert(`your input: ${userInput}`)

const sum = (...rest) => rest.reduce((total, item) => total + item, 0)
