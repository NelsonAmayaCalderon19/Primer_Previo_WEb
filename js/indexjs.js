$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

 $(document).ready(function(){
        $('#contactar').click(function(){
         if($('#nombre').val()==""){
          document.getElementById("nombre").focus();
                alert("Debes Ingresar tu Usuario ");               
                return false;
            }else if($('#mail').val()==""){
              document.getElementById("mail").focus();
                alert("Debes Ingresar Email");               
                return false;
            }else if($('#campo').val()==""){
              document.getElementById("campo").focus();
                alert("Debes Ingresar un Mensaje");               
                return false;
            }
});
    });