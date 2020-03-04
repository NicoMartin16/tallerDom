//Seccion del logo y regiones
var logo = document.querySelector('#logo');
var h2 = document.createElement('h2');
var p = document.createElement('p');
var nav = document.querySelector('.nav');
nav.className = 'nav';
//Titulo onefootball
h2.innerHTML = "One football";
h2.className = 'titulo';
//Region
p.innerHTML = 'España &lsaquo;';
p.className = 'region';
logo.appendChild(h2);
logo.appendChild(p);

//Seccion de la busqueda de equipos y competiciones
var busqueda = document.querySelector('#busqueda');
var form = document.createElement('form');
var input = document.createElement('input');
var botonBusqueda = document.createElement('a');
var iconBusqueda = document.createElement('img');  
input.setAttribute('type','text');
input.setAttribute('placeholder', '   Búsqueda de equipos y competiciones');
iconBusqueda.setAttribute('src', './img/lupa.png');
input.className = 'busqueda';

botonBusqueda.className = 'boton-busqueda';
iconBusqueda.className = 'icon';
botonBusqueda.appendChild(iconBusqueda);
busqueda.appendChild(form);
form.appendChild(input);
form.appendChild(botonBusqueda);

//Sección del main
var contenedor = document.querySelector('.container');
var populares = document.querySelector('#populares');
var paginasPop = document.createElement('h2');
var listaPopulares = document.createElement('ul');
listaPopulares.className = 'contenedor_lista';

for (let i = 0; i < 8; i++) {
    var itemPopulares = document.createElement('li');
    var linkPopular = document.createElement('a');
    var iconPopulares = document.createElement('span');
    iconPopulares.innerHTML = 'Icono';
    itemPopulares.className = 'lista_populares';
    linkPopular.className = 'item_populares';
    itemPopulares.appendChild(linkPopular);
    linkPopular.appendChild(iconPopulares);
    listaPopulares.appendChild(itemPopulares);      
}

paginasPop.innerHTML = 'Páginas populares';
paginasPop.className = 'paginas_populares';
contenedor.appendChild(paginasPop);
contenedor.appendChild(listaPopulares);


