form.onsubmit = async (event) => {
    event.preventDefault()
    let res = await request('/login', 'POST', {
        username: username.value,
        password: password.value
    })

    if (res) {
        display.textContent = res.message
        setTimeout(() => {
            window.location = '/api/upload'
        }, 1000)
    } else {
        display.textContent = res.message
    }

    form.reset()
}