var dataRef = new Firebase('https://barbearia-67000-default-rtdb.firebaseio.com/');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'barbeiro') {

            var _itemsKey = Object.entries(valor);
       
            for (const [key2, value2] of _itemsKey) {

                count++;
    
                $("#tbbarbeiros tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
    
                        <td>${value2.telefone}</td> +
    
                        <td>${value2.email}</td> +
                        
                        <td>${value2.cpf}</td> +
                        
                        <td>${value2.endereco}</td> +
                        
                        <td>${value2.numero}</td> +
                        
                        <td>${value2.profissao}</td> +
          
                    </tr>`
    
                );
    
            }
        }


    }

});
