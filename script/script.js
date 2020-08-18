
function resposta1() {
    var radios = document.getElementsByName("p1");
    var divres = document.getElementById("respostacorreta1");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value == "0") {
            divres.innerHTML = "<span color='red'>ERRADO! Resposta correta D</span>";
        }else if(radios[i] =="1"){
            divres.innerHTML = "<span color='red'>ERRADO! Resposta correta D</span>";
        }else if(radios[i] =="2"){
            divres.innerHTML = "<span color='red'>ERRADO! Resposta correta D</span>";
        }else if(radios[i] =="3"){
            divres.innerHTML = "<span color='green'>CERTO! Resposta correta D</span>";
        }else if(radios[i] =="4"){
            divres.innerHTML = "<span color='red'>ERRADO! Resposta correta D</span>";
        }
    }
};

var radios = document.getElementsByName('p1');

for(var i = 0; i < radios.length; i++) {
    radio[i].addEventListener("change",resposta1);
    
}