
//false = claro
//true = escuro

var tema = true;
const link = document.getElementById('themeStyle');
const img = document.getElementById('btn-tema');

function mudarTema(){

    tema = !tema;
    if (tema === false) {
        link.href = "media/css/dark.css";
    }else{
        link.href = "media/css/light.css";

    }
}