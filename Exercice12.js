document.getElementById("body").innerHTML = '' +
    '<select onchange="updateMap(this)">\n' +
    '    <option value="londre" selected>Londre</option>\n' +    //Menu déroulant pour le choix de la ville
    '    <option value="paris">Paris</option>\n' +
    '    <option value="chambéry">Chambéry</option>\n' +
    '</select>' +
    '<div id="mapid"></div>'  //Emplacement pour la carte



let carte = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'   //Affichage de la carte et initialisation
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