new Vue({
    el: '#app',
    data: {
        jogador1: 'Tiago Rocha Sarno',
        jogador2: 'Monstro Bison',
        lifeJogador: 100,
        lifeMonstro: 100,
        logs: [],
        gameOver: false,
        corJogador: 'yellow',
        corMonstro: 'yellow',
        resultado: '',
    },
    methods: {
        iniciar(){
            const lifeAtualJogador = setInterval(() => {
                this.lifeJogador -= 5
                if(this.lifeJogador == 0) clearInterval(lifeAtualJogador)
            },500)
        },
        contraAtaque(){
            return Math.floor(Math.random() * 10);
        },
        random(){
            return Math.floor(Math.random() * 10);
        },
        especial(){
            return Math.floor(Math.random() * 70);
        },
        atacar(){
            let ataque = this.random();
            this.lifeMonstro -= ataque;
            this.lifeMonstro >= 40 ? this.corMonstro = 'yellow' : this.corMonstro = 'red'            

            let contraAtaque = this.contraAtaque();
            this.lifeJogador -= contraAtaque;
            this.lifeJogador >= 40 ? this.corJogador = 'yellow' : this.corJogador = 'red'

            this.logs.unshift(`Monstro contra-atacou com ${contraAtaque} de dano`);
            this.logs.unshift(`Jogador atacou com ${ataque} de dano`);
        },
        atacarEspecial(){
            let ataque = this.especial();
            this.lifeMonstro -= ataque;
            this.lifeMonstro >= 40 ? this.corMonstro = 'yellow' : this.corMonstro = 'red'            

            let contraAtaque = this.contraAtaque();
            this.lifeJogador -= contraAtaque;
            this.lifeJogador >= 40 ? this.corJogador = 'yellow' : this.corJogador = 'red'

            this.logs.unshift(`Monstro contra-atacou com ${contraAtaque} de dano`);
            this.logs.unshift(`Jogador ataque especial com ${ataque} de dano`);
        },
        reset(){
            this.lifeJogador = 100
            this.lifeMonstro = 100
            this.gameOver = false
            this.logs = []
            this.corJogador = 'yellow'
            this.corMonstro = 'yellow'
        }
    },
    watch: {
        lifeJogador(){            
            if (this.lifeJogador <= 0) {
                this.lifeJogador = 0;
                this.gameOver = true;
                this.resultado = 'Monstro ganhou!'
            }
        },
        lifeMonstro(){
            if (this.lifeMonstro <= 0) {
                this.lifeMonstro = 0;
                this.gameOver = true;
                this.resultado = 'Jogador ganhou!'
            }
        }
    }
});