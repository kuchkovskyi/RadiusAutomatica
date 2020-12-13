function openPage(evt, pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function chooseVariable(event, variableCompanyName) {
    var i, variablecompany, point;
    variablecompany = document.getElementsByClassName("variablecompany");
    for (i = 0; i < variablecompany.length; i++) {
        variablecompany[i].style.display = "none";
    }
    point = document.getElementsByClassName("point");
    for (i = 0; i < point.length; i++) {
        point[i].className = point[i].className.replace(" active", "");
    }
    document.getElementById(variableCompanyName).style.display = "block";
    event.currentTarget.className += " active";
}
document.getElementById("defaultOpenCompany").click();

function chooseVariableMesUrala(event, variableMesUralaName) {
    var i, variablemu, point;
    variablemu = document.getElementsByClassName("variable-m-u");
    for (i = 0; i < variablemu.length; i++) {
        variablemu[i].style.display = "none";
    }
    point = document.getElementsByClassName("point-m-u");
    for (i = 0; i < point.length; i++) {
        point[i].className = point[i].className.replace(" active", "");
    }
    document.getElementById(variableMesUralaName).style.display = "block";
    event.currentTarget.className += " active";
}
document.getElementById("defaultMesUralaOpen").click();

function chooseCpsVariable(event, variableCpsName) {
    var i, variablecps, pointCPS;
    variablecps = document.getElementsByClassName("variable-cps");
    for (i = 0; i < variablecps.length; i++) {
        variablecps[i].style.display = "none";
    }
    pointCPS = document.getElementsByClassName("point-c-m");
    for (i = 0; i < pointCPS.length; i++) {
        pointCPS[i].className = pointCPS[i].className.replace(" active", "");
    }
    document.getElementById(variableCpsName).style.display = "block";
    event.currentTarget.className += " active";
}
document.getElementById("defaultCPSOpen").click();

function chooseNewsVariable(event, variableRza) {
    var i, variablerza, point;
    variablerza = document.getElementsByClassName("variable-rza");
    for (i = 0; i < variablerza.length; i++) {
        variablerza[i].style.display = "none";
    }
    point = document.getElementsByClassName("news-point");
    for (i = 0; i < point.length; i++) {
        point[i].className = point[i].className.replace(" active", "");
    }
    document.getElementById(variableRza).style.display = "block";
    event.currentTarget.className += " active";
}
document.getElementById("defaultNewsOpen").click();
