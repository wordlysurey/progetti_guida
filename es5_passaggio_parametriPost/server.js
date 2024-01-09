let express = require("express")
let app = express()

const cors = require("cors")

app.use(cors());
app.options('*', cors()) //così accetto tutte le richieste del client


app.use(express.json());
app.use(express.urlencode({ //lo faccio solo se uso express
    extended:true
})); 

// req.body.nomParam per recuperare i parametri