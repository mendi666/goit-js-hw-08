import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form')
const inputRef = document.querySelector('.feedback-form input')
const textareaRef = document.querySelector('.feedback-form textarea')

const formData = {}

formRef.addEventListener('submit', throttle(onFormSubmit, 500))
formRef.addEventListener('input', e =>{
    formData[e.target.name] = e.target.value
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
})

const savedData = localStorage.getItem('feedback-form-state')
const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'))

console.log(parsedData)

function inputAdd () {
    if (parsedData != null) {
        inputRef.value = parsedData.email
        textareaRef.value = parsedData.message} else {
            inputRef.value = ""
            textareaRef.value = ""
        }
     
}

inputAdd()

function onFormSubmit(e) {
    e.preventDefault();
    console.log('test')
    if (!e.target.email.value || !e.target.message.value) {
      alert('Enter all data');
    
    } else {
        e.currentTarget.reset()
        localStorage.clear()
        
    }}

    console.log(wdqwd)

 

