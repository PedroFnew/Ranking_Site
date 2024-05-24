/* Primeiro precisamos calcular a winrate do usuario:  winrate = vitorias / derrotas
Com a winrate calculamos os pontos de rank: pontosRank = vitorias * winrate
Jogadores com uma winrate abaixo de 50% devem ganhar mais 15% a mais em pontos de rank
Se os pontos de rank do jogador for menor que 25, ele nao tem rank


Entre 25 e 99 o jogador esta no rank Bronze
Entre 100 e 499 o jogador esta no rank Prata
Entre 500 e 1499 o jogador esta no rank Ouro
Entre 1500 e 2999 o jogador esta no rank Safira

Vitorias id="vitorias"
Derrotas id="derrotas"
Winrate id="winrate"
PontosRank id="pontosRank"

E se o rank do jogador for maior ou igual a 3000, ele esta no rank Diamante */

function verificar(){
    const vitorias = parseInt(document.getElementById("vitorias").value);
    const derrotas = parseInt(document.getElementById("derrotas").value);

    const winrate = vitorias / derrotas;
    let pontosRank = vitorias * winrate;
    let vito_derr = vitorias - derrotas;

    if (winrate < 0.5) {
        pontosRank = pontosRank + (pontosRank * 15 / 100);
    }

    let rank;

    switch (true) {
        case (pontosRank < 25):
            rank = "Jogador sem rank";
            break;

        case (pontosRank > 25 && pontosRank < 99):
            rank = "Broze";
            break;

        case (pontosRank > 100 && pontosRank < 499):
            rank = "Prata";
            break;

        case (pontosRank > 500 && pontosRank < 1499):
            rank = "Ouro";
            break;

        case (pontosRank > 1500 && pontosRank < 2999):
            rank = "Safira";
            break;

        case (pontosRank > 3000):
            rank = "Diamante";
            break;
            
        default:
            rank = "Erro de calculo!";
            break;
    }

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `O jogador tem um saldo de ${vito_derr} vitorias, e está no rank ${rank}`;
}
