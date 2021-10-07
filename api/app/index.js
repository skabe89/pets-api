const express = require('express')
const app = express()
const port = 3001
let pets = [
    {name: "Peppers",age: 10,type: "Dog",color: "White/Black"},
    {name: "Shaggy",age: 12,type: "Cat",color: "White"},

]

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/pets', (req, res) => {
    res.send(pets)
})

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})