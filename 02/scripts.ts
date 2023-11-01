const listaDeUsuarios = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
]

const filtrarUsuarios = (
  lista: // parâmetro que vou receber:
    {
      nome: string,
      idade: number,
      status: boolean
    }[],
  usuario: string //segundo parametro, o que a função irá buscar
  ): { //retorno da função:
    nome: string,
    idade: number,
    status: boolean
  }[] => {
  const resultado = lista.filter((usuarioLista) => {
    return usuarioLista.nome.toLowerCase().includes(usuario.toLowerCase())
  })
  return resultado
}

console.log(filtrarUsuarios(listaDeUsuarios, 'a'))