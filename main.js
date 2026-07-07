/* ==========================================
   GoalTime 2030
   JavaScript Principal
========================================== */


/* ==========================================
   DATA DA COPA DO MUNDO 2030
========================================== */

// Data prevista de abertura
const copa2030 = new Date("June 8, 2030 00:00:00").getTime();


/* Elementos do contador */

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const message = document.getElementById("message");


/* ==========================================
   CONTAGEM REGRESSIVA
========================================== */


function countdown(){

    const agora = new Date().getTime();


    const distancia = copa2030 - agora;


    // Quando chegar a data

    if(distancia <= 0){

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";


        if(message){

            message.innerHTML =
            "🏆 A Copa do Mundo 2030 começou!";

        }


        return;

    }



    const dia = Math.floor(
        distancia /
        (1000 * 60 * 60 * 24)
    );


    const hora = Math.floor(
        (distancia %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );


    const minuto = Math.floor(
        (distancia %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );


    const segundo = Math.floor(
        (distancia %
        (1000 * 60))
        /
        1000
    );



    days.innerHTML =
    String(dia).padStart(4,"0");


    hours.innerHTML =
    String(hora).padStart(2,"0");


    minutes.innerHTML =
    String(minuto).padStart(2,"0");


    seconds.innerHTML =
    String(segundo).padStart(2,"0");

}


// Executa imediatamente

countdown();


// Atualiza a cada segundo

setInterval(countdown,1000);





/* ==========================================
   BARRA DE PROGRESSO
========================================== */


const inicioProjeto =
new Date("June 8, 2022 00:00:00").getTime();



function progress(){

    const agora =
    new Date().getTime();


    const total =
    copa2030 - inicioProjeto;


    const passado =
    agora - inicioProjeto;


    let porcentagem =
    (passado / total) * 100;


    if(porcentagem > 100){

        porcentagem = 100;

    }


    const barra =
    document.getElementById(
        "progress-fill"
    );


    if(barra){

        barra.style.width =
        porcentagem.toFixed(2)
        + "%";

    }

}


progress();

setInterval(progress,60000);





/* ==========================================
   BOTÃO COMPARTILHAR
========================================== */


const shareButton =
document.getElementById("share");



if(shareButton){


shareButton.addEventListener(
"click",
()=>{


const texto =
"🏆 GoalTime 2030 - Contagem regressiva para a Copa do Mundo 2030!";



if(
navigator.share
){


navigator.share({

title:
"GoalTime 2030",

text:
texto,

url:
window.location.href


});


}

else{


navigator.clipboard.writeText(
window.location.href
);


alert(
"Link copiado! Compartilhe com seus amigos ⚽"
);


}



});


}





/* ==========================================
   BOTÃO SAIBA MAIS
========================================== */


const aboutButton =
document.getElementById("about");


if(aboutButton){


aboutButton.addEventListener(
"click",
()=>{


document
.getElementById("info")
.scrollIntoView({

behavior:"smooth"

});


});


}





/* ==========================================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================================== */


const elementos =
document.querySelectorAll(
".card, .info-card, .time"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},

{

threshold:0.2

});



elementos.forEach(
(elemento)=>{


elemento.style.opacity="0";

elemento.style.transform=
"translateY(50px)";


elemento.style.transition=
"1s";


observer.observe(elemento);


});





/* ==========================================
   EFEITO DE ANO 2030
========================================== */


console.log(
`
⚽ GoalTime 2030 iniciado!

Contagem regressiva ativa.
Prepare-se para a Copa do Mundo FIFA 2030 🏆
`
);
