const img = document.querySelector('img');
window.onload(refresh());

function refresh() {
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=F2I3Za0vGpA7VnYZUw4QcQiaOQ09xGhD&s=dogs', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
}


function clicked() {
  alert('clicked');
  refresh();
}
