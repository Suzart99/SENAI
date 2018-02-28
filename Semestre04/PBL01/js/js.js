corpoTabela = document.querySelector("tbody")
nome = document.getElementById('nome')

  var alimentosSeis = document.getElementsByName('alimento06')
  var porcaoSeis = document.getElementsByName('porcao06')

  var alimentosNove = document.getElementsByName('alimento09')
  var porcaoNove = document.getElementsByName('porcao09')

  var alimentosDoze = document.getElementsByName('alimento12')
  var porcaoDoze = document.getElementsByName('porcao12')

  var alimentosQz = document.getElementsByName('alimento15')
  var porcaoQz = document.getElementsByName('porcao15')

  var alimentosDz = document.getElementsByName('alimento18')
  var porcaoDz = document.getElementsByName('porcao18')

  var alimentosVum = document.getElementsByName('alimento21')
  var porcaoVum = document.getElementsByName('porcao21')

  btnSort = document.getElementById('btnSort')

   a =  Math.floor(Math.random() * 3) + 0 
   b =  Math.floor(Math.random() * 3) + 0 
   c =  Math.floor(Math.random() * 3) + 0 
   d =  Math.floor(Math.random() * 3) + 0 
   e =  Math.floor(Math.random() * 3) + 0 
   f =  Math.floor(Math.random() * 3) + 0



function verificaCampo(){
	validarFormNome()
}



function criarLinha(){

	criarLinha06()
	criarLinha09()
	criarLinha12()
	criarLinha15()
	criarLinha18()
	criarLinha21()
}

function criarLinha06(){

 
	linha = document.createElement("tr")
	campoHora = document.createElement("td")
	campoAlimento = document.createElement("td")
	campoPorcao = document.createElement("td")


	txtHora = document.createTextNode('06:00')
	txtAlimento = document.createTextNode(alimentosSeis[a].value)
	txtPorcao = document.createTextNode(porcaoSeis[a].value)
	
	campoHora.appendChild(txtHora)
	campoAlimento.appendChild(txtAlimento)	
	campoPorcao.appendChild(txtPorcao)

	linha.appendChild(campoHora)
	linha.appendChild(campoAlimento)
	linha.appendChild(campoPorcao)

	corpoTabela.appendChild(linha)
}

function criarLinha09(){
  
	linha = document.createElement("tr")
	campoHora = document.createElement("td")
	campoAlimento = document.createElement("td")
	campoPorcao = document.createElement("td")


	txtHora = document.createTextNode('09:00')
	txtAlimento = document.createTextNode(alimentosNove[b].value)
	txtPorcao = document.createTextNode(porcaoNove[b].value)
	
	campoHora.appendChild(txtHora)
	campoAlimento.appendChild(txtAlimento)	
	campoPorcao.appendChild(txtPorcao)

	linha.appendChild(campoHora)
	linha.appendChild(campoAlimento)
	linha.appendChild(campoPorcao)

	corpoTabela.appendChild(linha)
}

function criarLinha12(){

  
	linha = document.createElement("tr")
	campoHora = document.createElement("td")
	campoAlimento = document.createElement("td")
	campoPorcao = document.createElement("td")


	txtHora = document.createTextNode('12:00')
	txtAlimento = document.createTextNode(alimentosDoze[c].value)
	txtPorcao = document.createTextNode(porcaoDoze[c].value)
	
	campoHora.appendChild(txtHora)
	campoAlimento.appendChild(txtAlimento)	
	campoPorcao.appendChild(txtPorcao)

	linha.appendChild(campoHora)
	linha.appendChild(campoAlimento)
	linha.appendChild(campoPorcao)

	corpoTabela.appendChild(linha)
}

function criarLinha15(){

  
	linha = document.createElement("tr")
	campoHora = document.createElement("td")
	campoAlimento = document.createElement("td")
	campoPorcao = document.createElement("td")


	txtHora = document.createTextNode('15:00')
	txtAlimento = document.createTextNode(alimentosQz[d].value)
	txtPorcao = document.createTextNode(porcaoQz[d].value)
	
	campoHora.appendChild(txtHora)
	campoAlimento.appendChild(txtAlimento)	
	campoPorcao.appendChild(txtPorcao)

	linha.appendChild(campoHora)
	linha.appendChild(campoAlimento)
	linha.appendChild(campoPorcao)

	corpoTabela.appendChild(linha)
}

function criarLinha18(){

  
	linha = document.createElement("tr")
	campoHora = document.createElement("td")
	campoAlimento = document.createElement("td")
	campoPorcao = document.createElement("td")


	txtHora = document.createTextNode('18:00')
	txtAlimento = document.createTextNode(alimentosDz[e].value)
	txtPorcao = document.createTextNode(porcaoDz[e].value)
	
	campoHora.appendChild(txtHora)
	campoAlimento.appendChild(txtAlimento)	
	campoPorcao.appendChild(txtPorcao)

	linha.appendChild(campoHora)
	linha.appendChild(campoAlimento)
	linha.appendChild(campoPorcao)

	corpoTabela.appendChild(linha)
}

function criarLinha21(){

  
	linha = document.createElement("tr")
	campoHora = document.createElement("td")
	campoAlimento = document.createElement("td")
	campoPorcao = document.createElement("td")


	txtHora = document.createTextNode('21:00')
	txtAlimento = document.createTextNode(alimentosVum[f].value)
	txtPorcao = document.createTextNode(porcaoVum[f].value)
	
	campoHora.appendChild(txtHora)
	campoAlimento.appendChild(txtAlimento)	
	campoPorcao.appendChild(txtPorcao)

	linha.appendChild(campoHora)
	linha.appendChild(campoAlimento)
	linha.appendChild(campoPorcao)

	corpoTabela.appendChild(linha)
}



function validarFormNome(){

if((nome.value == "") || (nome.value == null) || (/^\s+$/.test(nome.value))  ){
	document.getElementById("nome").focus();
		nome.style.background = "red";
	alert('FORMULÁRIO NÃO VALIDADO, POIS EXISTE(M) CAMPO(S) VAZIO(S)');
return false;

}
nome.style.background = null;
validaFormAlimento();
}

function validaFormAlimento(){

	for (var i = 0; i < 3; i++) {
	if((alimentosSeis[i].value == "") || (alimentosSeis[i].value == null) || (/^\s+$/.test(alimentosSeis[i].value))  ){
			alert("Existe(m) campo(s) vazio(s)")
		return false;

	}
	if((alimentosNove[i].value == "") || (alimentosNove[i].value == null) || (/^\s+$/.test(alimentosNove[i].value))  ){
			alert("Existe(m) campo(s) vazio(s)")
		return false;
	}

	if((alimentosDoze[i].value == "") || (alimentosDoze[i].value == null) || (/^\s+$/.test(alimentosDoze[i].value))  ){
			alert("Existe(m) campo(s) vazio(s)")
		return false;
	}
	if((alimentosQz[i].value == "") || (alimentosQz[i].value == null) || (/^\s+$/.test(alimentosQz[i].value))  ){
			alert("Existe(m) campo(s) vazio(s)")
		return false;
	}
	if((alimentosDz[i].value == "") || (alimentosDz[i].value == null) || (/^\s+$/.test(alimentosDz[i].value))  ){
			alert("Existe(m) campo(s) vazio(s)")
		return false;
	}
	if((alimentosVum[i].value == "") || (alimentosVum[i].value == null) || (/^\s+$/.test(alimentosVum[i].value))  ){
			alert("Existe(m) campo(s) vazio(s)")
		return false;
	}

}

validaFormPorcao();

}

function validaFormPorcao(){
for (var i = 0; i < 3; i++) {
	if((porcaoSeis[i].value == "") || (porcaoSeis[i].value == null) || (/^\s+$/.test(porcaoSeis[i].value))  ){
			alert("Existe(m) campo(s) vazio(s)")
		return false;

	}
	if((porcaoNove[i].value == "") || (porcaoNove[i].value == null) || (/^\s+$/.test(porcaoNove[i].value))  ){
			alert("Existe(m) campo(s) vazio(s)")
		return false;
	}

	if((porcaoDoze[i].value == "") || (porcaoDoze[i].value == null) || (/^\s+$/.test(porcaoDoze[i].value))  ){
			alert("Existe(m) campo(s) vazio(s)")
		return false;
	}
	if((porcaoQz[i].value == "") || (porcaoQz[i].value == null) || (/^\s+$/.test(porcaoQz[i].value))  ){
			alert("Existe(m) campo(s) vazio(s)")
		return false;
	}
	if((porcaoDz[i].value == "") || (porcaoDz[i].value == null) || (/^\s+$/.test(porcaoDz[i].value))  ){
			alert("Existe(m) campo(s) vazio(s)")
		return false;
	}
	if((porcaoVum[i].value == "") || (porcaoVum[i].value == null) || (/^\s+$/.test(porcaoVum[i].value))  ){
			alert("Existe(m) campo(s) vazio(s)")
		return false;
	}
}

criarLinha()
desabilitaInput()
document.getElementById('btnSort').disabled=true

}

function desabilitaInput(){


	document.getElementById("alimento61").disabled = true
	document.getElementById("alimento62").disabled = true
	document.getElementById("alimento63").disabled = true
	document.getElementById("alimento91").disabled = true
	document.getElementById("alimento92").disabled = true
	document.getElementById("alimento93").disabled = true
	document.getElementById("alimento121").disabled = true
	document.getElementById("alimento122").disabled = true
	document.getElementById("alimento123").disabled = true
	document.getElementById("alimento151").disabled = true
	document.getElementById("alimento152").disabled = true
	document.getElementById("alimento153").disabled = true
	document.getElementById("alimento181").disabled = true
	document.getElementById("alimento182").disabled = true
	document.getElementById("alimento183").disabled = true
	document.getElementById("alimento211").disabled = true
	document.getElementById("alimento212").disabled = true
	document.getElementById("alimento213").disabled = true


	document.getElementById("porcao61").disabled = true
	document.getElementById("porcao62").disabled = true
	document.getElementById("porcao63").disabled = true
	document.getElementById("porcao91").disabled = true
	document.getElementById("porcao92").disabled = true
	document.getElementById("porcao93").disabled = true
	document.getElementById("porcao121").disabled = true
	document.getElementById("porcao122").disabled = true
	document.getElementById("porcao123").disabled = true
	document.getElementById("porcao151").disabled = true
	document.getElementById("porcao152").disabled = true
	document.getElementById("porcao153").disabled = true
	document.getElementById("porcao181").disabled = true
	document.getElementById("porcao182").disabled = true
	document.getElementById("porcao183").disabled = true
	document.getElementById("porcao211").disabled = true
	document.getElementById("porcao212").disabled = true
	document.getElementById("porcao213").disabled = true
}