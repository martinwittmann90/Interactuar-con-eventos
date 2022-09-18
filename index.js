$(document).on('ready', constructor);
function constructor()
{
  $('#contenido input:not([readonly])').change( function (e) {
    let id = $(this).data('id'); 
    if(!id) return; 
    let num2 = parseInt( $('#EQUIPOVISITANTE'+id).val() );
    let num1 = parseInt( $('#EQUIPOLOCAL'+id).val() );
    if (num1 > num2) {
      local = 3;
      visitante = 0;
      }
      else if (num1 < num2) {
      local = 0;
      visitante = 3;
      }
      else {
      local = 1;
      visitante = 1;
      }
    let resultadolocal = local
    $('#teamlocal'+id).val(resultadolocal);
    let resultadovisitante = visitante
    $('#teamvisita'+id).val(resultadovisitante);
    console.log(parseInt(teamlocal1.value));
    //CALCULO PUNTOS
    ptosarg.innerText = parseInt(teamlocal1.value) + parseInt(teamlocal3.value) + parseInt(teamlocal5.value)
    ptosars.innerText = parseInt(teamvisita1.value) + parseInt(teamlocal4.value) + parseInt(teamvisita6.value)
    ptosmex.innerText = parseInt(teamvisita3.value) + parseInt(teamvisita3.value) + parseInt(teamlocal6.value)
    ptospol.innerText = parseInt(teamvisita2.value) + parseInt(teamvisita4.value) + parseInt(teamvisita5.value)
    //CALCULO GOLES A FAVOR
    golesarg.innerText = parseInt(EQUIPOLOCAL1.value) + parseInt(EQUIPOLOCAL3.value) + parseInt(EQUIPOLOCAL5.value)
    golesars.innerText = parseInt(EQUIPOVISITANTE1.value) + parseInt(EQUIPOLOCAL4.value) + parseInt(EQUIPOVISITANTE6.value)
    golesmex.innerText = parseInt(EQUIPOLOCAL2.value) + parseInt(EQUIPOVISITANTE3.value) + parseInt(EQUIPOLOCAL6.value)
    golespol.innerText = parseInt(EQUIPOVISITANTE4.value) + parseInt(EQUIPOVISITANTE4.value) + parseInt(EQUIPOVISITANTE5.value)
    //CALCULO GOLES EN CONTRA
    golesconarg.innerText = parseInt(EQUIPOVISITANTE1.value) + parseInt(EQUIPOVISITANTE3.value) + parseInt(EQUIPOLOCAL5.value)
    golesconars.innerText = parseInt(EQUIPOVISITANTE1.value) + parseInt(EQUIPOVISITANTE4.value) + parseInt(EQUIPOVISITANTE6.value)
    golesconmex.innerText = parseInt(EQUIPOVISITANTE2.value) + parseInt(EQUIPOLOCAL3.value) + parseInt(EQUIPOVISITANTE6.value)
    golesconpol.innerText = parseInt(EQUIPOLOCAL2.value) + parseInt(EQUIPOLOCAL4.value) + parseInt(EQUIPOLOCAL5.value)
    //DIFERENCIA GOLES
    difgolarg.innerText = parseInt(golesarg.innerText) - parseInt(golesconarg.innerText)
    difgolars.innerText = parseInt(golesars.innerText) - parseInt(golesconars.innerText)
    difgolmex.innerText = parseInt(golesmex.innerText) - parseInt(golesconmex.innerText)
    difgolpol.innerText = parseInt(golespol.innerText) - parseInt(golesconpol.innerText)
    
  });}
