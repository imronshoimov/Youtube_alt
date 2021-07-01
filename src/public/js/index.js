const userList = document.querySelector('.user-list')
const vidoeList = document.querySelector('.vidoe-list')
const uploadBtn = document.querySelector('.upload-btn')

async function renderUsers () {
    let users = await request('/users', 'GET')
    for(let user of users) {
        let li = document.createElement('li')
        let avatar = document.createElement('img')
        let name = document.createElement('p')

        li.classList.add('user-item')
        avatar.classList.add('user-image')
        name.classList.add('user-name')

        avatar.setAttribute('src', user.image)
        name.textContent = user.username

        li.addEventListener('click', async event => {
            event.preventDefault()
            vidoeList.textContent = ""  
            let videos = await request('/videos', 'GET')
            for(let item of videos) {
                if (user.userId === item.userId) {
                    let li = document.createElement('li')
                    let video = document.createElement('video')
                    let source = document.createElement('source')
                    let videosInfo = document.createElement('div')
                    let videoInfo = document.createElement('div')
                    let videoAvatar = document.createElement('img')
                    let span = document.createElement('span')
                    let videoUser = document.createElement('p')
                    let videoName = document.createElement('p')
                    let link = document.createElement('a')
                    let img = document.createElement('img')

                    li.classList.add('video-item')
                    video.classList.add('upload-video')
                    video.setAttribute('controls', true)
                    video.setAttribute('width', "450px")
                    video.setAttribute('height', "250px")
                    source.setAttribute('src', '/' + item.video)
                    videosInfo.classList.add('videos-info')
                    videoInfo.classList.add('vidoe-info')
                    videoAvatar.classList.add('video-avatar')
                    videoAvatar.src = user.image
                    videoUser.classList.add('video-user')
                    videoName.classList.add('video-name')
                    link.classList.add('down-link')
                    link.setAttribute('href', '/' + item.video)
                    link.setAttribute('download', true)
                    img.classList.add('down-image')
                    img.src = "/images/download.png"
                    img.alt = "download"

                    videoUser.textContent = user.username
                    videoName.textContent = item.video_name

                    video.appendChild(source)
                    span.appendChild(videoUser)
                    span.appendChild(videoName)
                    videoInfo.appendChild(videoAvatar)
                    videoInfo.appendChild(span)
                    videosInfo.appendChild(videoInfo)
                    link.appendChild(img)
                    videosInfo.appendChild(link)
                    li.appendChild(video)
                    li.appendChild(videosInfo)
                    vidoeList.appendChild(li)
                }
            }
        })

        li.appendChild(avatar)
        li.appendChild(name)
        userList.appendChild(li)
    }
}

renderUsers()

uploadBtn.addEventListener('click', () => {
    if (document.cookie) {
        window.location = "/api/upload"
    } else {
        window.location = "/login"
    }
    console.log(document.cookie);
})