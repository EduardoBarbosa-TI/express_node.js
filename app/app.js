const express = require('express')
const app = express()
const port = 3000


//Exemplos de rotas com métodos de requisição http
app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.post('/post', (req,res) => {
    res.send('Post request to the homepage')
})

app.put('/user', (req,res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/user',(req,res) =>{
    res.send('Got a DELETE request at /user')
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})

app.all('/all', (req,res) => {
    res.send('Got a ALL request at /all')
})