navMainu(); 

function navMainu() {
    let nav = new XMLHttpRequest();

    nav.open("GET", "pages/nav.html");
    nav.send();
    nav.onload = ()=> document.getElementById("nav").innerHTML = nav.responseText;

    let leftmainu = new XMLHttpRequest();

    leftmainu.open("GET", "pages/leftmainu.html");
    leftmainu.send();
    leftmainu.onload = ()=> document.getElementById("leftmainu").innerHTML = leftmainu.responseText;

    let deshboard = new XMLHttpRequest();

    deshboard.open("GET", "pages/deshboard.html");
    deshboard.send();
    deshboard.onload = ()=> document.getElementById("deshboard").innerHTML = deshboard.responseText;
}

function create(){
    let create = new XMLHttpRequest();

    create.open("GET", "../login/ragistation.html");
    create.send();
    create.onload = ()=> document.getElementById("mainScreen").innerHTML = create.responseText;
}
function downline(){
    let tree = new XMLHttpRequest();

    tree.open("GET", "pages/tree.html");
    tree.send();
    tree.onload = ()=> document.getElementById("mainScreen").innerHTML = tree.responseText;
}

