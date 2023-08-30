import express from 'express'
import router from './routers/pizza.router.js'
import mongoose from 'mongoose'

const app = express()
app.use('/api/pizzas', router)

mongoose.connect('mongodb://localhost:27017', { dbName: 'integradora_4'})
    .then(() => app.listen(8080, () => console.log('Server Up!')))
    .catch(err => console.log(err.message))
