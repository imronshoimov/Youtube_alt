form.onsubmit = async (event) => {
    event.preventDefault()
    
    let formData = new FormData()
    formData.append('username', username.value)
    formData.append('password', password.value)
    formData.append('email', email.value)
    formData.append('file', fileImage.files[0])
    
    let response = await fetch('/register', {
        method: 'POST',
        body: formData
        
    })
    response = await response.json()
    if(response) {
        display.textContent = response.message
        setTimeout(() => {
            window.location = '/upload'
        }, 1000)
    } else {
        display.textContent = response.message
    }
    
    form.reset()
}