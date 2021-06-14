const express = require('express')
const hbs = require('hbs')

var app = express();
app.set('view engine','hbs')

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

app.post('/insert',(req,res)=>{
    var nameInput = req.body.txtName;
    var priceInput = req.body.txtPrice;
    if(nameInput.length < 6){
        res.render('new',{nameError:'Ten khong nho hon 6 ky tu!'})
    }else{
        res.render('saveDone',{name:nameInput,price:priceInput})
    }
})

app.get('/new',(req,res)=>{
    res.render('new');
})

app.get('/list',(req, res)=>{
    var ds = [];
    ds.push({id: 1, name: 'Iphone', price: 300});
    ds.push({id: 2, name: 'Samsung', price: 250});
    ds.push({id: 3, name: 'Oppa', price: 320});
    res.render('all',{danhsach:ds})
})

app.get('/',(req,res)=>{
    res.render('index',{name: 'Huy Thac',school:'Greenwich University'})
})

var PORT = process.env.PORT || 5000
app.listen(PORT);
console.log("Server is running at " + PORT);