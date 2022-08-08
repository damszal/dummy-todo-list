import * as bootstrap from 'bootstrap'

const outputStyle = (border='border',marginY='my-2',padding='p-2') => {
    const style = {
        border,
        marginY,
        padding
    }   
    val = Object.values(style).map(e=>e)
    return val
}


const selectedQuery = (selector)=>{
    return document.querySelector(selector)
}
const createElement = (tag) => {
    return document.createElement(tag)
}

const transferValue = (formEl,outputEl)=> {
    return outputEl.innerText = formEl.value
}

function saveNote(e) {
    e.preventDefault()
    const addContainer = createElement('div');
    const topicInput = selectedQuery('#topicInput');
    const todoListItem = selectedQuery('.todoListItem')
    const topicOutput = createElement('div');
    const note = createElement('div');
    transferValue(topicInput,topicOutput)
    transferValue(todoListItem,note)
    
    topicOutput.classList.add(...outputStyle())
    addContainer.append(topicOutput)   
    note.classList.add(...outputStyle())
    addContainer.append(note)
    
    selectedQuery('form').after(addContainer)
    selectedQuery('form').reset()

} 

selectedQuery('form').addEventListener('submit',saveNote)





// const outputStyle = {
//     border : 'border',
//     marginY: 'my-2',
//     padding: 'p-2'
// }

// const val = Object.values(outputStyle).map(e=>e)







