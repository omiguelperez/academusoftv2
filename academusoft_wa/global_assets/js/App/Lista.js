var Tabla = [];
var TablaMateriasmatricular = [];

$(document).ready(function () {
    ChargeName();
    /* swal({
        title: 'hecho',
        text: 'prueba',
        type: "success"
    }); */

    RenderTable('datatable-Example', [0, 1, 2, 3], null, {
        "paging": false,
        "ordering": false,
        "info": false,
        "searching": false
    });
    Tabla = $('#datatable-Example').DataTable();

    RenderTable('datatable-Materias-matricular', [0, 1, 2, 3], null, {
        "paging": false,
        "ordering": false,
        "info": false,
        "searching": false
    });
    TablaMateriasmatricular = $('#datatable-Materias-matricular').DataTable();

    getMat();
    getMateriasmatricular();
});


async function getMat() 
{
    ShowLoading()
    let token = localStorage.getItem("token")
    let response = await fetch(api+'api/courses/enrolled/',
      {
          method:'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': "Token " + token
          }});
  let data = await response.json()
  CargarTabla(data)
}

async function getMateriasmatricular() {

    ShowLoading()
    let token = localStorage.getItem("token")
    let response = await fetch(api+'api/courses/by_enrolling/',
      {
          method:'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': "Token " + token
          }
      });
  let data = await response.json()
  CargarTablaMateriasmatricular(data)
}

async function getHorario(code, name) 
{

    let token = localStorage.getItem("token")
    //http://localhost:8000/api/courses/ed5d2bb1-9b19-446d-b856-669bdf0945ea/groups/
    let response = await fetch(api+'api/courses/'+code+'/groups/',
    {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token
        }
    });
    let data = await response.json()
    ModalHorarios(data,name)
    //AsignarAsignatura(data[0].id);
}

function CargarTabla(dataObj) {
    DataExample = dataObj;
    Tabla.destroy();
    RenderTable('datatable-Example', [0, 1, 2, 3], [
        { data: 'code', className: "text-center" },
        { data: 'name', className: "text-center" },
        { data: 'credits', className: "text-center"},
        { data: 'group', className: "text-center", render: function (data, type, row, meta) {
            return '<a onclick="RetirarAsignatura(\'' + row.group + '\')" title="Retirar"><i class="icon-forward3 text-blue-400"></i></a>';
            }
        }
    ], {
        data: dataObj,
        "paging": false,
        "ordering": false,
        "info": false,
        "searching": false
    });
    Tabla = $('#datatable-Example').DataTable();
    CloseLoading()
}

function CargarTablaMateriasmatricular(dataObj) {
    TablaMateriasmatricular.destroy();
    RenderTable('datatable-Materias-matricular', [0, 1, 2, 3], [
        { data: 'id', className: "text-center", render: function (data, type, row, meta) {
            return '<a onclick="getHorario(\'' + row.id + '\',\'' + row.name + '\')" title="Asignar"><i class="icon-backward2 text-blue-400"></i></a>';
            }
        },
        { data: 'code', className: "text-center" },
        { data: 'name', className: "text-center" },
        { data: 'credits', className: "text-center"}
    ], {
        data: dataObj,
        "paging": false,
        "ordering": false,
        "info": false,
        "searching": false
    });
    TablaMateriasmatricular = $('#datatable-Materias-matricular').DataTable();
    console.log(dataObj);
    CloseLoading()
}


async function RetirarAsignatura(code) 
{
    ShowLoading()
    let token = localStorage.getItem("token")
    let data = {
        group: code
    }
    let response = await fetch(api+'api/courses/unenroll/',
    {
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token
        }
    })
    /* let dataObj = await response.json()
    console.log(dataObj) */
    
    swal({
        title: 'retirado',
        text: 'retirado con exito',
        type: "success"
    });
    getMat();
    getMateriasmatricular();
}

async function AsignarAsignatura(code) 
{
    
    console.log(code)
    CloseModalBox();
    ShowLoading()
    let token = localStorage.getItem("token")
    let data = {
        group: code
    }
    let response = await fetch(api+'api/courses/enroll/',
    {
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token
        }
    })
    /* let dataObj = await response.json()
    console.log(dataObj) */
    CloseLoading();
    swal({
        title: 'asignada',
        text: 'asignado con exito',
        type: "success"
    });
    getMat();
    getMateriasmatricular();
    
}


function ModalHorarios(data,name) {
    ShowLoading()
    console.log(data)

    var TablaHistorico = []
    var formulario = "";
    formulario += ' <div class="table-responsive  col-xl-12 " style="margin-top:5%">';
    formulario += '    <table class="table" id="datatable-HistoricoPagos" border="1" style="border-left-color:black">';
    formulario += '        <thead>';
    formulario += '            <tr class="ColorTabla" style="border:solid">';
    formulario += '                <th class="text-center">Grupo</th>';
    formulario += '                <th class="text-center">Lunes</th>';
    formulario += '                <th class="text-center">Martes</th>';
    formulario += '                <th class="text-center">Miercoles</th>';
    formulario += '                <th class="text-center">Jueves</th>';
    formulario += '                <th class="text-center">Viernes</th>';
    formulario += '                <th class="text-center">Sabado</th>';
    formulario += '            </tr>';
    formulario += '        </thead>';
    formulario += '    </table>';
    formulario += ' </div>';



    var botones = "<button id='event_cancel' onclick='CloseModalBox()' type='button' class='btn btn-default btn-label-left'>CANCELAR</button>&ensp;";
    OpenModalBox('Horarios - ' + name, formulario, botones, "navbar-dark", "modal-lg", "margin-top", "40px");
    var Ancho = [{ className: "text-center" }, { className: "text-center" }, { className: "text-right" }, { className: "text-center" }, { className: "text-center" }, { className: "text-center" }];
    RenderTable('datatable-HistoricoPagos', [0, 1, 2, 3, 4, 5], [
        { data: 'name', className: "text-center" },
        { data: 'name', className: "text-center" ,
            render: function (data, type, row, meta) {
                let horario = "";

                if (row.week_day == "monday") {
                    horario = `<a href="javascript:AsignarAsignatura('${row.id}')">${row.start_time + ":00" + "-" + row.end_time + ":00"}</a>`
                }
                return horario;
            }
            },
        { data: 'name', className: "text-center",
            render: function (data, type, row, meta) {
                let horario = "";

                if (row.week_day == "tuesday") {
                    horario = `<a href="javascript:AsignarAsignatura('${row.id}')">${row.start_time + ":00" + "-" + row.end_time + ":00"}</a>`
                }
                return horario;
            }
            },
        { data: 'name', className: "text-center" ,
            render: function (data, type, row, meta) {
                let horario = "";

                if (row.week_day == "wednesday") {
                    horario = `<a href="javascript:AsignarAsignatura('${row.id}')">${row.start_time + ":00" + "-" + row.end_time + ":00"}</a>`
                }
                return horario;
            }
            },
        { data: 'name', className: "text-center", render: function (data, type, row, meta) {
                let horario = "";

                if (row.week_day == "thursday") {
                    horario = `<a href="javascript:AsignarAsignatura('${row.id}')">${row.start_time + ":00" + "-" + row.end_time + ":00"}</a>`
                }
                return horario;
            }
            },
        { data: 'name', className: "text-center", render: function (data, type, row, meta) {
                let horario = "";

                if (row.week_day == "friday") {
                    horario = `<a href="javascript:AsignarAsignatura('${row.id}')">${row.start_time + ":00" + "-" + row.end_time + ":00"}</a>`
                }
                return horario;
            }
            },
        { data: 'name', className: "text-center" ,render: function (data, type, row, meta) {
                let horario = "";

                if (row.week_day == "saturday") {
                    horario = `<a href="javascript:AsignarAsignatura('${row.id}')">${row.start_time + ":00" + "-" + row.end_time + ":00"}</a>`
                }
                return horario;
            }
            },

    ], {
        data: data,
        "paging": true,
        "ordering": false,
        "info": true,
        "searching": true

    });
    TablaHistorico = $('#datatable-HistoricoPagos').DataTable();
    CloseLoading()
}