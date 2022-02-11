require('dotenv').config()
const express = require('express')


const server = express()

server.get('/api/users', (req, res) => {
    res.json([
        { id: 1, username: 'jessica'},
        { id: 2, username: 'gabie'},
        { id: 3, username: 'jamile'},
    ])
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})