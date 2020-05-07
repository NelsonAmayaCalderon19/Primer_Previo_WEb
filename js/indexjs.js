$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

 $(document).ready(function(){
        $('#contactar').click(function(){
          re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
var porId=document.getElementById("email").value;
         if($('#nombre').val()==""){
          document.getElementById("nombre").focus();
                alert("Debes Ingresar tu Nombre ");               
                return false;
            }else if($('#mail').val()==""){
              document.getElementById("mail").focus();
                alert("Debes Ingresar Email");               
                return false;
            }
             else if(!re.exec(porId)){
                document.getElementById("mail").focus();
        alert("Email No Valido");
        return false;
            }else if($('#campo').val()==""){
              document.getElementById("campo").focus();
                alert("Debes Ingresar un Mensaje");               
                return false;
            }
});

        $('#registrar').click(function(){
          re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
var porId=document.getElementById("email").value;
         if($('#completo').val()==""){
          document.getElementById("completo").focus();
                alert("Debes Ingresar tu Nombre Completo");               
                return false;
            }else if($('#dir').val()==""){
              document.getElementById("dir").focus();
                alert("Debes Ingresar tu Direccion");               
                return false;
            }else if($('#email').val()==""){
              document.getElementById("email").focus();
                alert("Debes Ingresar tu Email");               
                return false;
            }
            else if(!re.exec(porId)){
                document.getElementById("email").focus();
        alert("Email No Valido");
        return false;
            }
            else if($('#tel').val()==""){
              document.getElementById("tel").focus();
                alert("Debes Ingresar tu Telefono");               
                return false;
            }
            else if($('#pass1').val()==""){
              document.getElementById("pass1").focus();
                alert("Debes Ingresar la Password");               
                return false;
            }
  
            else if($('#pass2').val()==""){
              document.getElementById("pass2").focus();
                alert("Debes Confirmar la password");               
                return false;
            }
            else if($('#pass1').val().length < 6){
              document.getElementById("pass1").focus();
                alert("La password debe tener minimo 6 Caracteres");               
                return false;
            }
            else if($('#pass2').val().length < 6){
              document.getElementById("pass2").focus();
                alert("La password debe tener minimo 6 Caracteres");               
                return false;
            }
});

    });