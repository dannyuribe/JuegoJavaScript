var jugador1={nombre:'',puntos:0,turno:0,figura:''};
var jugador2={nombre:'',puntos:0,Turno:0};
var arranca=false;

//Configuracion del sistema 
function ConfigInicial(){
  EscondeBloque("detalleJuego");
  EscondeBloque("panelJuego");
}

function CargarJugadores(){
  jugador1.nombre=document.getElementById("inNombreJugador1").value;
  jugador2.nombre=document.getElementById("inNombreJugador2").value;

  var LabelNombre1=document.getElementById("labelNombreJugador1");
  var LabelNombre2=document.getElementById("labelNombreJugador2");

  if(jugador1.nombre !==""){
    LabelNombre1.innerHTML=jugador1.nombre+" / Puntos:"+jugador1.puntos;
  }else{
    LabelNombre1.innerHTML="Jugador 1 / Puntos:"+jugador1.puntos;
  }

  if(jugador2.nombre !==""){
    LabelNombre2.innerHTML=jugador1.nombre+" / Puntos:"+jugador2.puntos;
  }else{
    LabelNombre2.innerHTML="Jugador 2 / Puntos:"+jugador2.puntos;
  }

}

function inicio(){
  ConfigInicial();
  if(arranca){
  console.log("Inicio...")
  }else{
  
  }
}

function EscondeBloque(id){
var obj= document.getElementById(id).style.display="none";
}
function MuestraBloque(id){
var obj= document.getElementById(id).style.display="block";
}
var Mayor=0;
function Tirar(){
  if(ValidaFigura()){
    console.log("Tiro Permitido.");
  }
  
  return false;
}
//eventos del sistema.
function btnInicio(){
  var j1= document.getElementById("selectJugador1").options[document.getElementById('selectJugador1').selectedIndex].value;
  var j2= document.getElementById("selectJugador2").options[document.getElementById('selectJugador2').selectedIndex].value;
  console.log("j1:"+j1+"/ j2:"+j2);
    if(j1 != j2){
        arranca=true;
        console.log("Inicio correcto...");
        CargarJugadores();
      EscondeBloque("inicioJuego");
      MuestraBloque("detalleJuego");
      MuestraBloque("panelJuego");
    }else{
    alert("Debes selecionar una figura diferente para cada jugador.");
    }


}

function jugada(valor){
    
    switch(valor){
        case 1:
            let x= document.getElementById("figuraJugador1");
            x.innerHTML="X";
        break;
        case 2:
            let b= document.getElementById("figuraJugador2");
            b.innerHTML="O";
        break;
        default:
    }
}
//Validaciones 
function ValidaFigura(){
  var j1= document.getElementById("selectJugador1").options[document.getElementById('selectJugador1').selectedIndex].value;
  var j2= document.getElementById("selectJugador2").options[document.getElementById('selectJugador2').selectedIndex].value;
  if(j1 == j2){
    return false;
  }else{
    return true;
  }
}
//Arranque 