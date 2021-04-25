$(document).ready(function(){
    $("button").click(function(){
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var fecha = $('#fecha').val();
        var cadena = nombre + "\n" + apellido + " \n" + fecha
        console.log(cadena);
    });

    $(function () {
        $("#fecha").datepicker();
    });
});