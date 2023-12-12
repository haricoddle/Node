const type = document.getElementById('type').value;
const model = document.getElementById('model').value;
const cc = document.getElementById('cc').value;
const price = document.getElementById('price').value;
const color = document.getElementById('color').value;

document.getElementById('button').addEventListener('click', (e) => {
  e.preventDefault();
  console.log(type, model, cc, price, color);
});
