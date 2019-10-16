const service = {
    login: function(user, password) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                // login esta hecho
                if (user === "example" && password === "1234") {
                    const account = {
                        user,
                        password,
                        name: "hola"
                    }
                    resolve({ success: true, account })
                } else {
                    reject({ code: 404, msg: "Usuario incorrecto" })
                }
            },1000)
        })
        // setInterval
    },
    getUsers: function() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve([
                    {
                        user: "example",
                        password: "1234",
                        name: "Ejemplo",
                        edad: 32
                    },
                    {
                        user: "test",
                        password: "4321",
                        name: "Prueba",
                        edad: 18
                    },
                    {
                        user: "test1",
                        password: "43211",
                        name: "Mariossan",
                        edad: 21
                    },
                    {
                        user: "test2",
                        password: "43212",
                        name: "Escom",
                        edad: 19
                    },
                    {
                        user: "test3",
                        password: "43213",
                        name: "Prueba de request",
                        edad: 30
                    },

                ])
            }, 5500)
        })
    }
}
