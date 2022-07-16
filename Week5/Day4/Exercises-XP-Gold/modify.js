const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"
      ];

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map( async url => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

getData();