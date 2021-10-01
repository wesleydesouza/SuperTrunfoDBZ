let cartas = [
    carta1 = {
        nome: "Yamcha",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/a/a9/Yamcha.jpg",
        atributos: {
            ataque: 4,
            defesa: 3,
            magia: 4
        },
    },
    carta2 = {
        nome: "Kuririn",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/6/63/Kuririn_42311.png",
        atributos: {
            ataque: 5,
            defesa: 2,
            magia: 4
        },
    },
    carta3 = {
        nome: "Piccolo",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/Piccolo_Jr.jpg/220px-Piccolo_Jr.jpg",
        atributos: {
            ataque: 7,
            defesa: 4,
            magia: 6
        },
    },
    carta4 = {
        nome: "Goku",
        imagem: "https://revistabula.com/wp/wp-content/uploads/2019/09/goku.jpg",
        atributos: {
            ataque: 9.5,
            defesa: 8,
            magia: 9
        },
    },
    carta5 = {
        nome: "Vegeta",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/a/ac/Vegeta.jpg",
        atributos: {
            ataque: 8,
            defesa: 9,
            magia: 8.5
        },
    },
    carta6 = {
        nome: "Gohan",
        imagem: "https://conteudo.imguol.com.br/c/entretenimento/9c/2017/07/14/gohan-1500057808905_v2_450x337.jpg",
        atributos: {
            ataque: 7.5,
            defesa: 6,
            magia: 7
        },
    },
    carta7 = {
        nome: "Cell",
        imagem: "https://i.pinimg.com/originals/73/be/02/73be02b2c2c0e1acf8d78a8d754f317d.jpg",
        atributos: {
            ataque: 8,
            defesa: 7,
            magia: 8.5
        },
    },
    carta8 = {
        nome: "Mr. Satan",
        imagem: "https://www.einerd.com.br/wp-content/uploads/2021/02/Mr.-Satan-Dragon-Ball-capa-890x466.jpg",
        atributos: {
            ataque: 1.5,
            defesa: 1,
            magia: 0
        },
    },
    carta9 = {
        nome: "Freeza",
        imagem: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/01/legiao_XBG01F9VmoRv.jpg.jpeg",
        atributos: {
            ataque: 9,
            defesa: 8.5,
            magia: 8.5
        },
    },
    carta10 = {
        nome: "Kid Buu",
        imagem: "https://www.einerd.com.br/wp-content/uploads/2019/06/kid-boo-dragon-ball-z-e1561124676530.jpg",
        atributos: {
            ataque: 9.5,
            defesa: 7.5,
            magia: 9
        },
    },
];

let cartaJogador;
let cartaPc;

function sortearCarta(){
    
    let numeroCartaPc = parseInt(Math.random() * cartas.length);
    let numeroCartaJogador = parseInt(Math.random() * cartas.length);
    
    cartaPc = cartas[numeroCartaPc];
   
    while(numeroCartaPc === numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length);
    };

    cartaJogador = cartas[numeroCartaJogador];

    console.log(cartaJogador);

    //desabilitando o botao sortear e habilitando botao jogar

    if(cartaJogador && cartaPc){
        document.getElementById("btnJogar").disabled = false;
        document.getElementById("btnSortear").disabled = true;
    };

   
    exibirCartaJogador();
};



function obterAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");
    
    for(let i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked){
            return radioAtributos[i].value;
        };
    };
};

function jogar() {
    let atributoSelecionado = obterAtributoSelecionado();
    let elementoResultado = document.getElementById("resultado");
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaPc = cartaPc.atributos[atributoSelecionado];
    let htmlResultado;

    if(valorCartaJogador > valorCartaPc) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
    }else if(valorCartaJogador < valorCartaPc){
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";

    }else{
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    };

    elementoResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;

    exibirCartaPc();
};

function exibirCartaJogador(){
    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`;
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHtml = "<div id='opcoes' class='carta-status'>"
    let opcoesTexto = "";


    for(let atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value= '" + atributo + "' checked>"+ atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    };
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";
};

function exibirCartaPc() {
    let divCartaPc = document.getElementById("carta-maquina");
    divCartaPc.style.backgroundImage=`url(${cartaPc.imagem})`;
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHtml = "<div id='opcoes' class='carta-status'>"
    let opcoesTexto = "";


    for(let atributo in cartaPc.atributos){
        opcoesTexto += "<p name='atributo' value= '" + atributo + "'>"+ atributo + " " + cartaPc.atributos[atributo] + "</p>";
    };
    let nome = `<p class="carta-subtitle">${cartaPc.nome}</p>`

    divCartaPc.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";
};

//https://imersao.dev/aulas/aula07-supertrunfo