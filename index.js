document.addEventListener('DOMContentLoaded', ()=>{
  const bagelsUl = document.getElementById('bagelsUl')
  const submitButton = document.getElementById('submit_Button')
  const textBox = document.getElementById('bagels_input')

  fetch('http://bagel-api-fis.herokuapp.com/bagels')
  .then(response => response.json())
  .then(result => {
    console.log(result)
    renderBagels(result)
  })

  function renderBagels(result){
    result.map(bagel =>{
      let li = document.createElement('li')
      li.innerText = bagel.type
      let deleteButton = document.createElement('button')
      deleteButton.innerText = 'delete'
      deleteButton.addEventListener('click', ()=>{
        event.target.parentNode.remove()
        deleteBagel(bagel.id)
      })
      li.appendChild(deleteButton)
      bagelsUl.appendChild(li)
    })
  }

  submitButton.addEventListener('click', ()=>{
    event.preventDefault()
    let newBagel = textBox.value
    postBagel(newBagel)
  })

  function postBagel(newBagel){
    fetch('http://bagel-api-fis.herokuapp.com/bagels',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body:JSON.stringify({type:newBagel})
    })
  }
  
  function deleteBagel(chair){
    fetch(`http://bagel-api-fis.herokuapp.com/bagels/${chair}`, {
      method:'DELETE'
    })
  }
})
