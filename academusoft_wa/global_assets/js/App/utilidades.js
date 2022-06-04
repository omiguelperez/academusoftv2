var api = 'http://3.140.151.8:8000/'

$(document).ready(function () {
    //asdflkjasdf.
    ValidateSession();
});

function CloseSession(){
    if(localStorage.getItem("User")){
        localStorage.removeItem("token")
        localStorage.removeItem("User")
        window.location.href = "../index.html"
    }
}

function ValidateSession(){
     if(!localStorage.getItem("token")){
        window.location.href = "../index.html"
    }
}

function ChargeName(){
    let name = localStorage.getItem("User")
    /* let name = 'Alberto' */
    if(name){
        document.getElementById("userName").innerText = name;
        document.getElementById("letterName").innerText = name.toString().substr(0,1).toUpperCase();
    }
}


function getApi(){
    return api;
}


var sizeModal = "";
// Permite escojer las fechas en los calendarios
var seleccionFecha = {
    labelMonthNext: 'Ir al siguiente mes',
    labelMonthPrev: 'Ir al mes anterior',
    labelMonthSelect: 'Seleccionar mes',
    labelYearSelect: 'Seleccionar año',
    labelDaySelect: 'aqui',
    klass: {
        navPrev: '',
        navNext: '',
    },

    selectMonths: true,
    selectYears: 100,
    min: new Date(1800, 1, 1),
    today: 'Hoy',
    close: 'Cerrar',
    clear: '',

    onSet: function (context) {
        if (context.select != undefined) {
            var date = new Date(context.select);
            var formatdate = formatDate(date);
            $(this.$node).val(formatdate).trigger("change");
        } else {
            var date2 = new Date(parseInt("" + context.highlight[0]), parseInt("" + context.highlight[1]), parseInt("" + context.highlight[2]));
            var formatdate2 = formatDate(date2);
            $(this.$node).val(formatdate2).trigger("change");
        }
    }
}

function SwalErrorMsj(data) {
    CloseModalBox();
    swal({
        title: "¡Error!",
        text: data.Msj,
        //confirmButtonColor: "#ab2328",
        type: "error",
        closeOnConfirm: true,
    });
}
var seleccionFechaApartirdeHoy = {
    labelMonthNext: 'Ir al siguiente mes',
    labelMonthPrev: 'Ir al mes anterior',
    labelMonthSelect: 'Seleccionar mes',
    labelYearSelect: 'Seleccionar año',
    klass: {
        navPrev: '',
        navNext: '',
    },

    selectMonths: true,
    selectYears: 100,
    min: new Date(),
    today: 'Hoy',
    close: 'Cerrar',
    clear: '',
    onSet: function (context) {
        if (context.select != undefined) {
            var date = new Date(context.select);
            var formatdate = formatDate(date);
            $(this.$node).val(formatdate).trigger("change");
        } else {
            var date2 = new Date(parseInt("" + context.highlight[0]), parseInt("" + context.highlight[1]), parseInt("" + context.highlight[2]));
            var formatdate2 = formatDate(date2);
            $(this.$node).val(formatdate2).trigger("change");
        }
    }
}

var seleccionFechaHastaHoy = {
    labelMonthNext: 'Ir al siguiente mes',
    labelMonthPrev: 'Ir al mes anterior',
    labelMonthSelect: 'Seleccionar mes',
    labelYearSelect: 'Seleccionar año',
    klass: {
        navPrev: '',
        navNext: '',
    },

    selectMonths: true,
    selectYears: 100,
    max: new Date(),
    today: 'Hoy',
    close: 'Cerrar',
    clear: '',
    onSet: function (context) {
        if (context.select != undefined) {
            var date = new Date(context.select);
            var formatdate = formatDate(date);
            $(this.$node).val(formatdate).trigger("change");
        } else {
            var date = new Date(parseInt("" + context.highlight[0]), parseInt("" + context.highlight[1]), parseInt("" + context.highlight[2]));
            var formatdate = formatDate(date);
            $(this.$node).val(formatdate).trigger("change");
        }
    }
}

function NDate(cadena, withtime) {
    var d = new Date();
    if (cadena != undefined)
        d = new Date(cadena);
    if (withtime == false || withtime == undefined || withtime == "")
        d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
    return d;
}

function NDateR(cadena) {
    var d = new Date();
    if (cadena != undefined)
        d = new Date(cadena);
    return d;
}

function OpenModalBox(titulo, body, botones, headerBg, sizeclass, nombPropiedad, valPropiedad, stmodal, IsRecibo) {
    var modal = $("#modalBox");
    if (IsRecibo)
        $("#WordModal").addClass("AnchoModalRecibo");
    modal.find(".modal-dialog").attr("class", "modal-dialog");

    if (sizeclass != undefined && sizeclass != null) {
        modal.find(".modal-dialog").addClass(sizeclass);
        sizeModal = sizeclass;
    }

    modal.find(".titulo").html(titulo);

    modal.find(".modal-body").html(body);

    modal.find(".modal-footer").html("<div  class=' ' >" + botones + "</div>");

    if (headerBg != undefined && headerBg != null)
        modal.find(".modal-header").addClass(headerBg);

    if (nombPropiedad != undefined && nombPropiedad != null && valPropiedad != undefined && valPropiedad != null)
        modal.find(".modal-dialog").css(nombPropiedad, valPropiedad);

    modal.on('hide.bs.modal', function (e) { return e });
    if (stmodal != undefined) {
        modal.modal({
            backdrop: stmodal.backdrop,
            keyboard: stmodal.keyboard,
            show: true
        });
    } else {
        modal.modal({
            backdrop: true,
            keyboard: false,
            show: true
        });
    }
}

function OpenModalBoxAux(titulo, body, botones, headerBg, sizeclass, nombPropiedad, valPropiedad, stmodal) {
    var modal = $("#modalBoxAux");
    modal.find(".modal-dialog").attr("class", "modal-dialog");

    if (sizeclass != undefined && sizeclass != null) {
        modal.find(".modal-dialog").addClass(sizeclass);
        sizeModal = sizeclass;
    }

    modal.find(".modal-title").html(titulo);

    modal.find(".modal-body").html(body);

    modal.find(".modal-footer").html("<div  class=' ' >" + botones + "</div>");

    if (headerBg != undefined && headerBg != null)
        modal.find(".modal-header").addClass(headerBg);

    if (nombPropiedad != undefined && nombPropiedad != null && valPropiedad != undefined && valPropiedad != null)
        modal.find(".modal-dialog").css(nombPropiedad, valPropiedad);

    modal.on('hide.bs.modal', function (e) { return e });
    if (stmodal != undefined) {
        modal.modal({
            backdrop: stmodal.backdrop,
            keyboard: stmodal.keyboard,
            show: true
        });
    } else {
        modal.modal({
            backdrop: true,
            keyboard: false,
            show: true
        });
    }
}

function OpenModalBoxId(idmodal) {
    var modal2 = $("#" + idmodal);
    modal2.modal("show");
    modal2.on('hide.bs.modal', function (e) { return e });
}

function ShowLoading() {
    OpenModalBoxId("pleaseWaitDialog");
}

function CloseLoading() {
    CloseModalBoxId("pleaseWaitDialog");
}





function CloseModalBox() {
    var modal = $("#modalBox");
    setTimeout(function () {
        modal.modal("hide");
    }, 1000);

}
function CloseModalBoxAux() {
    var modal = $("#modalBoxAux");
    setTimeout(function () {
        modal.modal("hide");
    }, 1000);

}
function CloseModalBoxId(idmodal) {
    var modal2 = $("#" + idmodal);
    setTimeout(function () {
        modal2.modal("hide");
    }, 500);
}

function ShowError(error) {
    $("#msj").html(error);
}

function Validador(idform, rules, mensajes) {
    if (mensajes == undefined)
        mensajes = []
    var validator = $("#" + idform).validate({
        lang: "ES",
        ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
        errorElement: 'span',
        errorPlacement: function (error, element) {
            error.addClass('invalid-feedback');
            element.closest('.form-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
        },
        rules: rules,
        messages: mensajes
    });
    return validator;
}

function ConfirmationModal(config, ajaxobj, elseconfirm) {
    swal({
        title: config.title,
        text: config.body,
        type: config.tipo,
        showCancelButton: true,
        confirmButtonColor: "#EF5350",
        confirmButtonText: "Si",
        cancelButtonText: "No",
        closeOnConfirm: false,
        closeOnCancel: true
    },
        function (isConfirm) {
            if (isConfirm) {
                $.ajax(ajaxobj);
            } else {
                if (elseconfirm != undefined)
                    elseconfirm();
            }
        });
}

function RenderTable(id, ncol, anchoColum, parametros, orden) {

    $.extend($.fn.dataTable.defaults, {
        columnDefs: [{
            targets: ncol,
            orderable: false
        }],
        "columns": anchoColum,
        autoWidth: false,
        "ordering": false,
        order: orden,
        //dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
        language: {
            search: 'Buscar: _INPUT_',
            lengthMenu: 'Mostrar: _MENU_ ',
            paginate: {
                first: 'Primero',
                last: 'Último',
                next: '&rarr;',
                previous: '&larr;'
            },

            zeroRecords: "No se encontraron resultados",
            emptyTable: "Ningún dato disponible en esta tabla",
            info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            infoEmpty: "Ningún dato disponible",
            infoFiltered: "(filtrado de un total de _MAX_ registros)",
            infoPostFix: "",
            infoThousands: ",",
            loadingRecords: "Cargando...",
            aria: {
                sortAscending: ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        }
    });

    if (parametros != null && parametros != undefined) {
        $('#' + id).DataTable(parametros);
    } else {
        // Basic datatable
        $('#' + id).DataTable();
    }

    //// Alternative pagination
    //$('.datatable-pagination').DataTable({
    //    pagingType: "simple",
    //    language: {
    //        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    //    }
    //});


    // Datatable with saving state
    $('.datatable-save-state').DataTable({
        stateSave: true
    });


    // Scrollable datatable
    $('.datatable-scroll-y').DataTable({
        autoWidth: true,
        scrollY: 300
    });

    // External table additions
    // ------------------------------

    // Add placeholder to the datatable filter option
    $('.dataTables_filter input[type=search]').attr('placeholder', 'Búsqueda...');


    // Enable Select2 select for the length option
    $('.dataTables_length select').select2({
        minimumResultsForSearch: Infinity,
        width: 'auto'
    });

}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function AddRowsDataTable(id, data) {
    var table = $('#datatable-' + id).DataTable();
    table.row.add(data).draw(false);
    table.columns.adjust().draw();
}

function ClearDataTable(id) {
    var table = $('#datatable-' + id).DataTable();
    table.clear().draw();
}

function LimpiarChecbox(idform, valor) {
    var Params = $("#" + idform);
    $.each(Params, function (index, item) {
        $.each(item, function (index2, item2) {
            var input = $("#" + item2.id);
            if (input.is(':checkbox')) {

                if (valor !== input.is(':checked')) {
                    input.trigger("click");
                }
            }
            else {
                input.val("").trigger("change");
            }
        });
    });
}

function LimpiarOnlyCheckBox(idChkBox, valor) {
    var input = $("#" + idChkBox);
    if (input.is(':checkbox')) {
        input.prop('checked', valor);
        if (input.checked) {
            input.parent().addClass("checked")
        } else {
            input.parent().removeClass("checked");
        }
    }
}

function limpiarFormulario(idform, camposexluidos) {
    var arrayexcluidas = [];
    if (camposexluidos != null && camposexluidos != undefined) {
        $.each(camposexluidos, function (index, item) {
            arrayexcluidas.push({ "key": item, value: $("#" + item).val() });
        });
    }
    var Hid2 = $('#Hid').val();
    $("#" + idform)[0].reset();
    LimpiarChecbox(idform, false);
    $('#Hid').val(Hid2);


    $.each(arrayexcluidas, function (index, item) {
        $("#" + item.key).val(item.value).trigger("change");
    });

}

function IsNotEmpty(param) {
    return param != null && param != undefined && param != ""
}

function formatDate(date) {
    var monthNames = [
        "01", "02", "03",
        "04", "05", "06", "07",
        "08", "09", "10",
        "11", "12"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return year + "-" + monthNames[monthIndex] + "-" + (day > 9 ? day : "0" + day);
}

function formatDateWithTime(date) {
    var monthNames = [
        "01", "02", "03",
        "04", "05", "06", "07",
        "08", "09", "10",
        "11", "12"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var min = date.getMinutes();
    return year + "-" + monthNames[monthIndex] + "-" + (day > 9 ? day : "0" + day) + " " + hours + ":" + min;
}

function Atras() {
    window.history.back();
}

function redondeaAlAlza(x, r) {
    x = x == "" ? 0 : x;
    xx = Math.trunc(x / r)
    xd = (x / r) - xx;
    if (xd >= 0.5)
        xx++;

    return (xx * r)
}

function JSONDateconverter(fecha, withtime, getjsdate, real) {
    var strdate = fecha.substr(6, fecha.length - 8);
    var myDate = "";
    if (real == true)
        myDate = NDateR(parseInt(strdate));
    else
        myDate = NDate(parseInt(strdate), withtime);
    if (getjsdate)
        return myDate;

    if (withtime)
        return formatDateWithTime(myDate);
    else
        return formatDate(myDate);
}

function stringMoneyFormat(value) {
    return '$ ' + value.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

}

function stringMoneyFormat2(value) {
    if (value == 0)
        return "$ 0";
    else
        return '$ ' + value.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

}

function stringFormatConPuntos(value) {
    if (value == 0)
        return "0";
    else
        return value.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

}

function formatMoneyToString(value) {
    return value.replace(/[^0123456789]/g, '');
}

function formatMoneyToNumber(value) {
    value = value.toString();
    if (value == "")
        value = "0";

    return parseFloat(value.replace(/[^0123456789]/g, ''));
}

function format(input) {
    var op = true;
    var num = input.value.replace(/[^0123456789]/g, '');
    num = redondeaAlAlza(num, 1000);
    if (!isNaN(num)) {
        if (num < 0) {
            op = false;
            num = num * -1;
        }
        input.value = stringMoneyFormat(num);
    }
    else {
        alert('Solo se permiten numeros');
        input.value = input.value.replace(/[^\d\.]*/g, '');
    }
}

function formatNum(input) {
    var op = true;
    var num = input.value.replace(/[^0123456789]/g, '');
    num = redondeaAlAlza(num, 1);
    if (!isNaN(num)) {
        if (num < 0) {
            op = false;
            num = num * -1;
        }
        input.value = stringFormatConPuntos(num);
    }
    else {
        alert('Solo se permiten numeros');
        input.value = input.value.replace(/[^\d\.]*/g, '');
    }
}

function soloNumeros(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "0123456789";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    //-/()¡=)(/&%$#¿?.;_:
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function groupBy(array, f) {
    var groups = {};
    array.forEach(function (o) {
        var group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
        return groups[group];
    })
}

function IrInicio() {
    window.location.href = "/home";
}

String.prototype.capitalize = function () {
    var cadenas = this.split(" ");
    var result = "";
    for (var i = 0; i < cadenas.length; i++) {
        result += cadenas[i].charAt(0).toUpperCase() + cadenas[i].slice(1).toLowerCase() + " ";
    }
    return result;
}

function VerPDF(tipo, id) {
    var formURL = '/Api/report?tipo=' + tipo + "&Id=" + id +"&IdUser="+DataUser.IdUser;
    window.open(formURL, "_blank");
}

function DescargarPDF(tipo, id) {
    var formURL = '/report?tipo=' + tipo + "&Id=" + id + "&View=true" + "&IdUser=" + DataUser.IdUser;
    window.open(formURL, "_black");
}


function sumarDias(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
}

function esconde_Clase(c) {
    var Sec = document.getElementsByClassName(c);
    for (var i = 0; i < Sec.length; i++) {
        Sec[i].style.display = "none";
    }
}

function visible_Clase(c) {
    var Sec = document.getElementsByClassName(c);
    for (var i = 0; i < Sec.length; i++) {
        Sec[i].style.display = "block";
    }
}

function visible_Clase_Inline(c) {
    var Sec = document.getElementsByClassName(c);
    for (var i = 0; i < Sec.length; i++) {
        Sec[i].style.display = "inline-block";
    }
}

function esconde_elemento(x) {
    var elemento = document.getElementById(x);
    elemento.style.display = 'none';
}

function visible_elemento(x) {
    var elemento = document.getElementById(x);
    elemento.style.display = 'block';
}

function visible_elemento_Inline(x) {
    var elemento = document.getElementById(x);
    elemento.style.display = 'inline-block';
}

function validarReload() {
    var T = $('.reloadValue').val();
    if (T == 1) {
        $('.reloadValue').val("")
        $('.reloadValue').css("display", "none");
    }
    else {
        $('.reloadValue').css("display", "blok");
        $('.reloadValue').val("1")
        location.reload();
    }
}

function ToTimeString(objtime) {
    var str = "";
    var hora = "";
    var min = "";
    var meridian = "AM";
    if (objtime.Hours > 11)
        meridian = "PM";
    if (objtime.Hours > 12)
        hora = objtime.Hours - 12 < 10 ? "0" + (objtime.Hours - 12) : "" + objtime.Hours - 12
    else
        hora = objtime.Hours < 10 ? "0" + (objtime.Hours) : "" + objtime.Hours

    min = objtime.Minutes < 10 ? "0" + objtime.Minutes : "" + objtime.Minutes

    return hora + ":" + min + " " + meridian;
}

function SetUrlForQuery(stringrelativeserver) {

    //if (stringrelativeserver !== undefined && stringrelativeserver !== ""){
    //    stringrelativeserver.substr(1, stringrelativeserver.length);
    //}
    return window.location.origin+"/Api" + stringrelativeserver;
}

function RecortarTexto(Valor, NumCar) {
    var NumOrg = Valor.length;
    var Texto = Valor.substr(0, NumCar);

    if (Texto.length != NumOrg)
        Texto += "...";

    return Texto;
}

function Get_Years(A1, A2, Id) {
    var fecha = new Date();
    var YearActual = parseInt(fecha.getFullYear());
    var ListaYear = [];

    for (var i = (YearActual); i < (YearActual + A2); i++) {
        ListaYear.push(i);
    }

    for (var i = YearActual; i >= (YearActual - A1); i--) {
        ListaYear.push(i);
    }

    ListaYear = ListaYear.sort(comparar);
    Set_Years(ListaYear, Id);
    return ListaYear;

}

function Set_Years(Lista, Id) {
    var html_rol = '';
    $.each(Lista, function (key, value) {
        html_rol += '<option value="' + value + '">' + value + '</option>';
    });
    $('#' + Id).html(html_rol);
    $('#' + Id).val("");
    $('#' + Id).select2();
}

function Get_Meses(Num, Id) {

    var ListaMesesString = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var html_rol = '';
    $.each(ListaMesesString, function (key, value) {
        if (key <= Num)
            html_rol += '<option value="' + value + '">' + value + '</option>';
    });

    $('#' + Id).html(html_rol);
    $('#' + Id).val("");
    $('#' + Id).select2();
}

function comparar(b, a) { return a - b; }

function fireMouseEvents(query, eventNames) {
    var element = document.querySelector(query);
    if (element && eventNames && eventNames.length) {
        for (var index in eventNames) {
            var eventName = eventNames[index];
            if (element.fireEvent) {
                element.fireEvent('on' + eventName);
            } else {
                var eventObject = document.createEvent('MouseEvents');
                eventObject.initEvent(eventName, true, false);
                element.dispatchEvent(eventObject);
            }
        }
    }
}

function FormatoConPuntosSinRedPA(input) {
    var num = input.value.replace(/\./g, '');
    if (num == "0") {
        var aux = parseInt(num, 0);
        num = aux;
    }
    var op = true;
    num = num == "" ? "0" : num.toString();
    num = num.replace(/[.]/gi, "");
    if (!isNaN(num)) {
        if (num < 0) {
            op = false;
            num = num * -1;
        }
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/, '');
        num = op ? num : "-" + num;
    } else {
        num = "0";
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
    }
    $("#" + input.id).val(num);
}

function setTwoNumberDecimal(input) {
    input.value = parseFloat(input.value == "" ? 0 : input.value).toFixed(2);
}

function setNumberDecimal(input, decimales) {
    input.value = parseFloat(input.value == "" ? 0 : input.value).toFixed(decimales);
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        };
    };
    return 0;
};

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function setCookieGeneral(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires +";path=/";
}

function getCookieGeneral(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(name) {
    setCookieGeneral(name, "", -1);
}

function PropagacionSubMenu() {


    $('.dropdown-submenu a.test').on("click", function (e) {

        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });



}

function SetUrlForQueryLocal(stringrelativeserver) {
    //if (stringrelativeserver !== undefined && stringrelativeserver !== ""){
    //    stringrelativeserver.substr(1, stringrelativeserver.length);
    //}
    return window.location.origin + stringrelativeserver;
}



function Visibility_Element(y) {
    var x = document.getElementById(y);
    x.style.visibility = 'visible';


}
function Visibility_Hidden(y) {
    var x = document.getElementById(y);
    x.style.visibility = 'hidden';

}






function soloNumerosYDecimal(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "0123456789.";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function ShowMaestroImagen(Imagen, Nombre) {
    var formulario = "";
    formulario += "   <div class='box-content'>";
    formulario += "      <div class='form-horizontal'>";

    formulario += "        <div class='form-group'>";
    formulario += '    <img src=\'' + Imagen + '\' width="100%" height="100%" />';
    formulario += "        </div>";




    formulario += "        <div class='text-center' id='div_msj'>";
    formulario += "            <p id='msj' style='color: red; font-size: 11px;'></p>";
    formulario += "        </div>";
    formulario += "        </div>";
    formulario += "        <input type='hidden' id='Hid' name='Hid' value=0 />";
    formulario += "    </div>";


    var id = '"form-modal"';
    var nombPropiedad = 'margin-top';
    var valPropiedad = '110px';

    var botones = "";

    OpenModalBox( Nombre , formulario, botones, "bg-warning-900", null, nombPropiedad, valPropiedad);

}
