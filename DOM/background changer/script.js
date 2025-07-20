const randomcolor = function(){
     const hex = '0123456789ABCDEF' ;
     let color = '#';
     for(i = 0; i<6;i++){
          color += hex[Math.floor(Math.random()*16)]
     }
     return color;
     
}

let changebg;
document.querySelector('#start').addEventListener('click', function(){
     if(!changebg){
          changebg = setInterval(() => {
               document.body.style.backgroundColor = randomcolor()
          }, 1000);
     }
})

document.querySelector('#stop').addEventListener('click', function(){
     clearInterval(changebg)
     changebg = null
})

