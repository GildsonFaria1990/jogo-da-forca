let tentativas = 6
let listaDinamica = []
let palavraSecretaCategoria
let palavraSecretaSorteada
const palavras = [
  (palavra001 = {
    nome: 'AFEGANISTAO',
    categoria: 'LUGARES'
  }),
  (palavra002 = {
    nome: 'ARGENTINA',
    categoria: 'LUGARES'
  }),
  (palavra003 = {
    nome: 'PAQUISTAO',
    categoria: 'LUGARES'
  }),
  (palavra004 = {
    nome: 'INDIA',
    categoria: 'LUGARES'
  }),
  (palavra005 = {
    nome: 'ANGOLA',
    categoria: 'LUGARES'
  }),
  (palavra006 = {
    nome: 'DUBAI',
    categoria: 'LUGARES'
  }),
  (palavra007 = {
    nome: 'ETIOPIA',
    categoria: 'LUGARES'
  }),
  (palavra008 = {
    nome: 'UZBEQUISTAO',
    categoria: 'LUGARES'
  }),
  (palavra009 = {
    nome: 'INDONESIA',
    categoria: 'LUGARES'
  }),
  (palavra010 = {
    nome: 'MOCAMBIQUE',
    categoria: 'LUGARES'
  }),
  (palavra011 = {
    nome: 'BICICLETA',
    categoria: 'TRANSPORTE'
  }),
  (palavra012 = {
    nome: 'LANCHA',
    categoria: 'TRANSPORTE'
  }),
  (palavra013 = {
    nome: 'NAVIO',
    categoria: 'TRANSPORTE'
  }),
  (palavra014 = {
    nome: 'TELEFERICO',
    categoria: 'TRANSPORTE'
  }),
  (palavra015 = {
    nome: 'MOTOCICLETA',
    categoria: 'TRANSPORTE'
  }),
  (palavra016 = {
    nome: 'BARCO',
    categoria: 'TRANSPORTE'
  }),
  (palavra017 = {
    nome: 'AERONAVE',
    categoria: 'TRANSPORTE'
  }),
  (palavra018 = {
    nome: 'TREM',
    categoria: 'TRANSPORTE'
  }),
  (palavra019 = {
    nome: 'CAIAQUE',
    categoria: 'TRANSPORTE'
  }),
  (palavra020 = {
    nome: 'FUNICULAR',
    categoria: 'TRANSPORTE'
  }),
  (palavra021 = {
    nome: 'XICARA',
    categoria: 'OBJETOS'
  }),
  (palavra022 = {
    nome: 'CARTEIRA',
    categoria: 'OBJETOS'
  }),
  (palavra023 = {
    nome: 'ESCADA',
    categoria: 'OBJETOS'
  }),
  (palavra024 = {
    nome: 'SINETA',
    categoria: 'OBJETOS'
  }),
  (palavra025 = {
    nome: 'CANIVETE',
    categoria: 'OBJETOS'
  }),
  (palavra026 = {
    nome: 'TROMPETE',
    categoria: 'OBJETOS'
  }),
  (palavra027 = {
    nome: 'LAMPARINA',
    categoria: 'OBJETOS'
  }),
  (palavra028 = {
    nome: 'APONTADOR',
    categoria: 'OBJETOS'
  }),
  (palavra029 = {
    nome: 'CORBERTOR',
    categoria: 'OBJETOS'
  }),
  (palavra030 = {
    nome: 'LAPISEIRA',
    categoria: 'OBJETOS'
  }),
  (palavra031 = {
    nome: 'MELAO',
    categoria: 'ALIMENTOS'
  }),
  (palavra032 = {
    nome: 'AMENDOA',
    categoria: 'ALIMENTOS'
  }),
  (palavra033 = {
    nome: 'HAMBURGUER',
    categoria: 'ALIMENTOS'
  }),
  (palavra034 = {
    nome: 'GORDURA',
    categoria: 'ALIMENTOS'
  }),
  (palavra035 = {
    nome: 'JANTAR',
    categoria: 'ALIMENTOS'
  }),
  (palavra036 = {
    nome: 'SABOR',
    categoria: 'ALIMENTOS'
  }),
  (palavra037 = {
    nome: 'JEJUM',
    categoria: 'ALIMENTOS'
  }),
  (palavra038 = {
    nome: 'MASTIGACAO',
    categoria: 'ALIMENTOS'
  }),
  (palavra039 = {
    nome: 'INGERIR',
    categoria: 'ALIMENTOS'
  }),
  (palavra040 = {
    nome: 'SORVETERIA',
    categoria: 'ALIMENTOS'
  }),
  (palavra040 = {
    nome: 'DROMEDARIO',
    categoria: 'ANIMAIS'
  }),
  (palavra041 = {
    nome: 'GAVIAO',
    categoria: 'ANIMAIS'
  }),
  (palavra042 = {
    nome: 'PACA',
    categoria: 'ANIMAIS'
  }),
  (palavra043 = {
    nome: 'CAMALEAO',
    categoria: 'ANIMAIS'
  }),
  (palavra044 = {
    nome: 'PORCO',
    categoria: 'ANIMAIS'
  }),
  (palavra045 = {
    nome: 'GIRAFA',
    categoria: 'ANIMAIS'
  }),
  (palavra046 = {
    nome: 'DRAGAO',
    categoria: 'ANIMAIS'
  }),
  (palavra047 = {
    nome: 'CAMELO',
    categoria: 'ANIMAIS'
  }),
  (palavra048 = {
    nome: 'MACACO',
    categoria: 'ANIMAIS'
  }),
  (palavra049 = {
    nome: 'LAGARTO',
    categoria: 'ANIMAIS'
  }),
  (palavra050 = {
    nome: 'AVESTRUZ',
    categoria: 'ANIMAIS'
  })
]

criarPalavraSecreta()
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length)

  palavraSecretaSorteada = palavras[indexPalavra].nome
  palavraSecretaCategoria = palavras[indexPalavra].categoria
}

montarPalavraNaTela()
function montarPalavraNaTela() {
  const categoria = document.getElementById('categoria')
  categoria.innerHTML = palavraSecretaCategoria

  const palavraTela = document.getElementById('palavra-secreta')
  palavraTela.innerHTML = ''

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = '&nbsp;'
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        '</div>'
    } else {
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        '</div>'
    }
  }
}

var letras = [...document.getElementsByClassName('botao-letra')]
letras.forEach(element => {
  element.addEventListener('click', verificaLetraEscolhida)
})
function verificaLetraEscolhida(event) {
  var letra = event.target.innerText
  document.getElementById('tecla-' + letra).disabled = true
  if (tentativas > 0) {
    mudarStyleLetra('tecla-' + letra)
    comparalistas(letra)
    montarPalavraNaTela()
  }
}

function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = '#C71585'
  document.getElementById(tecla).style.color = '#ffffff'
}

function comparalistas(letra) {
  const pos = palavraSecretaSorteada.indexOf(letra)
  if (pos < 0) {
    tentativas--
    carregaImagemForca()

    if (tentativas == 0) {
      abreModal(
        'OPS!',
        'Não foi dessa vez ... A palavra secreta era <br>' +
          palavraSecretaSorteada
      )
    }
  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra
      }
    }
  }

  let vitoria = true
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false
    }
  }

  if (vitoria == true) {
    abreModal('PARABÉNS!', 'Você venceu...')
    tentativas = 0
  }
}

function carregaImagemForca() {
  switch (tentativas) {
    case 6:
      document.getElementById('imagem').style.background =
        "url('./img/forca01.png')"

      break
    case 5:
      document.getElementById('imagem').style.background =
        "url('./img/forca02.png')"
      break
    case 4:
      document.getElementById('imagem').style.background =
        "url('./img/forca03.png')"
      break
    case 3:
      document.getElementById('imagem').style.background =
        "url('./img/forca04.png')"
      break
    case 2:
      document.getElementById('imagem').style.background =
        "url('./img/forca05.png')"
      break
    case 1:
      document.getElementById('imagem').style.background =
        "url('./img/forca06.png')"

      break
    case 0:
      document.getElementById('imagem').style.background =
        "url('./img/forca07.png')"
      break
    default:
      document.getElementById('imagem').style.background =
        "url('./img/forca.png')"
      break
  }
}

function abreModal(titulo, mensagem) {
  let modalTitulo = document.getElementById('exampleModalLabel')
  modalTitulo.innerText = titulo

  let modalBody = document.getElementById('modalBody')
  modalBody.innerHTML = mensagem

  $('#myModal').modal({
    show: true
  })
}

let bntReiniciar = document.querySelector('#btnReiniciar')
bntReiniciar.addEventListener('click', function () {
  location.reload()
})
