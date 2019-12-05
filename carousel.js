function startCarousel() {
    setInterval( function () {
        let actualSrc = document.getElementById('imagenCarousel').getAttribute("src");
        console.log(actualSrc);
        

        if(actualSrc == 'imagenes/imagenes/img1.png'){
            document.getElementById('imagenCarousel').src = 'imagenes/imagenes/img2.png';
            document.getElementById('titularCarousel').innerHTML = 'Con el gol de Dybala, la juventus ganó.';
            document.getElementById('parrafoCarousel').innerHTML = 'En la anteúltima fecha de la fase de grupos de la UEFA Champions League, la Juventus se impulsó 1 a 0 ante el Atletico Madrid en Turin y se adueñó de la cima del Grupo D.'
        }else if(actualSrc == 'imagenes/imagenes/img2.png'){
            document.getElementById('imagenCarousel').src = 'imagenes/imagenes/img3.png';
            document.getElementById('titularCarousel').innerHTML = 'El cabreo de Cristiano Ronaldo con las risas';
            document.getElementById('parrafoCarousel').innerHTML = 'El astro portugués sufrió las burlas de sus compañeros, durante el último entrenamiento de la Juventus antes del partido de Champions League ante el Atlético de Madrid, tras sufrir un caño de Bonucci.'
        }else if(actualSrc == 'imagenes/imagenes/img3.png'){
            document.getElementById('imagenCarousel').src = 'imagenes/imagenes/img1.png';
            document.getElementById('titularCarousel').innerHTML = 'Messi ya sabe que ganará el Balón de Oro';
            document.getElementById('parrafoCarousel').innerHTML = 'Una delegación de France Football estuvo ayer en Barcelona para informarle de ello antes de hacer una entrevista y las fotos para la portada del martes 3'
        }
    }, 5000);
}