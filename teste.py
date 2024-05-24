'''Primeiro precisamos calcular a winrate do usuario:  winrate = vitorias / derrotas
Com a winrate calculamos os pontos de rank: pontosRank = vitorias * winrate
Jogadores com uma winrate abaixo de 50% devem ganhar mais 15% a mais em pontos de rank
Se os pontos de rank do jogador for menor que 25, ele nao tem rank'''



'''vitorias = int(input('Vitorias:'))
derrotas = int(input('Derrotas:'))

winrate = vitorias / derrotas

print(f'Winrate {winrate}')

pontosRank = vitorias * winrate

print(f'Postos Rank {pontosRank}')'''

value = int(input('Value:'))

# 15 %

value = value + (value * 15 / 100)

print(value)
