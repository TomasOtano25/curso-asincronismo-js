
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hey!');
  }, 1000);
})

promise
  .then((res) => {
    console.log(res)
  })

// -------------------
const cows = 15; // vaca

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`)
  } else {
    reject('There is no cows on the farm')
  }
})

countCows
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('finally')
  })

