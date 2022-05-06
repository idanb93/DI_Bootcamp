const express = require('express');
const { getAllFacts } = require('./moduels/rss-reader');
const app = express();

app.listen(5002, ()=>{
    console.log('Server is listening on 5002');
})

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', express.static(__dirname+'/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    getAllFacts()
    .then(allFacts=>{
        res.render('index', {allFacts: allFacts.items})
    })
    .catch(err=>{
        console.log(err);
    })
})

app.get('/search', (req, res)=>{
    res.render('search', {allFacts: []});
})

app.post('/search/title', (req, res)=>{
    const {title} = req.body;
    getAllFacts()
    .then(allFacts=>{
        res.render('index', {allFacts: allFacts.items.filter((item)=>{
            return item.title === title;
        })})
    })
    .catch(err=>{
        console.log(err);
    })
})

app.post('/search/category', (req, res)=>{
    const {category} = req.body;
    getAllFacts()
    .then(allFacts=>{
        res.render('index', {allFacts: allFacts.items.filter((item)=>{
            return item.categories.includes(category);
        })})
    })
    .catch(err=>{
        console.log(err);
    })
})