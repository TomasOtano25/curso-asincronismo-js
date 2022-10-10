import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  return response
}

const url = `${API}/products`

const data = {
  title: "New Product Course",
  price: 999,
  description: "A description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"]
}

postData(url, data)
  .then(response => response.json())
  .then(data => console.log(data))