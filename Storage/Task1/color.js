const bgColor=document.querySelector('.bgColor');
const div=document.querySelector('div')
bgColor.onchange=bgColorValueSet;

if(!localStorage.getItem('bgColor')){
    bgColorValueSet() 
}else{
    divBgColorGet()
}
function bgColorValueSet(){
    localStorage.setItem('bgColor', bgColor.value)
    console.log(bgColor.value)
    divBgColorGet();

}
function divBgColorGet(){
    let divColor=localStorage.getItem('bgColor');
    console.log(localStorage.getItem('bgColor'));
    document.querySelector('.bgColor').value=divColor;
    div.style.backgroundColor=divColor

}

