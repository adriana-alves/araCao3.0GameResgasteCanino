
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var resgatarDogTime  = 6000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'nivel1') {
	resgatarDogTime  = 6000
} else if(nivel === 'nivel2') {
	resgatarDogTime  = 3000
} else if (nivel === 'nivel3') {
	resgatarDogTime  = 750
}

function ajustarTamanhoCenario() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustarTamanhoCenario()

var timer = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(timer)
		clearInterval(mostrarDog)
		window.location.href = 'done.html'
	} else {
		document.getElementById('timer').innerHTML = tempo
	}
	
}, 1000)


function posicaoRandomica() {


	//remover o dog anterior (caso exista)
	if(document.getElementById('dog')) {
		document.getElementById('dog').remove()
	
		if(vidas > 3) {

			window.location.href = 'fimGame.html'
		} else {
			document.getElementById('vida' + vidas).src = "imagens/coracaoVazio.png"

			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var dog  = document.createElement('img')
	dog.src = 'imagens/dog.png'
	dog.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	dog.style.left = posicaoX + 'px'
	dog.style.top = posicaoY + 'px'
	dog.style.position = 'absolute'
	dog.id = 'dog'
	dog.onclick = function() {
		this.remove()
	}

	document.body.appendChild(dog )

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'dog1 '
		
		case 1:
			return 'dog2 '

		case 2:
			return 'dog3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}

