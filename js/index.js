showRagistationIndax();
function showRagistationIndax(){
    let ragistation = new XMLHttpRequest();

    ragistation.open("GET", "login/ragistation.html");
    ragistation.send();
    ragistation.onload = ()=> document.getElementById("showForms").innerHTML = ragistation.responseText;
}

function showLogin(){
    let login = new XMLHttpRequest();

    login.open("GET", "login/login.html");
    login.send();
    login.onload = ()=> document.getElementById("showForms").innerHTML = login.responseText;
}
function showRagistation(){
    let login = new XMLHttpRequest();

    login.open("GET", "login/ragistation.html");
    login.send();
    login.onload = ()=> document.getElementById("showForms").innerHTML = login.responseText;
}