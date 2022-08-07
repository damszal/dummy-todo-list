import * as bootstrap from 'bootstrap'


const form = document.querySelector('form')



form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const addContainer = document.createElement('div')
    const topicInput = document.querySelector('#topicInput')
    const topicOutput = document.createElement('div')
    const note = document.createElement('div')
    topicOutput.innerText = topicInput.value
    console.log(topicOutput.innerText)
    
    topicOutput.classList.add('border')
    topicOutput.classList.add('my-2')
    topicOutput.classList.add('p-2')
    addContainer.append(topicOutput)
    
    note.classList.add('border')
    note.classList.add('my-2')
    note.classList.add('p-2')
    addContainer.append(note)
    note.innerText = form[1].value
    
    form.after(addContainer)
    form[1].value = ""
    form[0].value = ""
    
})

// function addClass(el,cls){
//     el.classList.add()
// }

// let a = {
//     border : 'border',
//     marginY: 'my-2',
//     padding: 'p-2'
// }

// let val = Object.keys(a).map(e=>e)

// console.log(val)







