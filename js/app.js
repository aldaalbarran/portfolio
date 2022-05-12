window.addEventListener("scroll", function () {
    var menu = document.querySelector("nav");
    menu.classList.toggle("active", window.scrollY > 10);
});

document.addEventListener("DOMContentLoaded", function () {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#menu',
        offset: 500
    });
    document.querySelectorAll('.scrollto').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            var section_name = element.getAttribute('href');
            var offset_num = document.querySelector(section_name).offsetTop;
            window.scrollTo({ top: (offset_num - 0), behavior: 'smooth' });
        });
    })

});

/* ======================================== PROGRESSBAR ======================================== */
$(window).scroll(function () {
    var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 100;
    $('#progressbar').css('height', scrollPercent + '%');
});

/* ======================================== SKILLS ======================================== */
$(function () {

    var listaTexto = [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "Vue.js",
        "PHP",
        "Laravel",
        "MySQL",
        "Git",
        "GitHub"
    ];
    maquinaLista("typer", 75, listaTexto, 0);

    function maquinaLista(contenedor, intervalo, listaTexto, indice) {
        if (indice == listaTexto.length) {
            indice = 0;
        }

        indice == 0 ? $("#imgHTML5").addClass(" active") : $("#imgHTML5").removeClass(" active");
        indice == 1 ? $("#imgCSS3").addClass(" active") : $("#imgCSS3").removeClass(" active");
        indice == 2 ? $("#imgBootstrap").addClass(" active") : $("#imgBootstrap").removeClass(" active");
        indice == 3 ? $("#imgJavaScript").addClass(" active") : $("#imgJavaScript").removeClass(" active");
        indice == 4 ? $("#imgVuejs").addClass(" active") : $("#imgVuejs").removeClass(" active");
        indice == 5 ? $("#imgPHP").addClass(" active") : $("#imgPHP").removeClass(" active");
        indice == 6 ? $("#imgLaravel").addClass(" active") : $("#imgLaravel").removeClass(" active");
        indice == 7 ? $("#imgMySQL").addClass(" active") : $("#imgMySQL").removeClass(" active");
        indice == 8 ? $("#imgGit").addClass(" active") : $("#imgGit").removeClass(" active");
        indice == 9 ? $("#imgGitHub").addClass(" active") : $("#imgGitHub").removeClass(" active");

        maquina2(contenedor, listaTexto[indice], intervalo, listaTexto, indice);
    }

    function maquina2(contenedor, texto, intervalo, listaTexto, indiceLista) {
        var indiceTexto = 0;
        var finalTexto = false;
        timer = setInterval(function () {
            if (indiceTexto == texto.length && finalTexto == false) {
                setTimeout(function () {
                    finalTexto = true;
                }, 1000);
            }

            if (finalTexto == false) {
                indiceTexto++
            } else {
                indiceTexto--;
            }
            mostrarEliminarTexto(contenedor, texto, indiceTexto, finalTexto);
            if (finalTexto == true && indiceTexto == 0) {
                clearInterval(timer);
                maquinaLista(contenedor, intervalo, listaTexto, indiceLista + 1);
            }
        }, intervalo)
    }

    function mostrarEliminarTexto(contenedor, texto, i, finalTexto) {
        if (finalTexto) {
            $("#" + contenedor).html(texto.substr(0, i--) + "");
        } else {
            $("#" + contenedor).html(texto.substr(0, i++) + "");
        }
    }
});