$(function () {

    $("#dialogEliminar").dialog({
        auto0pen: false,
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