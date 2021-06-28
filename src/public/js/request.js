async function request (path, method, body) {
    let response = await fetch(path, {
        method,
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    return await response.json()
}