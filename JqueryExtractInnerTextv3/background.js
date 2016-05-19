//cargar jquery
chrome.tabs.executeScript({
	file: 'jquery-2.2.2.min.js'
});

//recibe mensaje con el url de descarga luego de cargar el archivo
/*chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		chrome.tabs.executeScript({//{url: visibleLinks[i]}
			code: 'chrome.downloads.download({url: "'+request.param[0]+'"});'
			//se agrega al primer <a> de la pagina donde se extrae
			//code: '$("a:first").attr("href", "'+request.content+'").attr("download", "extracted.csv").text("download").css("font-size", "20px");'
		});
		sendResponse({value: 'it worked.'});
	}
);*/
//ejecutar script para extraer
function cargar() {
  chrome.tabs.executeScript({
    file: 'extract.js'
  });
}
//se agrega al popup
document.getElementById('cargar').addEventListener('click', cargar);
/*+request.param[1]+request.param[2]+request.param[3]+request.param[4]+*/