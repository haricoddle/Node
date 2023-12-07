let i = 1;
fetch('http://localhost:3000/accessories/dispAll').then((res) => datass = res.json()).then((data) => {
  const recivedData = data.result;
  console.log(recivedData);
  recivedData.forEach((recivedData) => {
    const markup = `<div class = "items" id = "item${i}">
                        <p>Accessory id-${recivedData.accessory_id}</p>
                        <p>Part name:- ${recivedData.name}</p>
                        <p>Price:- ${recivedData.price}</p>
                        <p>Stock:- ${recivedData.stock}</p>
                        <img src="http://localhost:3000/profile/${recivedData.image_url}" alt="">
                        <button class = "button" id = "button${i}">Add to cart</button>
                        </div>`;
    document.querySelector('section').insertAdjacentHTML('beforeend', markup);

    if (`${recivedData.stock}` <= 0) {
      const insertData = '<p class = "stock-p"> PROUDCT OUT OF STOCK </p>';
      document.getElementById(`item${i}`).insertAdjacentHTML('beforeend', insertData);
    }

    document.getElementById(`button${i}`).addEventListener('click', (e) => {
      e.preventDefault;
      console.log(`${recivedData.id}`);
      let data = { customer_id: 115, product_id: `${recivedData.id}`, quantity: 1};
      fetch('http://localhost:3000/cart/addToCart', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEwLCJ1c2VybmFtZSI6ImJlY2sxMCIsImlhdCI6MTcwMTg0MDc0Nn0.plGt6M-t6jXRVUDSSBYh76FXz-F5v-Py-6ci26K3vTs'},
        body: JSON.stringify(data)
      }).then(response => response.json()).catch(error => console.log(error));
    })
    i++;
  });
}).catch(error => console.log(error));
