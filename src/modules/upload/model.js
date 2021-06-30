const fs = require('fs')
const path = require('path')

const insertVidoe = (data, userId, video) => {
    let videos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'videos.json'), 'utf-8')
    videos = videos ? JSON.parse(videos) : []
    let videId = videos.length ? videos[videos.length - 1].videId + 1 : 1
    let newVidoe = {
        videId,
        userId,
        ...data,
        video
    }
    videos.push(newVidoe)
    fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'videos.json'), JSON.stringify(videos, null, 4))
}

const remove = ({ id }) => {
    let videos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'videos.json'), 'utf-8')
    videos = videos ? JSON.parse(videos) : []
    let filtered = videos.filter(video => video.videId != id)
    fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'videos.json'), JSON.stringify(filtered, null, 4))
    return filtered  
}

module.exports = {
    insertVidoe,
    remove
}