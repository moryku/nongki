let mymap = L.map('mapid', { zoomControl: false }).setView([-7.956251, 112.613429], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: '',
  maxZoom: 20,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiaWZpa2FyaWZpbiIsImEiOiJjamxndm83cTQwZjYwM3BvMHBma3dndGJqIn0.6LyWJiWv-yvp7mNPbyebYA'
}).addTo(mymap);

let arr_marker = [
  [-7.952448, 112.613766, 'Lapangan Rektorat'],
  [-7.953521, 112.614646, 'Fakultas Ilmu Komputer'],
  [-7.953564, 112.613766, 'Fakultas Kedokteran'],
  [-7.956251, 112.613429, 'Gerbang Veteran UB'],
  [-7.956573, 112.618356, 'Malang Town Square']
];
// mymap.panTo(new L.LatLng(-7.953521, 112.614646));
// mymap.panTo(new L.LatLng(-7.956573, 112.618356));

let marker = [];
for (i = 0; i < arr_marker.length; i++) {
  marker[i] = L.marker([arr_marker[i][0], arr_marker[i][1]]).addTo(mymap);
  marker[i].bindPopup(arr_marker[i][2]);
}