const img = document.querySelector('img');
window.onload(refresh());

async function refresh() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=F2I3Za0vGpA7VnYZUw4QcQiaOQ09xGhD&s=puppies', {mode: 'cors'})
  const dogData = await response.json();
  img.src = dogData.data.images.original.url;
}

function clicked() {
  refresh();
}
