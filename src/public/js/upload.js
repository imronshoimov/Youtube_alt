const upload_form = document.querySelector('#upload_form')

upload_form.addEventListener('submit', async event => {
    event.preventDefault()

    let formData = new FormData()
    formData.append('vide_name', vide_name.value)
    formData.append('file', upload_video.files[0])

    let res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
    })

    upload_form.reset()
})