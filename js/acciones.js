// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	var basedatos=window.sqlitePlugin.openDatabase({name: "ColoresBD.db",createFromLocation:1});
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('B1','audio/C.mp3',function(){},
	function(msg){alert("Error "+msg);});
	audio.preloadFX('B2','audio/D.mp3',function(){},
	function(msg){alert("Error "+msg);});
	audio.preloadFX('B3','audio/E.mp3',function(){},
	function(msg){alert("Error "+msg);});
	audio.preloadFX('B4','audio/F.mp3',function(){},
	function(msg){alert("Error "+msg);});
	function cargarnombrejugador()
	{
		basedatos.transaction(function(ejecutar){
			var sql="SELECT NombreUsuario FROM Usuario"; });
			ejecutar.executesql(sql, undefined,function(ejecutar,resultado){  vardatosjugador=resultado.row.item(0); });
			$('#jugador').text(datosjugador.NombreUsuario);
		}
	
	$('#btnjugar').on('tap',function(){
		var pantalla=$.mobile.getScreenHeight();
		var encabezado=$('.ui-header').outerHeight();
		var pie=$('.ui-footer').outerHeight();
		var contenido=$('.ui-content').outerHeight();
		var alto=(pantalla - encabezado - pie)/2
		//alert('Pantalla  '+ pantalla)
		//alert('Encabezado  '+ encabezado)
		//alert('Pie  '+ pie)
		//alert('Contenido  '+ contenido)
		//alert('Alto ' + alto)
		$('.cuadro').height(alto);
		
});//btnjugar on click
$('.cuadro').on('vmousedown',function(){
	$('#pantalla').append(quien($(this).attr('id')));
			$(this).addClass('pulsado')
			
});
$('.cuadro').on('vmouseup',function(){
			$(this).removeClass('pulsado')
			
});
function quien (q)
{
	audio.play(q);
	return q.substring(1);
}
}); 
}); 