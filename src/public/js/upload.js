const upload_form = document.querySelector('#upload_form')
const vidoeList = document.querySelector('.vidoe-list')

window.addEventListener('click', () => {
    if (!document.cookie) {
        setTimeout(() => {
            window.location = "/login"
        }, 1000)
    }
})

upload_form.addEventListener('submit', async event => {
    event.preventDefault()
    
    let formData = new FormData()
    formData.append('video_name', video_name.value)
    formData.append('file', upload_video.files[0])
    
    let res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
    })
    
    if(res) {
        homep.textContent = "The video uploaded, you may see it!"
    }
    
    upload_form.reset()
})

console.log();

async function rednerUploadedVideos () {
    let UploadedVideos = await request('/videos', 'GET')
    let id = document.cookie.split('id=')[1] - 0
    for(let item of UploadedVideos) {
        if (id == item.userId) {
            let li = document.createElement('li')
            let button = document.createElement('button')
            let video = document.createElement('video')
            let source = document.createElement('source')
            let span = document.createElement('span')
            let edit = document.createElement('button')
            let editImg = document.createElement('img')
            let name = document.createElement('p')
            
            li.classList.add('video-item')
            button.classList.add('del-button')
            video.classList.add('upload-video')
            video.setAttribute('controls', true)
            video.setAttribute('width', "220px")
            video.setAttribute('height', "120px")
            source.setAttribute('src', '/' + item.video)
            edit.classList.add('edit-button')
            editImg.classList.add('edit-name')
            editImg.setAttribute('src', '/images/edit.png')
            name.classList.add('video-name')
            name.setAttribute('contenteditable', true)
            button.textContent = "x"
            name.textContent = item.video_name
            
            button.addEventListener('click', async event => {
                let response = await request('/api/upload', 'DELETE', { id: item.videoId })
                if (response) {
                    li.remove() 
                }
            })
            
            edit.addEventListener('click', async event => {
                event.preventDefault()
                
                let edited = await request('/api/upload', 'PUT', { videoId: item.videoId, video_name: name.textContent })
            })
            
            video.appendChild(source)
            li.appendChild(button)
            li.appendChild(video)
            span.appendChild(name)
            edit.appendChild(editImg)
            span.appendChild(edit)
            li.appendChild(span)
            vidoeList.appendChild(li)
        }
    }
}

rednerUploadedVideos()

