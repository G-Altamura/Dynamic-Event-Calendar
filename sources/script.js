

// let anno=date.getFullYear();
// let mese=date.getMonth();
// let mesiDellAnno = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
// let questoMese = document.getElementById("meseCorrente");

// let settimana=new Date;
// let giorno= settimana.getDay()
// document.getElementById("giornoDellaSettimana").innerHTML =giorno;

//CREAZIONE DEI TD DELLA GRIGLIA
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
    creaQuestoMese();
}

//ABBINAMENTO DEI GIORNI DEL MESE AL POSTO DELLA GRIGLIA
function creaQuestoMese(){
    let mesiDellAnno={
        mesi:["Gen", "Feb", "Mar", "Apr", "Mag",
             "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        lunghMesi:[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }
    //prendi la data di oggi e usala per settare il mese di inizio
    let oggi= new Date();
    //devo usare .getDate() per avere il giorno della settimana del primo del mese    
    oggi.setDate(1);
    let meseCorrente=oggi.getMonth();
    let giorno1= oggi.getDay();
    //creo un'array di caselle
    let caselleTabella= document.querySelectorAll("td");
    for (let i = 0; i < mesiDellAnno.lunghMesi[meseCorrente]; i++) {
        caselleTabella[giorno1+i].innerHTML=`${i+1}`;
    }
}


