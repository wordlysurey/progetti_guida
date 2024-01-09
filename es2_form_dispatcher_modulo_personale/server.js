import http from "http"
import {somma, sottrazione} from "./mioModulo.js"
import querystring from "url"

http.createServer((req, res)=>{

    let parametro = querystring.parse(req.url, true)
    let operazione = parametro.query.operazioni

    let num1 = parseInt(parametro.query.num1)
    let num2 = parseInt(parametro.query.num2)

    switch (operazione) {
        case "somma":
            res.end(somma(num1,num2).toString())
            break;
        case "sott":
            res.end(sottrazione(num1,num2).toString())
            break;
    
        default:
            break;
    }
    
    
}).listen("3000")