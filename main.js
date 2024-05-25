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

    /*
    Silver Sentinel Rank 1
    Golden Guardian Rank 2
    Platinum Protector Rank 3
    Emerald Enforcer Rank 4
    Ruby Ranger Rank 5
    Diamond Dynamo Rank 6
    */

    switch (true) {
        case (pontosRank < 25):
            rank = "JOGADOR SEM RANKING";
            break;

        case (pontosRank > 25 && pontosRank < 99):
            rank = "Silver Sentinel";
            break;

        case (pontosRank > 100 && pontosRank < 499):
            rank = "Emerald Enforcer";
            break;

        case (pontosRank > 500 && pontosRank < 1499):
            rank = "Golden Guardian";
            break;

        case (pontosRank > 1500 && pontosRank < 2999):
            rank = "Ruby Ranger";
            break;

        case (pontosRank > 3000):
            rank = "Diamond Dynamo";
            break;
            
        default:
            rank = "Erro de calculo!";
            break;
    }

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `O JOGADOR TEM UM SALDO DE ${vito_derr} VITORIAS, E ESTÁ NO RANK ${rank}`;
}
