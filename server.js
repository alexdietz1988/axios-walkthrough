require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.send('Hello there')
})

app.get('/testing-axios', (req,res) => {
    const queryOptions = {
        params: {
            s: 'twilight',
            apikey: process.env.apikey
        }
    }

    axios.get('http://www.omdbapi.com', queryOptions)
        .then(function (response) {
            const context = response.data
            res.render('index.ejs', context)
        })
})

app.listen(PORT, () => console.log(`Now listening on port:${PORT}`))