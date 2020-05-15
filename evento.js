function verificar(num1){
	
	if(num1 == 1){
	 document.getElementById("res").innerHTML = "CERTA RESPOSTA";
	 document.getElementById("res").style.color = "#00ff48";
	}	
	else{
	 document.getElementById("res").innerHTML = "TENTE NOVAMENTE";
	 document.getElementById("res").style.color = "#ff0062";
	}
	
}