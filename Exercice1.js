document.getElementById('body').innerHTML = '' +
    '<textarea id="area"> </textarea> <input id="text" type="text"> </br>' +
    '<input value="RAZ" onclick="raz()" type="button"> <input onclick="longueur()" value="Longueur" type="button">'

function raz(){
    document.getElementById("area").value="";
    document.getElementById("text").value="";
}
function longueur(){
    let longueur = document.getElementById("area").value;
    document.getElementById("text").value=longueur.length;
}