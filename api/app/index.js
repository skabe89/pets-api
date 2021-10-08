const express = require('express')
const app = express()
const port = 3001
let pets = [
    {name: "Peppers", age: 10, type: "Dog", color: "White/Black"},
    {name: "Shaggy", age: 12, type: "Cat", color: "White"},
    {name: "Tasha", age: 14, type: "Dog", color: "Grey"}
]

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/pets', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(pets)
})

app.get('/pet/:id', (req, res) => {
    let pet = pets[req.params.id - 1]
    res.send(pet)
})

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})