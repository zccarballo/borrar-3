//EXER1: Creo unha etiqueta <div> con texto a traves de .createElement + .innerHTML e despois metoo no body con .before
let divTexto = document.createElement("div");
console.log("etiqueta <div> con texto", divTexto);

divTexto.innerHTML = "Este é o texto que vai dentro do div";
console.log(divTexto);

document.body.before(divTexto);
console.log(document.body);

//EXER2: fago o mesmo cunha etqieuta <p> e neste caso engadolle un estilo a traves de .className
let pTexto = document.createElement("p");
console.log("etiqueta <p> con texto", pTexto);

pTexto.innerHTML = "Este é outro texto, pero vai dentro dun p";
console.log(pTexto);

pTexto.className = "estilo-etiqueta-p";

document.body.before(pTexto);
console.log(document.body);

//EXER3: fago o mesmo que antes, pero meto a etiqueta <p> nun <div> e o <div> no body

let pTexto2 = document.createElement("p");
console.log("etiqueta <p> con texto", pTexto2);

pTexto2.innerHTML = "Este é un texto dentro dun p, que a sua vez esta nun div";
console.log(pTexto2);

let divContedor = document.createElement("div");
console.log("etiqueta <div> que vai conter a <p>", divContedor);

divContedor.className = "estilo-etiqueta-divContedor";

divContedor.append(pTexto2); //IMP: usamos .append neste caso porque está DENTRO da etiqueta
console.log(divContedor);

document.body.before(divContedor);
console.log(document.body);

//EXER4: creo unha imaxe, que irá dentro dun <div> e metemolo no body

let imaxe = document.createElement("img");
imaxe.src = "./imaxers/SunsetfromradeSanPedro.jpg";
imaxe.className = "estilo-img";
console.log("imaxe dentro dun div", imaxe);

let divContedor2 = document.createElement("div");
divContedor2.className = "estilo-etiqueta-divContedor";
divContedor2.append(imaxe);
console.log("div contedor de img", divContedor2);

document.body.before(divContedor2);
console.log(document.body);
