import './style.css'

const form = document.querySelector('form');
form.addEventListener('submit',async (e) => {
e.preventDefault();
const data = new FormData(form);
console.log(data.get('prompt'));
const response = await fetch("http://localhost:8080/dream",{
  method : 'POST',
  headers : {
    'Content-Type': 'application/json',
  },
  
  body : JSON.stringify({
    prompt: data.get('prompt'),
  })
})
const {image} = await response.json();
const results = document.querySelector('#result');
console.log(image[0])
results.innerHTML = `<img src="${image[0]}"/>`;
});
