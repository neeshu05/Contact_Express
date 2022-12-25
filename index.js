const express = require('express');
const path = require('path') 

const port = 8000;

const app = express();
app.use(express.urlencoded())

app.set('view engine', 'ejs'); 
app.set('views',path.join(__dirname,'views'))

// app.use(function(req,res,next){
//     console.log('middleware called')
//     next()
// })
// app.use(function(req,res,next){
//     console.log('middleware2 called')
//     next()
// })
app.use(express.static('assets'))



var contact = [
    {
        name:'Neeshu Maini',
        phone:'9131242844'
    },
    {
        name:'Pari Maini',
        phone:'7389739870'
    },

]

app.get('/',function(req,res){
    // return res.send('hello world')
    return res.render('index',{title:"Let's start",contact_list: contact})
})

app.get('/contact-delete/:phone',function(req,res){
    let ph = req.params.phone
    let contactIndex = contact.findIndex(contact => contact.phone == ph)
    // console.log(contactIndex)
    contact.pop(contactIndex)
    console.log(contact)
    return res.redirect('/')
})

app.get('/play',function(req,res){
    return res.render('play',{title: "Let's start playing",val:"Go for it",name:'Neeshu',last:'Maini',roll:'0201ec191048',exp:'BreadCrumb'})
})

app.post('/con',function(req,res){
    contact.push({
        name:req.body.my_name,
        phone:req.body.my_phone
    })
    return res.redirect('/')
})

app.listen(port,function(){
    console.log('the server is up and runnning')
})