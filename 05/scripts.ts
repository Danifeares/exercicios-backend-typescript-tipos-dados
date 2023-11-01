const soletradora = (palavra: string): string => {
  const resultado = palavra.split('').join('-') //split para separar em array e join para juntar o array em string novamente
  return resultado
}

console.log(soletradora('Daniela'))