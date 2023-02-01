var jugador1={nombre:'',puntos:0};
var jugador2={nombre:'',puntos:0};
var arranca=false;

function ObtenerNombreJugador(id){

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




function EscondeBloque(id){
var obj= document.getElementById(id).style.display="none";
}

function btnInicio(){
  var j1= document.getElementById("selectJugador1").options[document.getElementById('selectJugador1').selectedIndex].value;
  var j2= document.getElementById("selectJugador2").options[document.getElementById('selectJugador2').selectedIndex].value;
  console.log("j1:"+j1+"/ j2:"+j2);
    if(j1 != j2){
        arranca=true;
        console.log("Inicio correcto...");
        inicio();
        CargarJugadores();
      EscondeBloque("inicioJuego");
    }else{
    alert("Debes selecionar una figura diferente para cada jugador.");
    }


}

function inicio(){
if(arranca){
console.log("Inicio...")
}else{

}


}

this.inicio();
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