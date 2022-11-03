const text=document.getElementById('text');
const btn=document.querySelector('.submit')
text.value=localStorage.getItem('text');
text.addEventListener('input', function(event){

    text.oninput=function(){
       localStorage.setItem('text', text.value)
        
        }
})

btn.addEventListener('click', function(event){
   if(localStorage.getItem('text')){
        localStorage.removeItem('text')
   }else
     event.preventDefault();
      
})