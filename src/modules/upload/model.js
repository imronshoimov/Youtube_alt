const fs = require('fs')
const path = require('path')

const insertVidoe = (data, userId, video) => {
    let videos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'videos.json'), 'utf-8')
    videos = videos ? JSON.parse(videos) : []
    let videoId = videos.length ? videos[videos.length - 1].videoId + 1 : 1
    let newVidoe = {
        videoId,
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
    let filtered = videos.filter(video => video.videoId != id)
    fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'videos.json'), JSON.stringify(filtered, null, 4))
    return filtered  
}

const update = (data) => {
    let videos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'videos.json'), 'utf-8')
    videos = videos ? JSON.parse(videos) : []
    let found = videos.find(vid => vid.videoId === data.videoId)
    if(found) {
        let updated = { ...videos, ...data }
        fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'videos.json'), JSON.stringify(updated, null, 4))
        return updated
    } else return
}

module.exports = {
    insertVidoe,
    remove,
    update
}