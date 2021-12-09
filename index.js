var express = require("express");
var apiServer = express(); 

console.log("Funziona");
var a = 5;
var b = "3";
console.log(a+b);

var port=3000;
var host="localhost";
apiServer.listen(port, host, ()=>{
    console.log("server running at http://%s:%d", host, port);
});

apiServer.get("/", (request, response)=>{
    console.log("richiesta GET /", request);
    response.send("<h1>Ciao client sei in home</h1>");
});

var cognome = "Hu";
apiServer.get("/nome", (request, response)=>{
    console.log("richiesta GET /nome");
    response.send("Ciao, il mio cognome è: "+cognome);
});

apiServer.get("/mioNome", (request, response)=>{
    console.log("richiesta GET /mioNome", request.query);
    response.send('Ciao, il tuo nome è: ' + request.query.nome);
});

apiServer.get("/somma", (request, response)=>{
    console.log("request somma", request.query);
    var a=parseInt(request.query.a);
    var b=parseInt(request.query.b);
    response.send('Risultato: ' + (a+b));
});