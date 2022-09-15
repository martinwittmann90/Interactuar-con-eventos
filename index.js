//PRIMER PARTIDO
function calculo () {
    let argentinaPuntos = parseInt(document.getElementById("arg0").value);
    let arabiaPuntos    = parseInt(document.getElementById("ars1").value);
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
/* 
//SEGUNDO PARTIDO
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
    } */
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