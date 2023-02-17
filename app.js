const express = require('express');
const app = express();

app.set('view engine','ejs');

const blogs = [
    {title: 'Sobre Javascritp', snippet:'lLorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis'},
    {title: 'Sobre React.js', snippet:'lLorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis'},
    {title: 'Sobre Node.js', snippet:'lLorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis'},
]

app.get('/',(req, res)=> {
    res.render('index', {title: 'Index', blogs})
});
    
app.get('/about',(req, res)=> {
    res.render('about', {title: 'About'})
});

app.get('/blogs/create',(req, res)=> {
    res.render('create', {title: 'Create'})
});

app.use('/',(req, res)=> {
    res.render('404',{title: 'Not found'})
});

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000")
});
