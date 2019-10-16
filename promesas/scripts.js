// service
//     .login("example", "123s4")
//     .then( response => { 
//         console.log(response)
//         console.log(user)
//     })
//     .catch( () => console.log("el login fué erroneo") );


const button = document.getElementById("login_button");
button.addEventListener("click", function(e){

    let usuarioInput    = document.querySelector("input[type='text']").value
    let usuarioPasswd    = document.querySelector("input[type='password']").value

    if ( usuarioPasswd.length > 0 && usuarioInput.length > 0 ) {
        // se hace login con el servicio que ahora tenemos
        service.login( usuarioInput, usuarioPasswd )
        .then( response => console.log("El usuario se encontró", response))
        .catch( response => console.log("Usuario no encontrado", response) )
    } else {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Ingrese datos dentro de login',
            // footer: '<a href>Why do I have this issue?</a>'
          })
    }
})


service.getUsers()
.then(users => {

    console.log(users)

    var tabla =  document.getElementById("usuariosBody");
    if ( users.length > 0 && typeof users === "object" ) {
        tabla.innerHTML = "";
        for( user in users ) {
            let tr = document.createElement("tr")
            
            let td = document.createElement("td")
            td.innerHTML = users[user].user
            tr.appendChild(td)

            td = document.createElement("td")
            td.innerHTML = users[user].name
            tr.appendChild(td)

            td = document.createElement("td")
            td.innerHTML = users[user].edad
            tr.appendChild(td)

            tabla.appendChild( tr )
        }
    }
})
.catch((err) => {
    console.log(err) 
    return
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'No podemos obtener usuarios :(',
        // footer: '<a href>Why do I have this issue?</a>'
      })
})