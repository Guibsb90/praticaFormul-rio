$(document).ready(function(){

$('#telefone').mask('(00)0000 0000');
$('#cep').mask('00000000');
$('#cpf').mask('00000000000');
$('form').validate({
    rules: {
        nome:{
            required:true
        }, 
        email:{
            required:true,
            email:true,
        },
        telefone:{
            required:true
        }
    },
    messages:{
        nome:'Por favor, insira seu nome',
        telefone:'Por favor, insira seu telefone',
        email: 'Por favor, insira seu email'
    }, 
    submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
        console.log(camposIncorretos)
        if(camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})

});
