suma = parseInt(campo1.value) + parseInt(campo2.value);

document.write(suma);

let input1  = document.getElementById("arg0")
input1.addEventListener("input", () => {
     console.log(input1.value)
})
let input2  = document.getElementById("arg00")
input2.addEventListener("input", () => {
     console.log(input2.value)
})
let input3  = document.getElementById("arg000")
input3.addEventListener("input", () => {
     console.log(input3.value)
})

//GOLES ARGENTINA
arg0.addEventListener("keydown",golesArgentina)
function golesArgentina (event) {   
    const totalGolesArg = event.key;
    golesA0.innerText = event.key
    console.log(totalGolesArg);
/*     if (totalGolesArg != "0") {
        golesArg.innerText = event.key;
    } */}
    
arg00.addEventListener("keydown",golesArgentina1)
function golesArgentina1 (event) {
    let totalGolesArg1 = event.key;
    golesA1.innerText = event.key
    console.log(totalGolesArg1);
/*     if (totalGolesArg1 != "0") {
        golesArg.innerText = event.key;
    } */}
arg000.addEventListener("keydown",golesArgentina2)
function golesArgentina2 (event) {
    let totalGolesArg2 = event.key;
    golesA2.innerText = event.key
    console.log(totalGolesArg2);
/*     if (totalGolesArg != "0") {
        golesArg.innerText = event.key;
    } */}
let golesASF = arg00.addEventListener("keydown",golesArgentina1)
let golesATF = arg000.addEventListener("keydown",golesArgentina2)

arg0.addEventListener("keydown",golesArgentina)

function sumar(){
    var numero1 = document.getElementById("golesA2");
    var numero2 = document.getElementById("golesA1");
    var suma = numero1 + numero2;
    console.log(suma);
    //document.writeln.golesArs(suma);
}

ars1.addEventListener("keydown",golesArabia)
function golesArabia (event) {
    golesAS0.innerText = event.key
}
mex2.addEventListener("keydown",golesMexico)
function golesMexico (event) {
    golesM0.innerText = event.key
}
pol3.addEventListener("keydown",golesPolonia)
function golesPolonia (event) {
    golesP0.innerText = event.key
}
//GOLES FECHA 2




ars11.addEventListener("keydown",golesArabia1)
function golesArabia1 (event) {
    golesAS1.innerText = event.key
}
pol33.addEventListener("keydown",golesPolonia1)
function golesPolonia1 (event) {
    golesP1.innerText = event.key
}
mex22.addEventListener("keydown",golesMexico1)
function golesMexico1 (event) {
    golesM1.innerText = event.key
}
//GOLES FECHA 3
ars111.addEventListener("keydown",golesArabia2)
function golesArabia2 (event) {
    golesAS2.innerText = event.key
}
mex222.addEventListener("keydown",golesMexico2)
function golesMexico2 (event) {
    golesM2.innerText = event.key
}
pol333.addEventListener("keydown",golesPolonia2)
function golesPolonia2 (event) {
    golesP2.innerText = event.key
}


//TOTAL GOLES ARGENTINA


/*         // funcion para comparar Corrige orden para numero de un digito
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort
        function comparar(a, b) {
            return a - b;
        }

        // funcion para mostrar el arreglo
        function mostrarArreglo(elemento, arreglo) {
            document.getElementById(elemento).innerHTML=""; // limpiar DIV
            for (let index = 0; index < arreglo.length; index++) {
               var numeros = document.createElement("P"); // crear element P
               numeros.innerHTML ='[' + index + '] => '+ arreglo[index]; // poner valor a element P
               document.getElementById(elemento).appendChild(numeros);   // agregar elemenmto P    
            }
        }

        // evento de click boton correr
        document.getElementById("boton").onclick = function() {
            var cantidad = document.getElementById('cantidad').value;
            var arreglo = []; // inicializar 
            

            // crea el arreglo con la cantidad tipeada
            for (let index = 0; index < cantidad; index++) {
                // agrega un item de arreglo y crear el contenido con random entero de 1 a 100
                arreglo.push(parseInt((Math.random() * 100) + 1));              
            }

            // mostrar contenido de arreglo SIN ORDENAR
            mostrarArreglo('creado', arreglo);

            // ordenar arreglo ASCENDENTE
            arreglo.sort(comparar);

            // mostrar contenido de arreglo ORDENADO
            mostrarArreglo('ordenado', arreglo);

        };
 */


/* arg0.addEventListener("keydown",golesArgentina)
function golesArgentina (event) {
    const teclaPresionada = event.key;
    golesArg.innerText = event.key
    console.log(teclaPresionada);
    if (teclaPresionada == "a") {
        console.log("bajo para abajo");}}
arg00.addEventListener("keydown",golesArgentina)
function golesArgentina (event) {
    const teclaPresionada = event.key;
    golesArg.innerText = event.key
    console.log(teclaPresionada);
    if (teclaPresionada == "a") {
        console.log("bajo para abajo");}}
arg000.addEventListener("keydown",golesArgentina)
function golesArgentina (event) {
    const teclaPresionada = event.key;
    golesArg.innerText = event.key
    console.log(teclaPresionada);
    if (teclaPresionada == "a") {
        console.log("bajo para abajo");}} */





/* ars1.addEventListener("keydown",golesArabia)

function golesArabia (event) {
    const teclaPresionada = event.key;
    golesArs.innerText = event.key
    console.log(teclaPresionada);
    if (teclaPresionada == "a") {
        console.log("bajo para abajo");
        
    }
} */



/* 
let argentinaPuntos = document.getElementById("arg0")
let arabiaPuntos    = document.getElementById("ars1") */
/* var metaChar = false;
var exampleKey = 16; */
/* 
function keyEvent(event) {
  var key = event.keyCode;
  var keychar = String.fromCharCode(key);
  if (key == arabiaPuntos) {
    metaChar = true;
  }
  if (key != exampleKey) {
    if (metaChar) {
      alert("Combination of metaKey + " + keychar);
      metaChar = false;
    } else {
      alert("Key pressed " + key);
    }
  }
}

function metaKeyUp (event) {
  var key = event.keyCode || event.which;

  if (key == exampleKey) {
    metaChar = false;
  }
}

<body onkeydown="keyEvent(event)" onkeyup="metaKeyUp(event)"></body>
 */
/* 


//PRIMER PARTIDO
let argentinaPuntos = document.getElementById("arg0")
let arabiaPuntos    = document.getElementById("ars1")

document.addEventListener('keydown', function() => {
if (argentinaPuntos > arabiaPuntos) {
  ptosarg.innerText = 3;
  ptosars.innerText = 0;
}
else if (argentinaPuntos < arabiaPuntos) {
    ptosarg.innerText = 0;
    ptosars.innerText = 3;
}
else {
    ptosarg.innerText = 1;
    ptosars.innerText = 1;
}
}




/* //PRIMER PARTIDO
    let argentinaPuntos = document.getElementById("arg0")
    let arabiaPuntos    = document.getElementById("ars1")
    if (argentinaPuntos > arabiaPuntos) {
      ptosarg.innerText = 3;
      ptosars.innerText = 0;
    }
    else if (argentinaPuntos < arabiaPuntos) {
        ptosarg.innerText = 0;
        ptosars.innerText = 3;
    }
    else {
        ptosarg.innerText = 1;
        ptosars.innerText = 1;
    } */

/* //SEGUNDO PARTIDO
let mex2     = document.getElementById("mex2");
let pol3     = document.getElementById("pol3");

if (mex2> pol3) {
    resultadoequipo2PrimerPartido = 3;
    resultadoequipo3PrimerPartido = 0;
    ptosmex.innerText = 3; 
    ptospol.innerText = 0;  
    }
    else if (mex2 < pol3) {
    resultadoequipo2PrimerPartido = 0;
    resultadoequipo3PrimerPartido = 3;
    ptosmex.innerText = 0; 
    ptospol.innerText = 3;  
    }
    else {
    resultadoequipo2PrimerPartido = 1;
    resultadoequipo3PrimerPartido = 1;
    ptosmex.innerText = 1; 
    ptospol.innerText = 1;  
    }  */ 
/* 
//SEGUNDA FECHA

//TERCER PARTIDO
let arg00     = document.getElementById("arg00");
let mex22     = document.getElementById("mex22");

if (arg00> mex22) {
    resultadoequipo0SegundoPartido = 3;
    resultadoequipo2SegundoPartido = 0;
    }
    else if (arg00.innerText < mex22.innerText) {
    resultadoequipo0PrimerPartido = 0;
    resultadoequipo2PrimerPartido = 3;
    }
    else {
    resultadoequipo0PrimerPartido = 1;
    resultadoequipo2PrimerPartido = 1;
    }

//CUARTO PARTIDO
let ars11     = document.getElementById("ars11");
let pol33     = document.getElementById("pol33");

if (ars11.innerText > pol33.innerText) {
    resultadoequipo1SegundoPartido = 3;
    resultadoequipo3SegundoPartido = 0;
    }
    else if (ars11.innerText < pol33.innerText) {
    resultadoequipo1SegundoPartido = 0;
    resultadoequipo3SegundoPartido = 3;
    }
    else {
    resultadoequipo1SegundoPartido = 1;
    resultadoequipo3SegundoPartido = 1;
    }

//TERCERA FECHA 

//QUINTO PARTIDO
let arg000     = document.getElementById("arg000");
let pol333     = document.getElementById("pol333");

if (arg000.innerText > pol333.innerText) {
    resultadoequipo0TercerPartido = 3;
    resultadoequipo3TercerPartido = 0;
    }
    else if (arg000.innerText < pol333.innerText) {
    resultadoequipo0TercerPartido = 0;
    resultadoequipo3TercerPartido = 3;
    }
    else {
    resultadoequipo0TercerPartido = 1;
    resultadoequipo3TercerPartido = 1;
    }
// SEXTO PARTIDO
let ars111     = document.getElementById("ars111");
let mex222     = document.getElementById("mex222");

if (ars111.innerText > mex222.innerText) {
    resultadoequipo1TercerPartido = 3;
    resultadoequipo2TercerPartido = 0;
    }
    else if (ars111.innerText < mex222.innerText) {
    resultadoequipo1TercerPartido = 0;
    resultadoequipo2TercerPartido = 3;
    }
    else {
    resultadoequipo1TercerPartido = 1;
    resultadoequipo2TercerPartido = 1;
    }
//TABLA DE POSICIONES
//PUNTOS
let ptosarg     = document.getElementById("ptosarg");
ptosarg.innerText = resultadoequipo0PrimerPartido + resultadoequipo0SegundoPartido + resultadoequipo0TercerPartido;
let ptosars     = document.getElementById("ptosars");
ptosars.innerText = resultadoequipo1PrimerPartido + resultadoequipo1SegundoPartido + resultadoequipo1TercerPartido;
let ptosmex     = document.getElementById("ptosmex");
ptosmex.innerText = resultadoequipo2PrimerPartido + resultadoequipo2SegundoPartido + resultadoequipo2TercerPartido;
let ptospol     = document.getElementById("ptospol");
ptospol.innerText = resultadoequipo3PrimerPartido + resultadoequipo3SegundoPartido + resultadoequipo3TercerPartido; */


/* //GOLES A FAVOR
let golesarg     = document.getElementById("golesarg");
golesarg.innerHTML = parseInt(arg0.innerText) + parseInt(arg00.innerText) + parseInt(arg000.innerText);
let golesars     = document.getElementById("golesars");
golesars.innerText = parseInt(ars1.innerText) + parseInt(ars11.innerText) + parseInt(ars111.innerText);
let golesmex     = document.getElementById("golesmex");
golesmex.innerText = parseInt(mex2.innerText) + parseInt(mex22.innerText) + parseInt(mex222.innerText);
let golespol     = document.getElementById("golespol");
golespol.innerText = parseInt(pol3.innerText) + parseInt(pol33.innerText) + parseInt(pol333.innerText);
//GOLES EN CONTRA
let golesconarg     = document.getElementById("golesconarg");
golesconarg.innerHTML = parseInt(ars1.innerText) + parseInt(mex22.innerText) + parseInt(pol333.innerText);
let golesconars     = document.getElementById("golesconars");
golesconars.innerText = parseInt(arg0.innerText) + parseInt(pol33.innerText) + parseInt(mex222.innerText);
let golesconmex     = document.getElementById("golesconmex");
golesconmex.innerText = parseInt(pol3.innerText) + parseInt(arg00.innerText) + parseInt(ars111.innerText);
let golesconpol     = document.getElementById("golesconpol");
golesconpol.innerText = parseInt(mex2.innerText) + parseInt(ars11.innerText) + parseInt(arg000.innerText);
//DIFERENCIA GOL
let difgolarg     = document.getElementById("difgolarg");
difgolarg.innerHTML = parseInt(golesarg.innerHTML) - parseInt(golesconarg.innerHTML);
let difgolars     = document.getElementById("difgolars");
difgolars.innerText = parseInt(golesars.innerText) - parseInt(golesconars.innerText);
let difgolmex     = document.getElementById("difgolmex");
difgolmex.innerText = parseInt(golesmex.innerText) - parseInt(golesconmex.innerText);
let difgolpol     = document.getElementById("difgolpol");
difgolpol.innerText = parseInt(golespol.innerText) - parseInt(golesconpol.innerText);
 */