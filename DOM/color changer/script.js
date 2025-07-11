const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

const div = document.querySelector('.canva')
div.style.display = 'flex'
div.style.flexDirection = 'column'
div.style.alignItems = 'center'
div.style.justifyContent = 'center'


buttons.forEach(function (buttons){
  console.log(buttons)
  buttons.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'cyan'){
      body.style.backgroundColor = e.target.id
    }
  })
})