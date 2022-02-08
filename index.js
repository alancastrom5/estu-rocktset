// criar um programa que calcula a media 
// das turmas de alunos e envia
// mensagem do calculo da media

const alunosDaturmaA = [
    {
        nome: "mayk",
        nota: 1.8
    },
    {
        nome: "diego",
        nota: 10
    },
    {
        nome: "fulano",
        nota: 2
    },
    {
        nome: 'mais um aluno',
        nota: 10
    }
]


const alunosDaturmaB = [
    {
        nome: "cleiton",
        nota: 10
    },
    {
        nome: "robson",
        nota: 10
    },
    {
        nome: "siclano",
        nota: 0
    },
    {
        nome: 'novo aluno',
        nota: 5
    }
    
]


function calculaMedia(alunos) {
    let soma = 0; 
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaturmaA)
const media2 = calculaMedia(alunosDaturmaB)
  
  
function enviaMensagem(media, turma) {
        // se a media for maior que 5, parabenizar a turma 
    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}. parabens`)
    } else {
    console.log(`A media da turma ${turma} e menor que 5`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')
//console.log()
