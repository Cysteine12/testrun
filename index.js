const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//=======Middleware======//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

//=======Routes========//
const product = require('./routes/api/product')
app.use('/api', product)

// app.use('/', (req, res) => {
//     res.status(200)
//     res.send('Hi, This is still working')
// })

//=======........========//

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'))

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

//=======........========//
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))