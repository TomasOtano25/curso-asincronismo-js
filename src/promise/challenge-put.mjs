import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function putData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  return response
}

const id = 229;
const url = `${API}/products/${id}`

const data = {
  title: "New Product Course 2",
  price: 777,
}

putData(url, data)
  .then(response => response.json())
  .then(data => console.log(data))