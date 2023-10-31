// mostrar descripcion

$(document).ready(function () {
    var imagen = document.getElementById('imgpartner');
    var imagen02 = document.getElementById('imgpartner02');
    var imagen03 = document.getElementById('imgpartner03');
    var imagen04 = document.getElementById('imgpartner04');

    var imagen06 = document.getElementById('imgpartner06');
    var imagen07 = document.getElementById('imgpartner07');
    var imagen08 = document.getElementById('imgpartner08');
    var imagen09 = document.getElementById('imgpartner09');

    var span = document.getElementById('descripcion');
    var span02 = document.getElementById('descripcion02');
    var span03 = document.getElementById('descripcion03');
    var span04 = document.getElementById('descripcion04');

    var span06 = document.getElementById('descripcion06');
    var span07 = document.getElementById('descripcion07');
    var span08 = document.getElementById('descripcion08');
    var span09 = document.getElementById('descripcion09');

    // Mostrar el span cuando el cursor entra en la imagen
    imagen.addEventListener('mouseenter', function() {
        span.style.display = 'block';
    });
    imagen02.addEventListener('mouseenter', function() {
        span02.style.display = 'block';
    });
    imagen03.addEventListener('mouseenter', function() {
        span03.style.display = 'block';
    });
    imagen04.addEventListener('mouseenter', function() {
        span04.style.display = 'block';
    });
    imagen06.addEventListener('mouseenter', function() {
        span06.style.display = 'block';
    });
    imagen07.addEventListener('mouseenter', function() {
        span07.style.display = 'block';
    });
    imagen08.addEventListener('mouseenter', function() {
        span08.style.display = 'block';
    });
    imagen09.addEventListener('mouseenter', function() {
        span09.style.display = 'block';
    });


    // Ocultar el span cuando el cursor sale de la imagen
    imagen.addEventListener('mouseleave', function() {
        span.style.display = 'none';
    });
    imagen02.addEventListener('mouseleave', function() {
        span02.style.display = 'none';
    });
    imagen03.addEventListener('mouseleave', function() {
        span03.style.display = 'none';
    });
    imagen04.addEventListener('mouseleave', function() {
        span04.style.display = 'none';
    });
    imagen06.addEventListener('mouseleave', function() {
        span06.style.display = 'none';
    });
    imagen07.addEventListener('mouseleave', function() {
        span07.style.display = 'none';
    });
    imagen08.addEventListener('mouseleave', function() {
        span08.style.display = 'none';
    });
    imagen09.addEventListener('mouseleave', function() {
        span09.style.display = 'none';
    });
    
})