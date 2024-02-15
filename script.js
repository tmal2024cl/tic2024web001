document.getElementById("bloque1").addEventListener("mouseover", function() {
  var currentDate = new Date();
  alert("Fecha actual: 8 de Febrero del 2024 ");
});

var bloque2 = document.querySelector(".bloque2");

bloque2.addEventListener("mouseover", function() {
  bloque2.style.backgroundColor = getRandomColor();
});

bloque2.addEventListener("mouseout", function() {
  bloque2.style.backgroundColor = "gray";
});

function mostrarCreditos() {
  alert("Autor: Tais Araujo Lara [nº6 y 2ºB]");
}

function ocultarBloque1() {
  document.getElementById("bloque1").style.display = "none";
}

function mostrarBloque1() {
  document.getElementById("bloque1").style.display = "block";
}

function cambiarColor() {
  var bloque1 = document.getElementById("bloque1");
  var currentColor = bloque1.style.backgroundColor;
  var newColor = getRandomColor();
  bloque1.style.backgroundColor = newColor;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitud = position.coords.latitude;
      var longitud = position.coords.longitude;
      alert("Tu ubicación actual es: Latitud " + latitud + ", Longitud " + longitud);
    });
  } else {
    alert("Geolocalización no es soportada por tu navegador.");
  }
}
function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitud = position.coords.latitude;
      var longitud = position.coords.longitude;
      mostrarInformacion(latitud, longitud);
      mostrarMapa(latitud, longitud);
    });
  } else {
    alert("Geolocalización es soportada por tu navegador.");
  }
}

function mostrarInformacion(latitud, longitud) {
  var info = document.getElementById("info");
  info.innerHTML =  "Latitud " + latitud + ",Longitud " + longitud;
}

function mostrarMapa(latitud, longitud) {
  var map = L.map('map').setView([latitud, longitud], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([latitud, longitud]).addTo(map)
    .bindPopup('Tu ubicación actual').openPopup();
}