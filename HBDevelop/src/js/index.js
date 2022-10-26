function  pageloaded(){
    const buttonSumbit=document.querySelector('.block-form__button-sumbit_big');
    const nameInput=document.querySelector('.form-name__input');
    const telInput=document.querySelector('.form-tel__input');
    
    buttonSumbit.addEventListener('click', formSumbit);
    function formSumbit(e){
        e.preventDefault();
        if(nameInput.validity.valid&&telInput.validity.valid){
            alert('Заявка отправлена')
            console.log('Заявка отправлена')
        }else{
            alert('Заявка не отправлена')
            console.log('Заявка не отправлена')
        }
        
    }
    
    nameInput.addEventListener('input', function(event){
        if(nameInput.validity.patternMismatch){
            nameInput.classList.remove('form-name__input');
            nameInput.classList.add('form-name__input_add')
            nameInput.setCustomValidity('Введите правильный номер')
        }else{
            nameInput.classList.remove('form-name__input_add');
            nameInput.classList.add('form-name__input')
            nameInput.setCustomValidity('')
        }
        return nameInput.value
            
    })
    telInput.addEventListener('input', function(event){
if(telInput.validity.patternMismatch){
    telInput.classList.remove('form-tel__input');
telInput.classList.add('form-tel__input_add')
            telInput.setCustomValidity('Введите правильный номер')
}else{
    telInput.classList.remove('form-tel__input_add');
    telInput.classList.add('form-tel__input')
    telInput.setCustomValidity('')
}
         
return telInput.value;
        
    })

}

document.addEventListener('DOMContentLoaded', pageloaded);