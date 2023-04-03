


let form = document.querySelector('form')

form.addEventListener('submit',(event) => {
  event.preventDefault()
})


let pegarValor = document.querySelector('#search')

let enviarValor = document.querySelector('#btnSearch')

let key = 'Hd6AUZKxHCzLbNs3xTdbi62TuVYMESV3'

const funcPegarFetch = async () => {
const pegarGif = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=1&q=${pegarValor.value}`)
return await pegarGif.json()

}
const pegarGif = document.querySelector('.out')

const callback =  async () => {
  let resultado = await funcPegarFetch()
  pegarGif.innerHTML = `<img src="${await resultado.data[0].images.original.webp}">`
  pegarValor.value = ''

}



enviarValor.addEventListener('click',callback)




