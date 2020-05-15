function abrirAjax(){
    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }else{
        xmlHttp = ActiveXObject("Microsoft.xmlhttp");
    }
    return xmlHttp;
}

function carregar(url){
    var ajax = abrirAjax();
    ajax.onreadystatechange = function(){

        if (ajax.readyState == 4 && ajax.status == 200){
            document.getElementById("conteudo").innerHTML = ajax.responseText;
        }
    }
    ajax.open('GET', url, 'true');
    ajax.send(null);

    
			
		
}