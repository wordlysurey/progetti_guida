const express = require('express');
const app = express();
const port = 3000;

//ejs serve per mettere della variabili nel html
// views la cartella dove ci sono gli html
//senza require

app.set('views', './views');  //costante e poi una cartella che dice dove si trovano i file html
app.set('view engine', 'ejs') //scrive l'engine che ho deciso di utilizzare

//i file non devono avere .html ma deve essere .ejs e dentro c'è codice html

//nel middlware uso res.render() al posto di .sendFile

//npm install ejs dentro la cartella

app.get('/', (req,res) =>{
    
    res.render("index", {
        data: "07-01-2024"
    }); // come primo parametro metto il nome del file da inviare il secondo sono i parametro che voglio passare
})


// avvia il server e scrive questo
app.listen(port, ()=>{
    console.log("Server in funzione");
})