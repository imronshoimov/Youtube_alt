const userList = document.querySelector('.user-list')
const vidoeList = document.querySelector('.vidoe-list')
const uploadBtn = document.querySelector('.upload-btn')
const searchInput = document.querySelector('.search-input')
const barList = document.querySelector('.bar-list')
const navForm = document.querySelector('.nav-form')
const resBtn = document.querySelector('.res-btn')
const leftBtn = document.querySelector('.left-btn')
const backBtn = document.querySelector('.back-btn')

async function renderUsers (data) {
    let users = await data
    for(let user of users) {
        let li = document.createElement('li')
        let avatar = document.createElement('img')
        let name = document.createElement('p')
        
        li.classList.add('user-item')
        avatar.classList.add('user-image')
        name.classList.add('user-name')
        
        avatar.setAttribute('src', '/' + user.image)
        name.textContent = user.username

        backBtn.addEventListener('click', () => {
            userList.classList.remove('userHidden')
            backBtn.style.display = "none"
        })
        
        li.addEventListener('click', async event => {
            event.preventDefault()
            vidoeList.textContent = ""  
            userList.classList.add('userHidden')
            backBtn.style.display = "block"
            let videos = await request('/videos', 'GET')
            for(let item of videos) {
                if (user.userId == item.userId) {
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
                    videoAvatar.src = '/' + user.image
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

renderUsers(request('/users', 'GET'))

uploadBtn.addEventListener('click', () => {
    if (document.cookie) {
        window.location = "upload"
    } else {
        window.location = "/login"
    }
})



searchInput.addEventListener('keyup', async event => {
    barList.textContent = " "
    event.preventDefault()
    let videos = await request('/videos', 'GET')
    let inputValue = searchInput.value
    let searchResult = videos.filter(value => {
        return value.video_name.toLowerCase().includes(inputValue)
    })
    
    for(let item of searchResult) {
        let li = document.createElement('li')
        li.classList.add('bar-item')
        li.textContent = item.video_name
        barList.appendChild(li)
        
        li.addEventListener('click', async e => {
            vidoeList.textContent =  " "
            barList.style.display = "none"
            
            let users = await request('/users', 'GET')
            for(let user of users) {
                if (user.userId == item.userId) {
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
                    videoAvatar.src = '/' + user.image
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
    }
})

resBtn.addEventListener('click', (e) => {
    e.preventDefault()
    navForm.classList.add('res-form')
    searchInput.classList.add('res-input')
    leftBtn.style.display = "block"
})

leftBtn.addEventListener('click', (e) => {
    e.preventDefault()
    navForm.classList.remove('res-form')
    searchInput.classList.remove('res-input')
})
