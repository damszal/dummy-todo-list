import * as bootstrap from 'bootstrap'

const firebaseConfig = {



  };

  firebase.initializeApp(firebaseConfig);

  var todoListDB = firebase.database().ref('todoList')

  document.getElementById('todoForm').addEventListener('submit', submitForm )

  function submitForm(e) {
      
      var name1 = getElementVal('topicInput')
      var email = getElementVal('todoListItem')
      console.log(name1,email)
      saveMessages(name1,email)
    }

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const saveMessages = (name1,email) => {
    var newContactForm = todoListDB.push()

    newContactForm.set({
        name1:name1,
        email:email
    })
 }













const form = document.querySelector('form')



form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const addContainer = document.createElement('div')
    const topicInput = document.querySelector('#topicInput')
    const topicOutput = document.createElement('div')
    const note = document.createElement('div')
    topicOutput.innerText = topicInput.value
    console.log(topicOutput.innerText)
    // changes
    let a = {
        border : 'border',
        marginY: 'my-2',
        padding: 'p-2'
    }
    
    let val = Object.values(a).map(e=>e)
    const classes = ['border','p-2','my-2']

    console.log(val)
    console.log(classes)

    topicOutput.classList.add(...val)
    // topicOutput.classList.add('border')
    // topicOutput.classList.add('my-2')
    // topicOutput.classList.add('p-2')

    //-----END
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












