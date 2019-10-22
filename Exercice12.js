let carte = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(carte);


function updateMap(ville){
    carte.remove();
    if(ville.value ==="londre"){
        carte = L.map('mapid').setView([51.505, -0.09], 13);

    }else if(ville.value ==="paris"){
        carte = L.map('mapid').setView([48.8534, 2.3488], 13);

    }else if(ville.value ==="chambéry"){
        carte = L.map('mapid').setView([45.564601, 5.917781], 13);

    }
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(carte);
}