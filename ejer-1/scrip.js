// Primera Actividad

let boton = document.getElementById('btnCambio');
let text = document.getElementById('text');

boton.addEventListener('click',function(){
    text.classList.toggle('text-orange');
});