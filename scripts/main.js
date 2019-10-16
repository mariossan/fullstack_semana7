let nombre  = "asd"

const title = document.querySelector("h1")

title.addEventListener("click", function(){
    console.log("mariossan1");
    title.textContent = "Adios";
});

console.log("mafiossan3")


// ahora vamos a ver promesas

let saldo = 0

let prom = new Promise( function(resolve, reject) {
    setTimeout(function(){
        saldo = 0
        if ( saldo > 0 )
            resolve( saldo )
        else 
            reject(0)
    }, 1000)
})


prom
    .then(function(saldo){
        console.log(`$ ${ saldo }`)
    })
    .catch(function() {
        console.error(`Lero lero no hay dinero`)
    })