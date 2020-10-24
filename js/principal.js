    $(function () {

        var celulares = [
            "LG", "SAMSUNG", "iPhone", "HUAWEI"
        ]

        for (let i = 0; i < celulares.length; i++) {
            const cell = celulares[i];
            console.log(cell);
            $("#lista-celulares").append(`
                <li>

                    ${cell}
                    <a href="#" class="btn-eliminar">Eliminar</a>

                </li>
            `);
        }

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

      $("#lista-celulares").on("click", ".btn-eliminar", function () {
        $("#dialogEliminar").dialog("open");
      })

    })