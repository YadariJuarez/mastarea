const btnReaccion=document.getElementById('reaccion');
const contenedorListaMusic=document.getElementById('lista-music');
const controles=document.getElementById('controles');

const menuMusic=document.getElementById('menuMusic');
const titlePlaylist=document.getElementById('titlePlaylist');
const playDescription=document.getElementById('playDescription');
const imgAlbum=document.getElementById('imgAlbum');
const album=document.getElementById('album');

btnReaccion.addEventListener('click',likear);
menuMusic.addEventListener('click',cargarInfo);
let estado=0;
function likear() {
    if (estado===0) {
        btnReaccion.classList.add('reaction-activa');
        estado=1;
    } else if(estado===1) {
        btnReaccion.classList.remove('reaccion-activa');
        estado=0;
    }
}

function cargarInfo(e){
    let jsonurl='';
    let titlePlay='';
    let descripcionPlay='';
    let srcImagenes='';

    if(e.target.classList.contains('playEstudiar')){
        jsonurl='assets/musicJSON/estudiando.json';
        titlePlay='Playlist para estudiar';
        descripcionPlay='La mejors';
        srcImagenes='assets/imagenes/estudiando.jpg';
        album.style.background="linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829), url(assets/imagenes/estudiando.jpg))";
    }else if(e.target.classList.contains('playRock')){
        jsonurl='assets/musicJSON/rock.json';
        titlePlay='Playlist para rockear';
        descripcionPlay='La mejors';
        srcImagenes='assets/imagenes/rockear.png';
        album.style.background="linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829), url(assets/imagenes/rockear.png))";
    }else if(e.target.classList.contains('playDeporte')){
        jsonurl='assets/musicJSON/deporte.json';
        titlePlay='Playlist para deportearr';
        descripcionPlay='La mejors';
        srcImagenes='assets/imagenes/deporte.jpg';
        album.style.background="linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829), url(assets/imagenes/deporte.png))";
    }
    titlePlaylist.innerHTML=titlePlay;
    playDescription.innerHTML=descripcionPlay;
    imgAlbum.src=srcImagenes;
    cargarMusica(jsonurl);
} 
function cargarMusica(url){
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let html='';
            data.forEach(music => {
                html+=`
                <li class="music">
                <input type="text" value="${music.url}"
                        style="display: none;">
                        <a href="#" id="${music.id}" class="btn
                        play-music"><i class="far
                        fa-play-circle"></i></a>
                        <h3>${music.artista}</h3>
                        <h3 class="name" id="name">${music.nombre}</h3>
                        <h3 class="time">--</h3>
                </li>
                `
                contenedorListaMusic.innerHTML=html;
            }) ;
        });
}