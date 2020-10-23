$(function () {

    $("#dialogEliminar").dialog({
        autoOpen: false,
        modal: true,
        buttons:{
                 "Acepto": function () {
                     alert ("Eliminando");
            },
             Cancel: function () {
                    console.log("nissdnef");
                }
            }
    });

    $(".btn-eliminar").on("click", function () {

        $("#dialogEliminar").dialog("open");
    })

})