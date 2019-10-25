document.getElementById('body').innerHTML = "<nav>" +
        "<ol>" +
            "<li onmouseover='survole(this)' onmouseout='out(this)'>Accueil</li>" +
            "<li onmouseover='survole(this)' onmouseout='out(this)'>Liens</li>" +
            "<li onmouseover='survole(this)' onmouseout='out(this)'>Livre d'or</li>" +
            "<li onmouseover='survole(this)' onmouseout='out(this)'>E-mail</li>" +
        "</ol>" +
    "</nav>"
   let li = document.getElementsByTagName('li');

for(let i=0;i<li.length;i++){

    li[i].onmouseover=function(){this.style.fontSize="20px"};
    li[i].onmouseout=function(){this.style.fontSize=""};
}
// OU ///

// function survole(e){
//     e.style.fontSize = "20px";
// }
// function out(e){
//     e.style.fontSize = "";
// }