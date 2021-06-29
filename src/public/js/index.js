const userList = document.querySelector('.user-list')

async function renderUsers () {
    let users = await request('users', 'GET')
    for(let user of users) {
        let li = document.createElement('li')
        let avatar = document.createElement('img')
        let name = document.createElement('p')

        li.classList.add('user-item')
        avatar.classList.add('user-image')
        name.classList.add('user-name')

        avatar.setAttribute('src', user.image)
        name.textContent = user.username

        li.appendChild(avatar)
        li.appendChild(name)
        userList.appendChild(li)
    }
}

renderUsers()