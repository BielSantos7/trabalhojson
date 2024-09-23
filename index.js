const aluno = [
  {
    nome: "Gabriel",
    idade: 17,
    curso: "Ciências da Computação",
    notasJavaScript: [6, 5, 8],
  },
];

console.log(aluno[0].nome);
console.log(aluno[0].notasJavaScript[0]);

aluno[0].idade = 22;
console.log(aluno[0].idade);

aluno[0].notasJavaScript.push(10);
console.log(aluno[0].notasJavaScript);


// Conversao de stringify para JSON
let alunoString = JSON.stringify(aluno)
console.log(alunoString)
alunoParse = JSON.parse(alunoString)
console.log(alunoParse)




let Gabriel = aluno[0];
for (let i in Gabriel) {
  console.log(Gabriel[i]);
}


let soma = aluno[0].notasJavaScript.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

let mediaDasNotas = soma / aluno[0].notasJavaScript.length;
console.log(mediaDasNotas);

aluno[0].endereco = {
  rua: "rua poeta luiz raimundo",
  estado: "Paraíba",
  cidade: "João Pessoa",
};

console.log(aluno[0].endereco.estado, aluno[0].endereco.cidade);


const alunos = [
  {
   ...aluno[0]
  },
  {
    nome: "Leticia",
    idade: 19,
    curso: "Sistemas de Informação",
    notasJavaScript: [7, 5, 7],
    endereco: {
      
      rua: "rua ruy carneiro",
      estado: "Paraíba",
      cidade: "João Pessoa",
    },
  },
  {
    nome: "Victor",
    idade: 18,
    curso: "Análise e Desenvolvimento de Sistemas",
    notasJavaScript: [5, 8, 8],
    endereco: {...aluno[0].endereco}
  }
];

let media;
const nomesMaior8 = alunos.filter((aluno) => {
  let media = aluno.notasJavaScript.reduce((soma, nota) => soma + nota, 0) / aluno.notasJavaScript.length;
  return media > 8;
})
.map((aluno) => aluno.nome)

console.log(`Os alunos que tiveram a média maior que 8 são ${nomesMaior8.join(", ")} `);


