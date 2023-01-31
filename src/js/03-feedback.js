import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form')
const inputRef = document.querySelector('.feedback-form input')
const textareaRef = document.querySelector('.feedback-form textarea')

const formData = {}

formRef.addEventListener('submit', throttle(onFormSubmit, 500))
formRef.addEventListener('input', e =>{
    const existData = localStorage.getItem('feedback-form-state') ? JSON.parse(localStorage.getItem('feedback-form-state')) : null
    if(existData !== null) {
        console.log(existData)
        
        if( `${formData[e.target.name]}` in existData){
            existData[e.target.name] = e.target.value
            localStorage.setItem('feedback-form-state', JSON.stringify(existData))
            console.log(existData)
        } else {
            formData[e.target.name] = e.target.value
            localStorage.setItem('feedback-form-state', JSON.stringify(formData))
            console.log(formData)
        }
    } else {
        formData[e.target.name] = e.target.value
            localStorage.setItem('feedback-form-state', JSON.stringify(formData)) 
    }
})


function inputAdd () {
    const parsedData = localStorage.getItem('feedback-form-state') ? JSON.parse(localStorage.getItem('feedback-form-state')) : null
    if (parsedData !== null ) {
        inputRef.value = parsedData.email ? parsedData.email : ""
        textareaRef.value = parsedData.message ? parsedData.message: "" } 
        console.log(parsedData)
}


inputAdd()


function onFormSubmit(e) {
    e.preventDefault();
    console.log(FormData)
    if (!e.target.email.value || !e.target.message.value) {
      alert('Enter all data');
    
    } else {
        e.currentTarget.reset()
        localStorage.clear()
        
    }}


    console.log('test')


 

