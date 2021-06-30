const upload_form = document.querySelector('#upload_form')
const vidoeList = document.querySelector('.vidoe-list')

upload_form.addEventListener('submit', async event => {
    event.preventDefault()
    
    let formData = new FormData()
    formData.append('vide_name', vide_name.value)
    formData.append('file', upload_video.files[0])
    
    let res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
    })
    
    if(res) {
        homep.textContent = "The video uploaded, you may see!"
    }
    
    upload_form.reset()
})

async function rednerUploadedVideos () {
    let users = await request('/users', 'GET')
    for(let user of users) {
        let UploadedVideos = await request('/videos', 'GET')
        for(let item of UploadedVideos) {
            if (user.userId === item.userId) {
                let li = document.createElement('li')
                let button = document.createElement('button')
                let video = document.createElement('video')
                let source = document.createElement('source')
                let name = document.createElement('p')
                
                li.classList.add('video-item')
                button.classList.add('del-button')
                video.classList.add('upload-video')
                video.setAttribute('controls', true)
                video.setAttribute('width', "220px")
                video.setAttribute('height', "120px")
                source.setAttribute('src', '/' + item.video)
                name.classList.add('video-name')
                console.log(item);
                button.textContent = "x"
                name.textContent = item.vide_name
                
                video.appendChild(source)
                li.appendChild(button)
                li.appendChild(video)
                li.appendChild(name)
                vidoeList.appendChild(li)
            }
        }
    }
}

rednerUploadedVideos()