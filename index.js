document.addEventListener('DOMContentLoaded', ()=>{
  const bagelsUl = document.getElementById('bagelsUl')
  const submitButton = document.getElementById('submit_Button')
  const textBox = document.getElementById('bagels_input')

  fetch('http://bagel-api-fis.herokuapp.com/bagels')
  .then(response => response.json())
  .then(result => {
    console.table(result)
    renderBagels(result)
  })

  function renderBagels(result){
    result.map(bagel =>{
      let li = document.createElement('li')
      li.innerText = bagel.type
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





})
