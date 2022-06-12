// inserir elemento no body
var newParagraph = document.createElement("p");
var texto = document.createTextNode('Esté é o conteúdo do paragrafo novo');

newParagraph.appendChild(texto);

var boDy = document.querySelector("body");
boDy.appendChild(newParagraph);

// inserir um container

var container = document.getElementById("container");

var el = document.createElement("span");
el.appendChild(document.createTextNode("texto do span"));

container.appendChild(el);