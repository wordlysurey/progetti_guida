let http = require("http");
let fs = require("fs"); //file sistem posso fare quello che voglio anche eliminare tutti i file

http.createServer((req, res)=>{

    res.setHeader('Content-Type', 'text/html') //server per fare vedere tutti i nostri dati come interpretazione html
    //res.write("<strong>BENVENUTO</strong>");
    let contenutoFile = fs.readFileSync("./index.html")
    res.end(contenutoFile);

}).listen("3000")