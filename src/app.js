import express from 'express'
import router from './routers/pizza.router.js'
import mongoose from 'mongoose'
import { loggerMiddleware } from './utils.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUIExpress from 'swagger-ui-express'

const specs = swaggerJSDoc({
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentacion de Pizzas',
            description: 'details...'
        }
    },
    apis: ['./docs/**/*.yml']
})

const app = express()
app.use(express.json())
app.use(loggerMiddleware)
app.use('/docs', swaggerUIExpress.serve, swaggerUIExpress.setup(specs))
app.use('/api/pizzas', router)

mongoose.connect('mongodb://localhost:27017', { dbName: 'integradora_4'})
    .then(() => app.listen(8080, () => console.log('Server Up!')))
    .catch(err => console.log(err.message))
