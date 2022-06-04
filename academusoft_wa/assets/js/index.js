async function postLogin()
{
    ShowLoading()
    let data = {
        username: document.getElementById("user").value,
        password: document.getElementById("pass").value
    }
    let response = await fetch('http://3.140.151.8:8000/api/obtain-auth-token/',
        {method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }})

        console.log(response)
        let dataObj = await response.json()
        login(dataObj, data)
}


function login(dataRes, dataUser) {
    console.log(dataRes)
    if(dataRes.token){
        localStorage.setItem("token", dataRes.token)
        localStorage.setItem("User", dataUser.username)

        window.location.href = "menu/menu.html"
    }
    CloseLoading()
}


function OpenModalBoxId(idmodal) {
    var modal2 = $("#" + idmodal);
    modal2.modal("show");
    modal2.on('hide.bs.modal', function (e) { return e });
}

function CloseModalBoxId(idmodal) {
    var modal2 = $("#" + idmodal);
    setTimeout(function () {
        modal2.modal("hide");
    }, 500);
}

function ShowLoading() {
    OpenModalBoxId("pleaseWaitDialog");
}

function CloseLoading() {
    CloseModalBoxId("pleaseWaitDialog");
}