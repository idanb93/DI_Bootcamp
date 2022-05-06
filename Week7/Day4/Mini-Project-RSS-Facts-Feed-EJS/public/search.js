const searchPostByTitle = ()=>{

    const title = document.getElementById('title').value;

    fetch('http://localhost:5002/search/title', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify({
            title,
        })
    })
    .catch(err=>{
        alert('NOT FOUND')
    })

}

const searchPostByCategory = ()=>{

    const category = document.getElementById('category').value;

    fetch('http://localhost:5002/search/category', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify({
            category,
        })
    })
    .catch(err=>{
        alert('NOT FOUND')
    })

}