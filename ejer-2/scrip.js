
//Ejercicio 2

let artista1 = {
    nombre:"WhatsApp",
    descripcion: "WhatsApp es una aplicación de mensajería instantánea para teléfonos inteligentes, donde puedes enviar y recibir contenido tipo texto, audio, video, GIF, documentos, contactos, ubicación, llamadas y videollamadas.",
    imagen: "/img/iconoWSP.jpg"
}
let artista2 = {
    nombre: "Faceboock",
    descripcion: "Facebook es una red social pensada para conectar personas, es decir, compartir información, noticias y contenidos audiovisuales con amigos y familiares. Se trata de la plataforma social más popular de todas las existentes en la actualidad con cerca 2.200 millones de usuarios activos cada mes.",
    imagen: "/img/logoFace.png"
}
let artista3 = {
    nombre: "Instagram",
    descripcion: "¿Qué es Instagram? Instagram es una red social principalmente visual, donde un usuario puede publicar fotos y videos de corta duración, aplicarles efectos y también interactuar con las publicaciones de otras personas, a través de comentarios y me gusta.",
    imagen: "/img/insta.png"
}

let vector = [artista1,artista2,artista3]



let caja = document.getElementById('principal')
caja.innerHTML = '<div class="card m-3 col-lg-4 col-ms-6 col-xs-12" style="width: 18rem;"><img src="'+vector[0].imagen+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+vector[0].nombre+'</h5><p class="card-text">'+vector[0].descripcion+'</p></div></div><div class="card m-3 col-lg-4 col-ms-6 col-xs-12" style="width: 18rem;"><img src="'+vector[1].imagen+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+vector[1].nombre+'</h5><p class="card-text">'+vector[1].descripcion+'</p></div></div><div class="card m-3 col-lg-4 col-ms-6 col-xs-12" style="width: 18rem;"><img src="'+vector[2].imagen+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+vector[2].nombre+'</h5><p class="card-text">'+vector[2].descripcion+'</p></div></div>'