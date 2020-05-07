 $('.modal').fadeOut();
	$('#abrir_modal').click(function(e){
e.preventDefault();
$('.modal').fadeIn();
	});
function closeModal(){
	$('.modal').fadeOut();
 
}
function closeModal2(){
  var mensaje=document.getElementById("cuerpo_mensaje").value;
  if(mensaje==""){
            document.getElementById("cuerpo_mensaje").focus();
                alertify.alert("Advertencia!","No puede ir Vacío el Mensaje");               
                return false;
            }else{
  toastr.options = {
  "debug": false,
  "positionClass": "toast-bottom-right",
  "onclick": null,
  "fadeIn": 400,
  "fadeOut": 150,
  "timeOut": 1500,
  "extendedTimeOut": 1500
}
  $('.modal').fadeOut();
  toastr.success('Tu Mensaje se Envió Exitosamente', 'Mensaje Enviado');
setTimeout( function(){document.form_add_product.submit();} ,1200 );  
}
}