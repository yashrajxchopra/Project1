document.getElementById('submitBtn').addEventListener('click',(e)=>{
    e.preventDefault()
    const text = document.getElementById('text-input').value
    const newLi = document.createElement('li')
    newLi.textContent = text
    newLi.setAttribute('class', 'list-group-item')
    document.getElementById('items').appendChild(newLi)

})