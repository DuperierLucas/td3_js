document.getElementById('body').innerHTML = "<form>" +
    "<fieldset> <legend>Un formulaire</legend>" +
    "<label>Saisi un montant en Euro</label>" +
    "<input class='euro' type='number' name='Euro'></br>" +
    "<h1 id='resultat_euro'></h1></br>" +

    "<label>Saisi un montant en Franc</label>" +
    "<input class='franc' type='number' name='Franc'></br>" +
    "<h1 id='resultat_franc'></h1></br>" +

    "<input onclick='testChamp()' type='button' value='Test'>" +
    "</fieldset>" +
    "</form>"

function testChamp(){
    let element = document.getElementsByClassName('euro')[0].value;
    element = parseFloat(element);
    if(!isNaN(element)){
        document.getElementById('resultat_euro').innerHTML=" "+(element*6.5799).toFixed(2);
    }else{
        document.getElementById('resultat_euro').innerHTML="";
    }


    element = document.getElementsByClassName('franc')[0].value;
    element = parseFloat(element);

    if(!isNaN(element)){
        document.getElementById('resultat_franc').innerHTML=" "+(element/6.5799).toFixed(2);
    }else{
        document.getElementById('resultat_franc').innerHTML="";
    }

}