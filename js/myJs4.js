var arrayGenerado = [];

function generar(cant) {
	var cantidad = cant;
	arrayGenerado = [];
	for (i=0;i<cantidad;++i) arrayGenerado[i]=i;
	arrayGenerado = generarNumerosIntoArray(arrayGenerado);
	var arrayTexto = arrayGenerado.toString().replace(/,/g, ', ');
	$('#arrayGenerado').html('');
	$('#arrayGenerado').html("<p>Array generado: "+arrayTexto+"</p>");
	$('#btnMultiplicar').show();
} 
function generarNumerosIntoArray(array) {
	var tmp, current, top = array.length;
	if(top) while(--top) {
	    current = Math.floor(Math.random() * (top + 1));
	    tmp = array[current];
	    array[current] = array[top];
	    array[top] = tmp;
	}
	return array;
}

function multiplicar() {
	var timeInicial = new Date().getTime(); 
	$('#resultadoDiscreto').append("<strong>Discreta</strong><br>");
	multiplicarDivideYVenceras(arrayGenerado);
	var timeFinal = new Date().getTime();
	var diff1 = (timeFinal - timeInicial)/1000;
	var timeInicial = new Date().getTime();
	multiplicarDinamica(arrayGenerado);
	var timeFinal = new Date().getTime();
	var diff2 = (timeFinal - timeInicial)/1000;
}

function multiplicarDivideYVenceras(array) {
	var n = array.length;
	if (n == 3) { //Solo son 2 matrices
		return array[0]*array[1]*array[2];
	}else{
		var min = Infinity;
		for (var i = 0; i < n-2; i++) {
			
		}
	}
}

function multiplicarDinamica(array) {
	
}