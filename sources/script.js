let Agenda={};
//creo l'oggetto costante per avere i mesi e la loro lunghezza
const mesiDellAnno={
        mesi:["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio",
             "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        lunghMesi:[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }
let oggi= new Date();

//prendi la data di oggi e usala per settare il mese di inizio (globale)  
let giorno=new Date();
//allacciamo la form al js
let form=document.getElementById("contatto");

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

//ABBINAMENTO DEI GIORNI DEL MESE CORRENTE
//GIORNO DEVE ESSERE SOVRASCRITTO
function CreaQuestoMese(){
    //devo usare .getDate() per avere il giorno della settimana del primo del mese    
    giorno.setDate(1);
    let meseCorrente=giorno.getMonth();
    let giorno1= giorno.getDay();
    //creo un'array di caselle
    let caselleTabella= document.querySelectorAll("td");
    for (let i = 0; i < mesiDellAnno.lunghMesi[meseCorrente]; i++) {
        caselleTabella[giorno1+i].innerHTML=`${i+1}`;
        //ora le caselle sono abbinate alla loro data
        let giornoX=`${giorno.getFullYear()}-`+`${giorno.getMonth()+1}`.padStart(2, '0')+
        `-`+`${i+1}`.padStart(2, '0');
    }
    document.getElementById("meseAttuale").innerHTML=`${mesiDellAnno.mesi[meseCorrente]} - 
    ${giorno.getFullYear()}`;
    if(oggi.getFullYear()===giorno.getFullYear() && oggi.getMonth()===giorno.getMonth()){
       caselleTabella[oggi.getDate()-1+giorno1].style.backgroundColor=`cadetblue`;
    }
}
//I BOTTONI FANNO AVANZARE E RETROCEDERE IL CALENDARIO
function CambioMese(modificaMese){
    //eliminare il mese corrente, per fare spazio a quello nuovo
    let caselleTabella= document.querySelectorAll("td");
    for (let i = 0; i < caselleTabella.length; i++) {
        caselleTabella[i].innerHTML="";
        caselleTabella[i].style.backgroundColor=`white`;
    }
    //per aumentare o diminuire di 1 la posizione del mese, aggiungi nell'HTML 
    // un parametro per cambiare entrambi
    giorno.setMonth(giorno.getMonth()+ modificaMese);
    CreaQuestoMese();
}

//QUI VA IL FORM CHE SI ABBINA CON L'HTML
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let nome=document.getElementById("nome");
    let descrizione=document.getElementById("descrizione");
    let data=document.getElementById("data");
    let orario=document.getElementById("orario");
    //ORA DEVO ABBINARE LE INFORMAZIONI SULLO STESSO EVENTO
    AggiungiUnImpegno(nome.value, descrizione.value, data.value, orario.value);
    nome.value="";
    descrizione.value="";
    data.value="";
    orario.value="";
})

//PER ABBINARE L'IMPEGNO AL SUO GIORNO
function AggiungiUnImpegno(nome, descrizione, data, orario){
    let pagina = {};
    let entry = {descrizione:descrizione, orario:orario};
    
    if (data in Agenda){
            //i e nome_temp sono delle temporanee per essere sicuri che Agenda non
            //sovrascriva impegni lo stesso giorno e potenzialmente lo stesso nome
            let i=1;
            let nome_temp=nome;
            pagina = Agenda[data];
            while (nome_temp in pagina) {
                nome_temp=`${nome}(${i++})`;
            }
            nome=nome_temp;
    }
    pagina[nome]=entry;
    Agenda[data] = pagina;
    console.log(Agenda);
    // if(data.valueAsNumber===giorno.toISOString().split("T")[0])
}

//Agenda['2026-02-26']['MugiBugi'].orario