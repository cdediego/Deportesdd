const titulares = {
    noticia1: {
        titular: "Messi ya sabe que ganará el Balón de Oro",
        parrafo: "Una delegación de France Football estuvo ayer en Barcelona para informarle de ello antes de hacer una entrevista y las fotos para la portada del martes 3",
        imagenSrc: "imagenes/imagenes/img1.png"
    },
    noticia2: {
        titular: "Con el gol de Dybala, la juventus ganó",
        parrafo: "En la anteúltima fecha de la fase de grupos de la UEFA Champions League, la Juventus se impulsó 1 a 0 ante el Atletico Madrid en Turin y se adueñó de la cima del Grupo D.",
        imagenSrc: "imagenes/imagenes/img2.png"
    },
    noticia3: {
        titular: "El cabreo de Cristiano Ronaldo con las risas",
        parrafo: "El astro portugués sufrió las burlas de sus compañeros, durante el último entrenamiento de la Juventus antes del partido de Champions League ante el Atlético de Madrid, tras sufrir un caño de Bonucci.",
        imagenSrc: "imagenes/imagenes/img3.png"
    }
    
}

function startCarousel() {
        setInterval( function () {
            let screenWidth = screen.width; //se recoge el width de la pantalla en cada iteración y se comprueba
            if (screenWidth > 460){
                let actualSrc = document.getElementById('imagenCarousel').getAttribute("src");
                if(actualSrc == 'imagenes/imagenes/img1.png'){
                    document.getElementById('imagenCarousel').src = titulares.noticia2.imagenSrc;
                    document.getElementById('titularCarousel').innerHTML = titulares.noticia2.titular;
                    document.getElementById('parrafoCarousel').innerHTML = titulares.noticia2.parrafo;
                }else if(actualSrc == 'imagenes/imagenes/img2.png'){
                    document.getElementById('imagenCarousel').src = titulares.noticia3.imagenSrc;
                    document.getElementById('titularCarousel').innerHTML = titulares.noticia3.titular;
                    document.getElementById('parrafoCarousel').innerHTML = titulares.noticia3.parrafo;
                }else if(actualSrc == 'imagenes/imagenes/img3.png'){
                    document.getElementById('imagenCarousel').src = titulares.noticia1.imagenSrc;
                    document.getElementById('titularCarousel').innerHTML = titulares.noticia1.titular;
                    document.getElementById('parrafoCarousel').innerHTML = titulares.noticia1.parrafo;
                }
            }
        }, 5000);
}

/*
    Intento de crear una función que genere auntomaticamente los divs por cada noticia.
    No lo he conseguido, lo tengo que acabar de pensar bien.
*/
// function generateCarouselDivs(index){
//     let wrapper = document.getElementsByClassName("principal"); //guardar el div .principal
//     let numeroDeTitulares = Object.keys(titulares).length; //número de atributos que tiene el objeto titulares
//     for (let i = 1; i <= numeroDeTitulares; i++){
//         const noticiaPrincipal = document.createElement("div"); //crear div
//         wrapper[0].appendChild(noticiaPrincipal); //meter el div al div .principal
//         noticiaPrincipal.setAttribute("class", "noticiaPrincipal"+index);
//         index++;
//     }
//     return index;
// }