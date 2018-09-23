
/*
$(document).ready(function(){

 setInterval(function(){
 	var color=$(".main-titulo").css("color");
 	if(color=="rgb(220, 255 ,14)")
 	{
 		$(".main-titulo").css("color","white");
 	}	
 	else
 	{
 		$(".main-titulo").css("color","#DCFF0E");
 	}
  },1000);	
});
*/




function color_original (){
	var color=$("h1").css("color");
	alert(color);
}

function  rojo(){
    document.getElementsByTagName("h1")[0].style.color="#C0c0c0";
    var color=$("h1").css("color");
    
  
}

function  original(){
    document.getElementsByTagName("h1")[0].style.color="#DCFF0E";
    var color=$("h1").css("color");
 
}

 setInterval(rojo, 1000);
 setInterval(original, 2000);


/////////////////////////////
/*
function   ventana(){
	alert("asdasd");
}
*/



//////////////////////

/*
document.getElementsByClassName[0]("btn-reinicio").onclick( function(){
	alert('dasdasd');
document.getElementsByClassName[0]("btn-reinicio").text('REINICIAR')

})
*/

/*
document.getElementsByClassName("btn-reinicio")[0].onclick( function(){
alert('dasdasdasdsaa');
})
*/

//document.getElementsByClassName("titulo_boton")