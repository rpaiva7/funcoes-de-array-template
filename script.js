
/* FUNÇÕES podem ser atribuídas à VARIÁVEIS.
   FUNÇÕES esperam receber VARIÁVEIS como entrada.

portanto:

FUNÇÕES podem receber FUNÇÕES como entrada!!!!

CALLBACK.

Callback são funções que são passadas como parâmetro para outras funções. Elas recebem este nome porque são usadas no fim da função principal ou depois de uma etapa importante dela.

Quando trabalhamos sozinhos, fora de um formato de “linha de montagem”, nosso fluxo depende apenas de nós mesmos. Quando precisamos passar instruções para uma parte terceira, devemos esperar que ela nos “ligue de volta” (Callback) ao terminar de executar suas instruções.

Nem sempre o JavaScript vai conseguir executar nossos códigos de forma instantânea. Por vezes, vamos precisar que algum processo termine antes de prosseguir, e os callbacks são formas simples de garantir que nosso código vai seguir a ordem esperada.

Declare duas funções: 

 - A primeira deve receber um array de números, e retornar todos os números do array multiplicados por 3;

 - A segunda deve receber um array de números, e retornar um array apenas com os números pares */

// Primeira função

/* const  listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const multiplicaPorTres = (arrayDeNumeros) => {
  const arrayMultiplicado = []

  for(let numero of arrayDeNumeros)
  {
    arrayMultiplicado.push(numero * 3)
  }

  return arrayMultiplicado
}

console.log('TRIPLO', multiplicaPorTres(listaDeNumeros)); */


// Segunda função

/* const retornaPares = (arrayDeNumeros) => {
  const arrayPares = []

  for(let numero of arrayDeNumeros) {
    if(numero % 2 === 0){
      arrayPares.push(numero)
    }
  }

  return arrayPares
}

console.log('PARES', retornaPares(listaDeNumeros)); */


/* Em seguida, crie uma função que deve receber como parâmetros um array e uma função. O corpo da função deve chamar a função callback, passando o array argumento e guardando o valor do novo array em uma variável. Em seguida, esta função vai imprimir os valores do novo array no console. */

// Função de callback.
// Comm o callback você faz uma lógica onde com o primeiro parâmetro você busca o array que você quer usar, e no segundo parâmetro a função que você quer usar, dando a possibilidade fazer várias combinações de arrays e funções diferentes.

/* const imprimeNumeros = (arrayDeNumeros, callback) => {
   const response = callback(arrayDeNumeros)

   console.log('Imprime números com callback', response);
}

imprimeNumeros(listaDeNumeros, multiplicaPorTres)
imprimeNumeros(listaDeNumeros, retornaPares) */

// Map()

/* Refaça o item "A primeira deve receber um array de números, e retornar todos os números do array, multiplicados por 3", dessa vez utilizando a função de array map() */

/* const multiplicaPorTresComMap = listaDeNumeros.map ((numero, indice, array) => {
  return numero * 3
})

console.log('MAP', multiplicaPorTresComMap); */

// Nesse exercício o map vai pegar cada item numero da lista e multiplicar por 3.

/* No caso do map, eu não precisa fazer um laço, eu tô fazendo um for...of dentro, eu não preciso criar um array, pra depois colocar conteúdo dentro desse array. Isso tudo o map faz sozinho. ele já sabe que ele vai ter que gerar outro array, ele já sabe que ele vai ter que cuspir o array pra fora, e ele já sabe que ele vai olhar item por item. Isso já tá dentro da construção do map. Pq? Pq a gente lida muito com arrays, então pra facilitar, foi criado o método. Ele é um laço exclusivo de array. */

// Filter

/* Definição: filter significa "filtrar"

Utilização: quando queremos criar um NOVO array retirando (ou não) alguns itens do array original.

Input: somente uma função de callback.
Output: um novo array com tamanho igual ou menor ao tamanho do array original.

Filter pode receber três parâmetros:

- primeiro: corresponde ao valor do elemento do array naquela etapa do loop (**item**)
- segundo: o valor do índice daquele elemento (**index**)
- terceiro: o array original em si (**array**)

Filter deve retornar um boleano(`true`/`false`) */

/* Refaça o item "A segunda deve receber um array de números, e retornar um array apenas com os números pares", dessa vez utilizando a função filter() */

/* const retornaParesComfilter = listaDeNumeros.filter((numero, indice, array) => { // indice e array não são usados nesse exemplo mas podem ser úteis em outras situações. Seu eu deixar só o parâmetro numero, que é um item, ainda vai funcionar.
   return numero % 2 === 0
})

console.log('FILTER', retornaParesComfilter); */

/* Map e filter funcionam como laços. As saídas (outputs) dessas funções são diferentes, mas todas elas esperam receber um callback como entrada (input).

Essa função de callback vai ser chamada cada vez que avançamos em um elemento do array, ou seja, essas funções também servem para ler item por item de um array, e cada uma tem vantagens e usos diferentes!

A função do map é olhar e fazer algo com cada um dos itens do array. No exemplo ele multiplicou os itens (numeros) por 3. O filter não altera nenhum item, ele olha pro item e vê se ele obedece a regra que coloquei no return, que nesse caso é se cada item é divisível por 2. Ele sempre retorna um boleano, true ou false. O map pode alterar um array, e o filter só checa uma condição e devolve o que se encaixa nessa condição.

95% das vezes a gente só vai usar o map/filter com o primeiro parametro (item). 

A função é uma caixa preta. A gente coloca alguma coisa dentro da caixa, acontece uma mágica ali dentro, e aí a caixa cospe alguma coisa pra fora. Isso é uma função. Quando essa caixinha precisa receber informações de fora pra fazer a mágica acontecer, essas informações de fora a gente chama de parâmetros ou argumentos. Vamos supor que a mágica que a nossa caixa preta faixa faz é dar oi para uma pessoa chamando ela pelo nome. A gente consegue colocar todos os nomes possíveis do mundo dentro da caixinha preta? Não. A gente precisa trazer a informação de fora. Se estou trazendo de fora, isso é um argumento, pq aí dentro da caixa preta a função sabe que ela precisa pegar esse nome de fora da pessoa e dar oi. Isso é um parâmetro, coisas que a função precisa, mas não está dentro dela. 

Se eu pensar numa função pra fazer bolos, o callback seria uma função para misturar os ingredientes secos dentro da função principal para fazer bolos.*/


/* Exercício de Fixação

Com o array de pokémons do template, faça o seguinte:
 A. Crie uma função que receba como parâmetro o objeto pokémon, e que defina a propriedade vida do pokémon como 100;
 B. Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback;
 C. Crie uma constante pokemonsDeFogo, e utilize a função de array filter(), passando uma função não-nomeada como argumento de callback. */

 

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

// Parte A - Alterar o valor da vida de um objeto.

const aumentaVida = (poke) => {
  return {
    nome: poke.nome,
    tipo: poke.tipo,
    vida: 100
  }
 // return {...poke, vida: 100} // Outra forma de return com o mesmo resultado.
}

const pikachu = {
  nome: 'Pikachu',
  tipo: 'elétrico',
  vida: 35
}

console.log(pikachu)

console.log('Aumentando a vida do Pikachu:', aumentaVida(pikachu)); 

// A função aumentaVida recebeu o objeto poke como parâmetro.

// O callback olha para uma parte menor, nesse caso para um objeto dentro do array, e não para o array inteiro. O map possibilita que peguemos uma função que altera somente uma propriedade do objeto e ele sozinho vai aplicar essa função para todos os objetos e itens do array, sem que eu precise alterar um por um dos objetos do array. O map replica a função que altera um único objeto daquele array para todos os abjetos.   

// Parte B - Pegar essa função que altera o valor da vida de um objeto e jogar dentro do map, e o map sozinho invoca essa função para cada um dos objetos, retornando 100 de vida para todos.

const pokemonsVidaCheia = pokemons.map(aumentaVida) // Aqui eu puxei pra dentro do map uma função que eu já tinha criado.

console.log('Pokémons Vida Cheia', pokemonsVidaCheia)

// outra forma de chegar nesse resultado seria:

/* const pokemonsVidaCheia = pokemons.map((poke) => poke.vida = 100) // Desse outro jeito eu coloquei a função diretamente aqui, e não usei a função que eu já tinha criado.

console.log(pokemons); */

// Parte C - Esse filter vai olhar cada objeto pokemon do meu array de pokemons e vai olhar pro tipo desse objeto, e capturar somente os pokemons cujos tipos dos objetos forem fogo.  

const pokemonsDeFogo = pokemons.filter((poke) => {
  return poke.tipo === 'fogo'
}) 

console.log('FOGO', pokemonsDeFogo);

// Se eu quisesse eu poderia alterar a vida desses dois pokemons de fogo para 100 através da criação dessa nova função abaixo:

/* const pokeFogoVidaCheia = pokemonsDeFogo.map(aumentaVida)

console.log('FOGO VIDA 100', pokeFogoVidaCheia); */


/* Relembrando: o map vai olhar para o array inteiro e fazer alguma coisa/alteração com cada um dos itens desse array. Ex. o map mudou a vida de todos os pokemons para 100. No caso do filter, ele não muda os valores dos itens do array, ele só filtra e retorna o que pedirmos pra ele. Ex. filtrou os pokemons de tipo fogo e retornou apenas estes pokemons. */

