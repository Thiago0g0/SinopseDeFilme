class Filme {

    constructor(Titulo, Lancamento, Duracao, Elenco, Sinopse, Nota) {
        this.Titulo = Titulo;
        this.Lancamento = Lancamento;
        this.Duracao = Duracao;
        this.Elenco = Elenco;
        this.Sinopse = Sinopse;
        this.Nota = Nota;
    }

    falarTitulo(){
        return `Titulo filme é  ${this.Titulo}`
    }
}

let filme = new Filme('O Pressagio','20 de março de 2009','2h 1m','Nicolas Cage, Rose Byrne, Chandler Canterbury, Lara Robinso','4.3/5');
console.log(filme.falarTitulo());