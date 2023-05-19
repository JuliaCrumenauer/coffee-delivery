import { useState } from 'react'

export function AddCart() {
  const [quantCart, setQuantCart] = useState(0)

  setQuantCart((anterior) => {
    return anterior + 1
  })
  console.log(setQuantCart)

  /* aqui em cima talvez eu tenha que mudar, pq preciso que o valor fique guardado numa variável e chamar
      a variável no Header, não executar toda a função de novo. Sacas? Tipo, quando eu clicar no add carrinho,
      é só pra aumentar o contador no Header, só isso. Quero só chamar o resultado.
      Vou tentar desse jeito mesmo chamar o setQuantCart assim mesmo, se não der, é pq tenho que mudar isso
      que anotei em cima.  Não funcionou chamar o setQuantCart, não consegui importar. É que teria que importar
      a função, não a variavel de dentro da função (eu acho, será que tem como?) 
      resolve criando outra função? que apenas receba o valor que eu quero passar
      acho que não precisa, acho que tem como eu pegar o que eu quero sem ter que dividir a função.
      só não sei como faz.

      Tá olha só, não sei se tô no caminho ou não (de alguma forma sim), mas:
      Quando eu clico eu acho que ele tá chamando a função sim, mas não tá aumentando o valor que eu
      preciso lá em cima. Tive uma ideia, vou tentar implementar.
      */

  // Acho que vou apagar esse arquivo, que ele vai ser substituido pelo useCart

  return <p>{quantCart}</p>
}
