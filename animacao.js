// setup do canvas e contexto
const canvas = document.getElementById('meuCanvas'); 
const ctx = canvas.getContext('2d'); // sollicita o contexto 2D do canvas

// define dimensões do canvas
canvas.width = 600;
canvas.height = 400;

console.log('Canvas e Contexto OK!'); // confirmação no console

// variáveis para a animação
const x = canvas.width / 2; // define a altura e largura do círculo...
const y = canvas.height / 2; // ...2 == centro do canvas
const radius = 150;// raio do círculo

let hue = 0; // inicia no vermelho
let isMouseOver = false; // variável para rastrear se o mouse está sobre o canvas

// --- GATILHOS DE INTERAÇÃO MOUS&CANVAS ---
// (mouse entrou no canvas)
canvas.addEventListener('mouseenter', function() { // quando o mouse entra no canvas
    isMouseOver = true; // define o estado como verdadeiro
    console.log("Mouse ENTROU - Acelerando"); // e imprime no console
});

// (mouse saiu do canvas)
canvas.addEventListener('mouseleave', function() { // quando o mouse sai do canvas,,,
    isMouseOver = false; // ...reseta o estado para falso
    console.log("Mouse SAIU - Desacelerando"); 
});

// função para desenhar o círculo
function desenharCirculo() { 
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`; // cor com opacidade
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2); // para um círculo completo, o ângulo final é 2 * PI (360 graus)
    ctx.fill(); // preenche o círculo
}

// função de loop de animação
function loopAnimacao() {

    ctx.clearRect(0, 0, canvas.width, canvas.height); // limpa o canvas

    // define a velocidade da mudança de cor
    let velocidadeGiro = 1; // Velocidade normal (1 passo por quadro)
    
    if (isMouseOver) {
        // se o mouse estiver em cima, aumenta a velocidade
        velocidadeGiro = 10; 
    }

    // incremento do 'hue' (matiz) com base na velocidade
    hue += velocidadeGiro; 
    
    if (hue >= 360) { // se o 'hue' ultrapassar 360...
        hue = 0; // ...reseta para 0
    }

    desenharCirculo(); // chama a função para desenhar o círculo
    
    requestAnimationFrame(loopAnimacao); // chama o loop novamente
}

requestAnimationFrame(loopAnimacao); // inicia o loop de animação

console.log('Animação iniciada!'); // confirmação no console