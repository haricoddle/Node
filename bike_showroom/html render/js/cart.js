var j =1
fetch('http://localhost:3000/cart/newShow?customer_id=115', {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEwLCJ1c2VybmFtZSI6ImJlY2sxMCIsImlhdCI6MTcwMTg0MDc0Nn0.plGt6M-t6jXRVUDSSBYh76FXz-F5v-Py-6ci26K3vTs'},
}).then(res => {
  return datass = res.json();
}).then(data => {
  const recivedData = data.data;
  console.log(recivedData)
  recivedData.forEach(recivedData => {
    const markup = `<div class = "cart-items" id = "cart-item${j}">
                        <p>cart-id:- ${recivedData.id}</p>
                        <p>Type:- ${recivedData.type}</p>
                        <img src="http://localhost:3000/profile/${recivedData.image_url}" alt="">
                        <div class="button-div">
                        <button class = "inc" id = "increment${j}"> + </button>
                        <p> ${recivedData.quantity} </p>
                        <button class = "dec" id = "decrement${j}"> - </button>
                        </div>
                        <p> -: ${recivedData.price}/item</p>

                        </div>`;
    document.getElementById('cart').insertAdjacentHTML('beforeend', markup);

    document.getElementById(`increment${j}`).addEventListener('click', (e) => {
      e.preventDefault;
      const cartId = recivedData.id;
      fetch(`http://localhost:3000/cart/adddQuantity?id=${cartId}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEwLCJ1c2VybmFtZSI6ImJlY2sxMCIsImlhdCI6MTcwMTg0MDc0Nn0.plGt6M-t6jXRVUDSSBYh76FXz-F5v-Py-6ci26K3vTs'},
      }).then(res => {
        return datass = res.json();
      }).then(data => {
        const recivedData = data.data;
        console.log(recivedData);
      }).catch(error => console.log(error));
    });

    document.getElementById(`decrement${j}`).addEventListener('click', (e) => {
      e.preventDefault;
      const cartId = recivedData.id;
      fetch(`http://localhost:3000/cart/deleteeQuantity?id=${cartId}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEwLCJ1c2VybmFtZSI6ImJlY2sxMCIsImlhdCI6MTcwMTg0MDc0Nn0.plGt6M-t6jXRVUDSSBYh76FXz-F5v-Py-6ci26K3vTs'},
      }).then(res => {
        return datass = res.json();
      }).then(data => {
        const recivedData = data.data;
        console.log(recivedData);
      }).catch(error => console.log(error));
    });
    j++
  });
}).catch(error => console.log(error));
