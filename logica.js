function recogeInput(id){
	return document.getElementById(id).value;
}

function muestraModal(){
	document.getElementById("frameRes").style.display='block';
}

function primero(id){
	let input=recogeInput(id);
	let nombre=input.split("");
	let resultado=`<p class="respuesta">Nom a troços:</p>`;
	
	nombre.forEach(listado);
	document.getElementById("res").innerHTML=resultado;
	muestraModal();	
		
	function listado(letra){
		resultado=resultado + `<p>${letra}</p>`;
	}
}

function segundo(id){
		let input=recogeInput(id);		
		let nombre=input.split("");
		let resultado=`<p class="respuesta">Partim del nom ${input}</p>`;
		
		nombre.forEach(listado);
		document.getElementById("res").innerHTML=resultado;
		muestraModal();			

		function listado(letra){
			if(isNaN(letra)){
				if( letra=="a"||letra=="A"||letra=="á"||letra=="à"||
					letra=="e"||letra=="E"||letra=="é"||letra=="è"||
					letra=="i"||letra=="I"||letra=="í"||letra=="ì"||
					letra=="o"||letra=="O"||letra=="ó"||letra=="ò"||
					letra=="u"||letra=="U"||letra=="ú"||letra=="ù"){
					resultado=resultado+ `<p>He trobat la VOCAL: ${letra}</p>`;
				}else{
					resultado=resultado+ `<p>He trobat la CONSONANT: ${letra}</p>`;
				}
			}else{
				resultado=resultado+ `<p>Els noms de les persones no contenen el número: ${letra}</p>`;
			}
		}
}	

function tercero(id){
		let input=recogeInput(id);		
		let nombre=input.split("");
		let estadistica=new Map();
		let resultado=`<p class="respuesta">Lletres y quantitat d'aparicions en el nom ${input}: </p>`;

		nombre.forEach(contadora);
		estadistica.forEach(imprimeConsola);
		document.getElementById("res").innerHTML=resultado;
		muestraModal();			

		function contadora(letra){
			let apariciones=0;
			for(i=0;i<nombre.length;i++){
				if(nombre[i]==letra){
					apariciones=apariciones+1;;
				}
			}
			if(estadistica.has(letra)==false){
				estadistica.set(letra,apariciones);
			}
		}

		function imprimeConsola(apariciones,letra){
			resultado=resultado+`<p>${letra} : ${apariciones}`;
		}	
}

function cuarto(id1,id2){
	let input1=recogeInput(id1);
	let input2=recogeInput(id2);
	let name=input1.split("");
	let surname=input2.split("");
	let resultado=`<p class="respuesta"> Llistat del array surname: </p>`;
	
	let fullName=name.concat("",surname);
	fullName.forEach(imprimeConsola);
	document.getElementById("res").innerHTML=resultado;
	muestraModal();			

	function imprimeConsola(letra,posicion){
		resultado=resultado+`<p>${posicion}: ${letra}</p>`;
	}	
}

function quinto(){
	var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';
	let patron= /\w+([-+.']\w+)*@\w+([-.]\w+)*/;
	let res=[];
	let resultado=`<p class="respuesta">Adresses de e-mail valides en el texte: </p>`;

	//Tratamos el texto para quitarnos carácteres problemáticos
	str=str.replace(/[\(\),:]/g," ");
	//Fraccionamos el texto en "palabras" o cadenas sin espacios y las guardamos en un array 
	let arrayTexto=str.split(" ");
	//comprobamos cada cadena
	arrayTexto.forEach(comprueba);
	resultado= resultado + `<p> ${res} </p>`;
	document.getElementById("res").innerHTML=resultado;
	muestraModal();	

	function comprueba(palabra){
		if(palabra.match(patron)){
			palabra=palabra.toLowerCase();
			if(res.includes(palabra)==false){
				res.push(palabra);
			}
		}
	}	
}
