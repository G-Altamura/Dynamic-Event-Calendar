

// let anno=date.getFullYear();
// let mese=date.getMonth();
// let mesiDellAnno = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
// let questoMese = document.getElementById("meseCorrente");

// let settimana=new Date;
// let giorno= settimana.getDay()
// document.getElementById("giornoDellaSettimana").innerHTML =giorno;

function creaQuestoMese(){
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
}
