// operaciones matematicas

function sum(num1, num2) {
  return num1 + num2;
}

function res(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2)
}


const suma = calc(4, 5, sum)
console.log(`Suma: ${suma}`)
console.log("-------------------")
const resta = calc(4, 5, res)
console.log(`Resta: ${resta}`)
console.log("-------------------")
const multiplicacion = calc(4, 5, mul)
console.log(`Multi: ${multiplicacion}`)
console.log("-------------------")
const division = calc(4, 5, div)
console.log(`Divi: ${division}`)

// ----------------
// setTimeout
// ----------------

setTimeout(() => {
  console.log('Hola JavaScript')
}, 2000)

function greeting(name) {
  console.log(`Hola ${name}`)
}

setTimeout(greeting, 2000, 'Tomas')