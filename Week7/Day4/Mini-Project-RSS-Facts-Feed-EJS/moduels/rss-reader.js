let Parser = require('rss-parser');
let parser = new Parser();

// (async () => {

//   let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
//   console.log(feed.title);

//   feed.items.forEach(item => {
//       console.log();
//     console.log(item.title + ':' + item.link)
//   });

// })();


const getAllFacts = async ()=>{
  return await parser.parseURL('https://www.thefactsite.com/feed/');
}

module.exports = {
  getAllFacts,
}