function fetchData(urlApi) {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);

    xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          resolve(JSON.parse(xhttp.responseText))
        } else {
          const error = new Error('Error' + urlApi)
          return reject(error);
        }
      }
    }
    xhttp.send();
  })
}