//creo l'oggetto costante per avere i mesi e la loro lunghezza
const mesiDellAnno={
        mesi:["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio",
             "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        lunghMesi:[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }
let oggi= new Date();
//prendi la data di oggi e usala per settare il mese di inizio (globale)  
let giorno=new Date();
//CREAZIONE DEI TD DELLA GRIGLIA all'onload
function CreaLaGriglia() {
    let giornidelMeseCorrente=document.getElementById("giorniDelMese");
    let myTabella="";
    for (let i = 0; i < 6; i++) {
        myTabella+="<tr>";
        for (let i = 0; i < 7; i++) {
            myTabella+="<td></td>";
        }
    myTabella+="</tr>";   
    }
    giornidelMeseCorrente.innerHTML=myTabella;
    CreaQuestoMese();
}

//ABBINAMENTO DEI GIORNI DEL MESE AL POSTO DELLA GRIGLIA
function CreaQuestoMese(){
    //devo usare .getDate() per avere il giorno della settimana del primo del mese    
    giorno.setDate(1);
    let meseCorrente=giorno.getMonth();
    let giorno1= giorno.getDay();
    //creo un'array di caselle
    let caselleTabella= document.querySelectorAll("td");
    for (let i = 0; i < mesiDellAnno.lunghMesi[meseCorrente]; i++) {
        caselleTabella[giorno1+i].innerHTML=`${i+1}`;
    }
    document.getElementById("meseAttuale").innerHTML=`${mesiDellAnno.mesi[meseCorrente]} - 
    ${giorno.getFullYear()}`;
}

function CambioMese(modificaMese){
    //eliminare il mese corrente, per fare spazio a quello nuovo
    let caselleTabella= document.querySelectorAll("td");
    for (let i = 0; i < caselleTabella.length; i++) {
        caselleTabella[i].innerHTML="";
    }
    //per aumentare o diminuire di 1 la posizione del mese, aggiungi nell'HTML 
    // un parametro per cambiare entrambi
    giorno.setMonth(giorno.getMonth()+ modificaMese);
    CreaQuestoMese();
}


