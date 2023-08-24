function submitData(name, email) {
    const userInfo = {
        name,
        email
    }
    return fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userInfo)
    })
    .then((resp) => resp.json())
    .then((data) => (document.body.innerHTML = data['id']))
    .catch((error) => {
        document.body.innerHTML = error.message
    })
    
}

console.log(submitData("hi", "hi"))
