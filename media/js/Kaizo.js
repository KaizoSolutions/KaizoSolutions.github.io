
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

const images = [
    'media/imgs/hero1.jpg',
    'media/imgs/hero2.jpg',
    'media/imgs/hero3.jpg',
    'media/imgs/hero4.jpg'
]

const header = document.querySelector('header');
const randomIndex = Math.floor(Math.random() * images.length);

header.style.background = `url('${images[randomIndex]}') no-repeat center center/cover`;
