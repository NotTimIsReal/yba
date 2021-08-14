const express=require('express')
let engines=require('consolidate')
const app=express()
app.use(express.static(__dirname+'/public'))
app.use('/css', express.static(__dirname+'public/css'))
app.use('/img', express.static(__dirname+'public/img'))
app.use('/js', express.static(__dirname+'public/js'))
app.set('views', './views')
app.set('view engine', 'pug')
app.engine('pug', require('pug').renderFile);
app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/perks', (req, res)=>{
    res.render('features')
})
app.get('/about-me', (req, res)=>{
    res.render('about-me')
})
app.get('/pricing', (req, res)=>{
    res.render('pricing')
})
app.get('/dashboard', (req, res)=>{
    res.render('dashboard')
})
app.locals.basedir = '/Users/alastair/Desktop/Personal-Coding/Help-PHP_idk_plshelp/views';
app.listen('3000')