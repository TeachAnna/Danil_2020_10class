let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

var tags = document.querySelectorAll('article');
var i = 0;

prev.onclick = function(){
     tags[i].style.display = 'none';
     i--;

     if(i < 0){
         i = tags.length - 1;
     }

     tags[i].style.display = 'block';
}

btn_next.onclick = function(){
     tags[i].style.display = 'none';
     i++;

     if(i >= tags.length){
         i = 0;
     }

     tags[i].style.display = 'block';
}
