//pegando o elemento HTML dos botões
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
let index = 0;
let timerCarrosel = 4;

setInterval(() => {
	const imagemAtiva = document.querySelector('.ativa');
	imagemAtiva.classList.remove('ativa');
	if (!imagens[index]) {
		index = 0;
	}
	imagens[index].classList.add('ativa');
	index++;
}, timerCarrosel * 1000);

function destativarBotaoSelecionado() {
	const botaoSelecionado = document.querySelector('.selecionado');
	botaoSelecionado.classList.remove('selecionado');
}
