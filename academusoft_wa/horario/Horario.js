var TablaHorarios = [];

$(document).ready(function () {
    ChargeName();
    RenderTable('datatable-Horario', [0, 1, 2, 3, 4, 5], null, {
        "paging": false,
        "ordering": false,
        "info": false,
        "searching": false
    });
    TablaHorarios = $('#datatable-Horario').DataTable();

    getHorarios();
});

async function getHorarios() 
{
    ShowLoading()
    let token = localStorage.getItem("token")
    let response1 = await fetch(api+'api/schedule/',
    {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token
        }});
    let data1 = await response1.json()
    CargarTabla(data1)
}

function CargarTabla(dataObj) {
    TablaHorarios.destroy();
    RenderTable('datatable-Horario', [0, 1, 2, 3, 4, 5], [
        { data: 'course_name', className: "text-center" },
        { data: 'name', className: "text-center" ,
            render: function (data, type, row, meta) {
                let horario = "";

                if (row.week_day == "monday") {
                    horario = `<div class="col-12" >${row.name}</div>
                                <span >${row.start_time + ":00" + "-" + row.end_time + ":00"}</span>`
                }
                return horario;
            }
            },
        { data: 'name', className: "text-center",
            render: function (data, type, row, meta) {
                let horario = "";

                if (row.week_day == "tuesday") {
                    horario = `<span >${row.start_time + ":00" + "-" + row.end_time + ":00"}</span>`
                }
                return horario;
            }
            },
        { data: 'name', className: "text-center" ,
            render: function (data, type, row, meta) {
                let horario = "";

                if (row.week_day == "wednesday") {
                    horario = `<span >${row.start_time + ":00" + "-" + row.end_time + ":00"}</span>`
                }
                return horario;
            }
            },
        { data: 'name', className: "text-center", render: function (data, type, row, meta) {
                let horario = "";

                if (row.week_day == "thursday") {
                    horario = `<span >${row.start_time + ":00" + "-" + row.end_time + ":00"}</span>`
                }
                return horario;
            }
            },
        { data: 'name', className: "text-center", render: function (data, type, row, meta) {
                let horario = "";

                if (row.week_day == "friday") {
                    horario = `<span >${row.start_time + ":00" + "-" + row.end_time + ":00"}</span>`
                }
                return horario;
            }
            },
        { data: 'name', className: "text-center" ,render: function (data, type, row, meta) {
                let horario = "";

                if (row.week_day == "saturday") {
                    horario = `<span >${row.start_time + ":00" + "-" + row.end_time + ":00"}</span>`
                }
                return horario;
            }
            },
    ], {
        data: dataObj,
        "paging": false,
        "ordering": false,
        "info": false,
        "searching": false
    });
    TablaHorarios = $('#datatable-Horario').DataTable();
    CloseLoading()
}