const map = L.map('map').setView([52.0907, 5.1214], 8);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{

    maxZoom:19,

    attribution:'© OpenStreetMap'

}).addTo(map);

L.marker([52.0907,5.1214])

.addTo(map)

.bindPopup("Welkom bij VeloQuest 🚴")

.openPopup();
