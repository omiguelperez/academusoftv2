

function Get_DataPost(callbacksussces, Url) {
	var form_data = new FormData();
	var Obj = { UserName: DataUser.UserName, Password: DataUser.Password };
	var formURL = SetUrlForQuery(Url);
	$.ajax( //con json
		{
			url: formURL,
			type: "POST",
			dataType: "json",
			data: JSON.stringify(Obj),
			contentType: "application/json",
			processData: false,
			success: function (data, textStatus, jqXHR) {
				if (!data.Is_Error) {
					callbacksussces(data)
				} else {
					SwalErrorMsj(data);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});

}

function Del_DataPost(callbacksussces, Url) {
	swal({
		title: "Atención",
		text: "¿Estas seguro de eliminar este registro?",
		type: "warning",
		showCancelButton: true,
		confirmButtonClass: "btn-danger",
		confirmButtonText: "Si",
		cancelButtonText: "No",
		closeOnConfirm: false,
		closeOnCancel: false
	},
		function (isConfirm) {
			if (isConfirm) {
				var form_data = new FormData();
				var Obj = {};

				var formURL = SetUrlForQuery(Url);

				$.ajax( //con json
					{
						url: formURL,
						type: "POST",
						dataType: "json",
						data: JSON.stringify(Obj),
						contentType: "application/json",
						processData: false,
						success: function (data, textStatus, jqXHR) {
							swal.close()
							if (!data.Is_Error) {
								callbacksussces(data)
							} else {
								SwalErrorMsj(data);
							}
						},
						error: function (jqXHR, textStatus, errorThrown) {
							console.log(errorThrown);
						}
					});
			}
			else {
				swal.close()
			}
		});
}

function Save_DataPost(callbacksussces, Url, ObjPost, TituTiruloMsj, IrInicio, RecargarTabla, callbacksusscesTabla) {
	var form_data = new FormData();
	var formURL = SetUrlForQuery(Url);

	$.ajax( //con json
		{
			url: formURL,
			type: "POST",
			dataType: "json",
			data: JSON.stringify(ObjPost),
			contentType: "application/json" /*"application/x-www-form-urlencoded; charset=UTF-8"*/, /*application/json*/
			processData: false,
			success: function (data, textStatus, jqXHR) {
				CloseLoading();
				if (!data.Is_Error) {
					if (IrInicio) {
						swal({
							title: TituloMsj,
							text: data.Msj,
							type: "success"
						},
							function (isConfirm) {
								if (isConfirm) {
									window.location.href = SetUrlForQueryLocal("/Home")
								}
							});



					}
					else {
						swal({
							title: TituloMsj,
							text: data.Msj,
							type: "success"
						},
							function (isConfirm) {
								if (isConfirm) {
									if (RecargarTabla)
										callbacksusscesTabla
									else
										window.location.reload(true);
								}
							});
					}
					if (callbacksussces != null) {

						callbacksussces(data);
					}
				} else {
					swal({
						title: "Atención",
						text: data.Msj,
						//confirmButtonColor: "#ab2328",
						type: "error",
						closeOnConfirm: true,
					});


				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});

}



function Get_DataPost(callbacksussces, Url, ParametroString, IsCargandoOn, callbackerror) {

	var form_data = new FormData();
	var Obj = { UserName: DataUser.UserName, Password: DataUser.Password, Telefono: ParametroString, IdUser: DataUser.IdUser };

	var formURL = SetUrlForQuery(Url + "?Parametro=" + ParametroString);

	$.ajax( //con json
		{
			url: formURL,
			type: "POST",
			dataType: "json",
			data: JSON.stringify(Obj),
			contentType: "application/json",
			processData: false,
			success: function (data, textStatus, jqXHR) {
				if (!data.Is_Error) {
					callbacksussces(data)
				} else {
					if (IsCargandoOn)
						CloseLoading();
					SwalErrorMsj(data);
					callbackerror(data)


				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});

}

function Get_DataGet(callbacksussces, Url, ParametroString, IsCargandoOn, callbackerror) {

	var form_data = new FormData();
	var Obj = { UserName: DataUser.UserName, Password: DataUser.Password, Telefono: ParametroString, IdUser: DataUser.IdUser };

	var formURL = SetUrlForQuery(Url + "?Parametro=" + ParametroString);

	$.ajax( //con json
		{
			url: formURL,
			type: "GET",
			dataType: "json",
			data: JSON.stringify(Obj),
			contentType: "application/json",
			processData: false,
			success: function (data, textStatus, jqXHR) {
				if (!data.Is_Error) {
					callbacksussces(data)
				} else {
					if (IsCargandoOn)
						CloseLoading();
					SwalErrorMsj(data);


				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});

}

function Get_DataGetOpti(callbacksussces, Url, Parametro, ParametroString, IsCargandoOn, callbackerror) {
	var form_data = new FormData();
	var Obj = { UserName: DataUser.UserName, Password: DataUser.Password, Telefono: ParametroString, IdUser: DataUser.IdUser };
	var formURL = SetUrlForQuery(Url + "?" + Parametro + "=" + ParametroString);
	$.ajax( //con json
		{
			url: formURL,
			type: "GET",
			dataType: "json",
			data: JSON.stringify(Obj),
			contentType: "application/json",
			processData: false,
			success: function (data, textStatus, jqXHR) {
				if (!data.Is_Error) {
					callbacksussces(data)
				} else {
					if (IsCargandoOn)
						CloseLoading();
					SwalErrorMsj(data);


				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});

}

function Get_DataPostObj(callbacksussces, Url, Obj) {

	var form_data = new FormData();


	var formURL = SetUrlForQuery(Url);

	$.ajax( //con json
		{
			url: formURL,
			type: "POST",
			dataType: "json",
			data: JSON.stringify(Obj),
			contentType: "application/json",
			processData: false,
			success: function (data, textStatus, jqXHR) {
				if (!data.Is_Error) {
					callbacksussces(data)
				} else {

					SwalErrorMsj(data);
					callbackerror(data)


				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});

}



