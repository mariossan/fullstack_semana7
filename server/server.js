const http          = require("http")
const verduras      = require("./verduras")
const aderezos      = require("./aderezos")
const condimentos   = require("./condimentos")
const frutas        = require("./frutas")

const server = http.createServer(function(request, response) {
   switch (request.url) {
       case "/verduras":
           response.write(verduras.toString())
           break
       case "/condimentos":
           response.write(condimentos.toString())
           break
       case "/frutas":
           response.write(frutas.toString())
           break
       case "/aderezos":
           response.write(aderezos.toString())
           break
       default:
           response.write("no has seleccionado ninguno")
           break
   }
   response.end()
})
server.listen(8080)