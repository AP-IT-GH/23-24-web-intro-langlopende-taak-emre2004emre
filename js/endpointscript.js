let map = L.map('apMap').setView([51.0628, 4.3601], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// bepaal de rechthoek rondom Willebroek
let bounds = [[51.0728, 4.3401], [51.0528, 4.3801]];
// kleur de rechthoek in met een blauwe kleur
L.rectangle(bounds, {color: "#0000FF", weight: 1}).addTo(map);
// plaats een marker met als tekst "Willebroek" en eronder "Egmont en Hoornestraat 1"
let newMarker = L.marker([51.0628, 4.3601]).addTo(map);
newMarker.bindPopup("<b>Willebroek").openPopup();
