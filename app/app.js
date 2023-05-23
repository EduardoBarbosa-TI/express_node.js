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

//Exemplo de como é tratado os parâmetros em express
//Route path: /users/:userId/books/:bookId
//Request URL: http://localhost:3000/users/34/books/8989
//req.params: { "userId": "34", "bookId": "8989" }

//Declarando rota com expressão regular
app.get(/.*user$/, (req,res) => {
    res.send('/.*user$/')
})

//Declarando rota com parâmetro
app.get('/user/:id', (req,res) => {
    res.send(req.params)
})


//Manipuladores de Rotas
//Podemos utilizar várias funções de retorno de chamada que se comportam como middleware para lidar com a solicitação. Sendo possível esses retornos de chamadas serem acomapnhados pelo next()
//Manipuladores de rotas podem estar na forma de uma função, uma matriz de funções ou combinações de ambos

app.get('/teste/a',(req, res) =>{
    res.send('Hello from A!')
});

app.get('/testes/a', (req,res,next) => {
    console.log('The response will be sent by the next function...')
    next()
}, (req, res) => {
    res.send('Hello from B!')
})

//Matriz
const ex01 =  function(req,res,next) {
    console.log('EX01')
    next()
}

const ex02 = function(req,res,next){
    console.log('EX02');
    next()
}

const ex03 =  function(req,res){
    console.log('EX03')
}

app.get('/example/a',[ex01,ex02,ex03])

//app.route()
//Possibilita a criação de manipuladores de rota encadeáveis para um caminho de rota.
app.route('/example')
    .get((req,res) =>{
        res.send('Get a random example')
    })
    .post((req,res) =>{
        res.send('Add a example')
    })
    .put((req,res) => {
        res.send('Update the example')
    })

//express.Router
//Possibilita a criação de manipuladores de rota modulares e montáveis. 
//Middleware criado para meios explicativos, específico desta rota
const router = express.Router()

router.use((req,res,next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req,res) => {
    res.send('Birds home page')
})

router.get('/about', (req,res) => {
    res.send('About birds')
})

module.exports = router

