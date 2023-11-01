const geradorDeEtiquetas = (
  produto: {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
  }
): string[] => {
  const resultado: string[] = [] // tipado como array de strings, e = [] significa que inicia como array vazio

  for (let i = 1; i <= produto.qtd; i++) {
    resultado.push(`${produto.lote}-${produto.ano}-${i.toString().padStart(3, '0')}`)
  }
  return resultado
}

const produto = {
  produto: 'CPU Dual Core 3.0GHZ',
  lote: 321,
  ano: 2022,
  qtd: 5
}

console.log(geradorDeEtiquetas(produto))